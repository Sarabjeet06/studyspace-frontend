import React, { useEffect, useState } from 'react'
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

const Classwork = () => {
    const [assignmentName, setAssignmentName] = useState("");
    const [quizQuestion, setQuizQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [date, setDate] = useState("");
    const [allAssignments, setAllAssignments] = useState([]);
    const [allQuizes , setAllQuizes] = useState([]);

    const fetchAssignments = async () => {
        try {
            const res = await fetch(`${BACKEND_URL}/api/assignments/getAssignment`, {
                method: "GET",
            });
            if (res.ok) {
                const response = await res.json();
                console.log(response);
                setAllAssignments(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchQuiz= async () =>{
        try{
            const res=await fetch(`${BACKEND_URL}/api/quizes/getQuiz`,{
                method: "GET",
            });
            if(res.ok){
                const response = await res.json();
                // console.log(response);
                setAllQuizes(response);
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAssignments();
        fetchQuiz();
    }, []);
    
    console.log(allQuizes);
    const handleAssignment = async () => {
        // console.log(date);
        try {
            const assignmentDetails = {
                assignment_name: assignmentName,
                assignment_date: date,
            }
            const res = await fetch(`${BACKEND_URL}/api/assignments/add_assignment`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(assignmentDetails),
            });
            const data = await res.json();
            if (res.ok) {
                console.log("assignment ban gaya bhai");
            }
            else {
                console.log("ok nhi hai bhai");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleQuiz = async () => {
        try {
            const quizDetails = {
                quiz_question: quizQuestion,
                quiz_option1: option1,
                quiz_option2: option2,
                quiz_option3: option3,
                quiz_option4: option4,
            }
            const res = await fetch(`${BACKEND_URL}/api/quizes/add_quiz`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(quizDetails),
            });
            const data = await res.json();
            if (res.ok) {
                console.log("quiz ban gaya bhai");
            }
            else {
                console.log("ok nhi hai bhai");
            }
        } catch (error) {
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

                    <Dialog>
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
                                                    <div className=' font-serif mb-2 '>Add a topic for assignment</div>
                                                    <div>
                                                        <Textarea placeholder="Enter a topic here" onChange={(e) => { setAssignmentName(e.target.value) }} />
                                                        <div className='my-2'>Last date of submission</div>
                                                        <input
                                                            type="date"
                                                            value={date}
                                                            onChange={(e) => { setDate(e.target.value) }}
                                                            className="border border-1 border-gray-200 focus:border-black   rounded-sm p-2 focus:outline-none focus:ring-0 hover:cursor-pointer"
                                                        />
                                                    </div>
                                                    <div className='flex justify-end mt-5'>
                                                        <button onClick={() => handleAssignment()} className='px-2 py-1 bg-gray-900 hover:bg-gray-800 text-white rounded-md'>Create Assignment</button>
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

                </div>
                <div className=' text-xl ml-2'>Assignments</div>
                <div className='border-t-2 border-blue-400 mx-2 mt-2 mb-4'></div>
                {allAssignments && allAssignments.map((assignment) => {
                    return <Assignment assignment={assignment} />
                })}
                <div className=' text-xl ml-2'>Quiz</div>

                <div className='border-t-2 border-blue-400 mx-2 mt-2 mb-4'></div>
                {allQuizes&&allQuizes.map((quiz)=>{
                    return <Quizes quiz={quiz} />
                })}
                
            </div>
        </div>
    )
}

export default Classwork