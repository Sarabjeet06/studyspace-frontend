import React, { useState } from 'react';
import { BACKEND_URL } from '../../config';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from './ui/textarea';


const Quizes = ({ quiz }) => {
    const [quizQuestion, setQuizQuestion] = useState("");
    const [quizOption1, setQuizOption1] = useState("");
    const [quizOption2, setQuizOption2] = useState("");
    const [quizOption3, setQuizOption3] = useState("");
    const [quizOption4, setQuizOption4] = useState("");

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${BACKEND_URL}/api/quizes/deleteQuiz/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                console.log("Delete kardia bhai");
            } else {
                console.log("delete nhi hua bhai");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async (id) => {
        const updatedQuiz = {
            quiz_question: quizQuestion,
            quiz_option1: quizOption1,
            quiz_option2: quizOption2,
            quiz_option3: quizOption3,
            quiz_option4: quizOption4,
        }
        try {
            const res = await fetch(`${BACKEND_URL}/api/quizes/updateQuiz/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedQuiz),
            })
            if (res.ok) {
                console.log("update ho gaya bhai");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='mx-2 mb-3 shadow-md'>
                <div className='flex justify-between border rounded-md border-gray-200 p-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='pt-1'>{quiz?.quiz_question}</div>
                        <div className='flex gap-10'>
                            <div className='flex gap-2 text-sm'>
                                <div>Option 1: </div>
                                <div>{quiz?.quiz_option1}</div>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div>Option 2: </div>
                                <div>{quiz?.quiz_option2}</div>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div>Option 3: </div>
                                <div>{quiz?.quiz_option3}</div>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div>Option 4: </div>
                                <div>{quiz?.quiz_option4}</div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Dialog>
                            <DialogTrigger className=' bg-white hover:bg-gray-100 border mr-2 border-black py-1 px-3 rounded-md text-sm'>Edit</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Update the quiz</DialogTitle>
                                    <DialogDescription>
                                        <div className=' font-serif mb-2 '>Add a Question for quiz</div>
                                        <div className='text-black'>
                                            <Textarea placeholder="Enter a topic here" onChange={(e) => { setQuizQuestion(e.target.value) }} />
                                            <div className='my-2  font-serif'>Add the options</div>
                                            <div className='flex gap-10 mb-5'>
                                                <input onChange={(e) => { setQuizOption1(e.target.value) }} placeholder="Enter option 1" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm placeholder:text-sm' />
                                                <input onChange={(e) => { setQuizOption2(e.target.value) }} placeholder="Enter option 2" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm' />
                                            </div>
                                            <div className='flex gap-10'>
                                                <input onChange={(e) => { setQuizOption3(e.target.value) }} placeholder="Enter option 3" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm' />
                                                <input onChange={(e) => { setQuizOption4(e.target.value) }} placeholder="Enter option 4" className='px-2 py-1 w-52 outline-none border border-1 border-gray-200 focus:border-black focus:ring-0 focus:outline-none focus:ring-black rounded-sm' />
                                            </div>

                                        </div>

                                        <div className='flex flex-wrap justify-end mt-5'>
                                            <button onClick={() => handleEdit(quiz._id)} className='px-2 py-1 bg-gray-900 hover:bg-gray-800 text-white rounded-md'>Apply changes</button>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        <button onClick={() => handleDelete(quiz._id)} className='bg-black hover:bg-gray-900 py-1 px-3 rounded-md text-white text-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quizes