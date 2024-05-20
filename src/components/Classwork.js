import React, { useContext, useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from './ui/textarea';
import { BACKEND_URL } from '../../config';
import Assignment from './Assignment';
import Quizes from './Quizes';
import { toast } from 'sonner';
import { useRouter } from 'next/router';
import { Appcontext } from '@/context/AppContext';

const Classwork = ({ role }) => {
    const [assignmentName, setAssignmentName] = useState("");
    const [assignmentDesc, setAssignmentDesc] = useState("");
    const [assignmentPoint, setAssignmentPoint] = useState(0);
    const [assignmentUrl, setAssignmentUrl] = useState("");
    const [quizQuestion, setQuizQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [date, setDate] = useState("");
    const [allAssignments, setAllAssignments] = useState([]);
    const [allQuizes, setAllQuizes] = useState([]);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isAssignmentClicked , setIsAssignmentClicked ] = useState(false);
    const router = useRouter();
    const context = useContext(Appcontext);
    const { setClassroomAssignmentList } = context;
    const { id } = router.query;

    
    useEffect(()=>{
        if (role === 'teacher'){
            setIsTeacher(true);
        }
        else {
            setIsTeacher(false);
        }
    },[role]);

    const fetchAssignments = async () => {
        try {
            setIsAssignmentClicked(true);
            const res = await fetch(`${BACKEND_URL}/api/assignments/getAssignment?classroom_id=${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${context.sessionId}`,
                },
            });
            if (res.ok) {
                const response = await res.json();
                setAllAssignments(response);
                setClassroomAssignmentList(response);
            }
        } catch (error) {
            console.log(error);
        }finally{
            setIsAssignmentClicked(false);
        }
    }

    const fetchQuiz = async () => {
        try {
            const res = await fetch(`${BACKEND_URL}/api/quizes/getQuiz`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${context.sessionId}`,
                },
            });
            if (res.ok) {
                const response = await res.json();
                setAllQuizes(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAssignments();
        fetchQuiz();
    }, [id]);

    const handleAssignment = async () => {
        try {
            if (!assignmentName || !date) {
                toast.warning("Enter all the fields");
                return;
            }
            const assignmentDetails = {
                assignment_name: assignmentName,
                assignment_date: date,
                assignment_desc: assignmentDesc,
                assignment_point: assignmentPoint,
                assignment_url: assignmentUrl,
                classroom_id: id,
            }
            const res = await fetch(`${BACKEND_URL}/api/assignments/add_assignment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.sessionId}`,
                },
                body: JSON.stringify(assignmentDetails),
            });
            const data = await res.json();
            if (res.ok) {
                setOpen(false);
                toast.success("Assignment created successfully");
                console.log("assignment ban gaya bhai");
                await fetchAssignments();
            }
            else {
                toast.error("Couldn't add assignment");
            }
        } catch (error) {
            toast.error("Assignment creation failed");
            console.log(error);
        }
    }

    const handleQuiz = async () => {
        try {
            if (!quizQuestion || !option1 || !option2 || !option3 || !option4) {
                toast.warning("Enter all the fields");
                return;
            }
            const quizDetails = {
                quiz_question: quizQuestion,
                quiz_option1: option1,
                quiz_option2: option2,
                quiz_option3: option3,
                quiz_option4: option4,
            }
            console.log("yes sir");
            const res = await fetch(`${BACKEND_URL}/api/quizes/add_quiz`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.sessionId}`,
                },
                body: JSON.stringify(quizDetails),
            });
            const data = await res.json();
            if (res.ok) {
                setOpen(false);
                toast.success("Quiz created successfully");
                console.log("quiz ban gaya bhai");
            }
            else {

                console.log("ok nhi hai bhai");
            }
        } catch (error) {
            toast.error("Quiz creation failed");
            console.log(error);
        }
    }

    return (
        <div className='w-11/12'>
            <div className='flex flex-col'>
                {/* <div>All Topics</div>
                <div className='border-t-2 border-blue-100 m-2'></div>
                <div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                </div> */}
                <div className='flex justify-end'>
                    {

                            isTeacher && <Dialog open={open} onOpenChange={setOpen} >
                            <DialogTrigger className='bg-blue-500 text-white px-3 py-2 text-sm rounded-md mr-2'>
                                Create
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Create a assignment or a quiz.
                                    </DialogTitle>
                                    <DialogDescription className="text-black">
                                        <div className='flex gap-2 mt-2'>
                                            <Tabs defaultValue="account" className="w-full">
                                                <TabsList>
                                                    <TabsTrigger value="assignment">Assignment</TabsTrigger>
                                                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                                                </TabsList>
                                                <TabsContent value="assignment">
                                                    <div className='ml-2'>
                                                        <div className=' font-serif mb-2 '>Add a heading for assignment</div>
                                                        <div>
                                                            <Textarea placeholder="Enter a topic here" onChange={(e) => { setAssignmentName(e.target.value) }} />
                                                            <div className=' font-serif my-2 '>Add a description for assignment</div>
                                                            <input placeholder="Enter a topic here" className='w-full outline-none border rounded-md p-2' onChange={(e) => { setAssignmentDesc(e.target.value) }} />
                                                            <div className=' font-serif my-2 '>Total point</div>
                                                            <input type='number' max={100} placeholder="Enter a topic here" className='w-full outline-none border rounded-md p-2' onChange={(e) => { setAssignmentPoint(e.target.value) }} />
                                                            <div className=' font-serif my-2 '>If any url or link related to question</div>
                                                            <input placeholder="Enter a topic here" className='w-full outline-none border rounded-md p-2' onChange={(e) => { setAssignmentUrl(e.target.value) }} />
                                                            <div className='my-2'>Last date of submission</div>
                                                            <input
                                                                type="date"
                                                                value={date}
                                                                onChange={(e) => { setDate(e.target.value) }}
                                                                className="border border-1 border-gray-200 focus:border-black   rounded-sm p-2 focus:outline-none focus:ring-0 hover:cursor-pointer"
                                                            />
                                                        </div>
                                                        <div className='flex justify-end mt-5'>
                                                            <button onClick={() => handleAssignment()} className={`${isAssignmentClicked?'animate-pulse text-gray-700':''} px-2 py-1 bg-gray-900 hover:bg-gray-800 text-white rounded-md`}>Create Assignment</button>
                                                        </div>
                                                    </div>
                                                </TabsContent>
                                                <TabsContent value="quiz">
                                                    <div className=' ml-2'>
                                                        <div className=' font-serif mb-2 '>Add a Question for quiz</div>
                                                        <div>
                                                            <Textarea placeholder="Enter a topic here" onChange={(e) => { setQuizQuestion(e.target.value) }} />
                                                            <div className='my-2  font-serif'>Add the options</div>
                                                            <div className='flex gap-10 mb-5'>
                                                                <input onChange={(e) => { setOption1(e.target.value) }} placeholder="Enter option 1" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm placeholder:text-sm' />
                                                                <input onChange={(e) => { setOption2(e.target.value) }} placeholder="Enter option 2" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm' />
                                                            </div>
                                                            <div className='flex gap-10'>
                                                                <input onChange={(e) => { setOption3(e.target.value) }} placeholder="Enter option 3" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm' />
                                                                <input onChange={(e) => { setOption4(e.target.value) }} placeholder="Enter option 4" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm' />
                                                            </div>

                                                        </div>

                                                        <div className='flex flex-wrap justify-end mt-5'>
                                                            <button onClick={() => handleQuiz()} className='px-2 py-1 bg-gray-900 hover:bg-gray-800 text-white rounded-md'>Create Quiz</button>
                                                        </div>
                                                    </div>
                                                </TabsContent>
                                            </Tabs>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    }

                </div>
                <div className=' text-xl ml-2'>Assignments</div>
                <div className='border-t-2 border-blue-400 mx-2 mt-2 mb-4'></div>
                {allAssignments && allAssignments.map((assignment) => {
                    return <Assignment teacher={isTeacher} assignment={assignment} fetchAssignments={fetchAssignments} />
                })}
                <div className=' text-xl ml-2'>Quiz</div>

                <div className='border-t-2 border-blue-400 mx-2 mt-2 mb-4'></div>
                {allQuizes && allQuizes.map((quiz) => {
                    return <Quizes teacher={isTeacher} quiz={quiz} fetchQuiz={fetchQuiz} />
                })}

            </div>
        </div>
    )
}

export default Classwork