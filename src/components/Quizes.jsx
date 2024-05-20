import React, { useState } from 'react';
import Image from 'next/image';
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
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";



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
            <div className='mx-2 mb-3'>
                <div className='flex justify-between items-center border rounded-md border-gray-200 py-2 pl-5 pr-4 hover:bg-blue-50'>
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
                    <div>
                        <Popover>
                            <PopoverTrigger>
                                <div className='p-1 hover:bg-blue-100 rounded-full'>
                                    <Image
                                        unoptimized
                                        className='w-6 h-6 mx-auto my-auto'
                                        src='/images/menu-3-dot-icon.png'
                                        width={100}
                                        height={100}
                                    />
                                </div>

                            </PopoverTrigger>

                            <PopoverContent className='w-fit py-2'>
                                <div className='flex flex-col gap-1 w-fit'>
                                    <Dialog>
                                        <DialogTrigger className=' bg-white hover:bg-gray-100  mr-2 py-1 px-3 rounded-md text-sm mb-1 md:mb-0 w-14'>Edit</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Update the quiz</DialogTitle>
                                                <DialogDescription>
                                                    <div className=' font-serif mb-2 '>Add a Question for quiz</div>
                                                    <div className='text-black'>
                                                        <Textarea placeholder="Enter a topic here" onChange={(e) => { setQuizQuestion(e.target.value) }} />
                                                        <div className='my-2 font-serif'>Add the options</div>
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
                                                        <button onClick={() => handleEdit(quiz._id)} className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>Apply changes</button>
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>

                                    <Dialog>
                                        <DialogTrigger className='hover:bg-gray-100 py-1 px-3 w-14 rounded-md text-sm'>Delete</DialogTrigger>

                                        <DialogContent>
                                            <DialogDescription>
                                                <div className='text-center text-lg p-4 *:my-4'>
                                                    <div>
                                                        Are you sure you want to delete this assignment?
                                                    </div>
                                                    <div className='flex justify-center gap-4'>
                                                        {/* <button className='py-2 px-6 bg-[#b9bbc7] hover:bg-[#9da0b2] rounded-md text-white text-sm'>Cancel</button> */}
                                                        <button onClick={() => handleDelete(quiz._id)} className='bg-[#ed5e68] hover:bg-[#e9434f] py-2 px-6 border-[#ed5e68] rounded-md text-white text-sm'>Delete</button>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </PopoverContent>
                        </Popover>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quizes