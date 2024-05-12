import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BACKEND_URL } from '../../../config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '@/utils/firebase';
import { toast } from "sonner"
import { useRouter } from 'next/router';


const loginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading1, setIsLoading1] = useState(false);
    const {source  , space_id } = router.query;

    const signInWithGoogle = async () => {
        try {
            signInWithPopup(auth, provider)
                .then(async (result) => {
                    console.log(result);
                    const user = result.user;
                    await handleLogin(user?.providerData[0]);
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async (user = "") => {
        try {
            
            var userDetails;
            if (user !== "") {
                setIsLoading1(true);
                userDetails = {
                    email: user?.email,
                    google_id: user?.uid,
                }
            } else {
                setIsLoading(true);
                userDetails = {
                    email: email,
                    password: password,
                }
            }
            const res = await fetch(`${BACKEND_URL}/api/users/login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userDetails),
            });
            const data = await res.json();
            if (res.ok) {
                console.log("user login ho gaya");
                console.log(data);
                toast.success("Login Successfull");
                if(space_id){
                    router.push(`/join-class?space_id=${space_id}&&email=${userDetails?.email}`);
                }else{
                    router.push("/space");
                }
            } else {
                console.log(data);
                console.log("ok nhi hai response");
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Login failed");
        }finally{
            setIsLoading(false);
            setIsLoading1(false);
        }
    }

    return (
        <div className='flex gap-0'>
            <div className="w-1/2 bg-green-100 h-screen hidden md:block">
                <Image className='h-screen w-full' src="/images/loginPhoto.jpg" width={500} height={500} alt='student' />
            </div>
            <div className='w-full flex justify-center md:w-1/2'>
                <div className='w-10/12 h-screen flex  flex-col justify-center align-middle gap-2 md:w-3/4'>
                    <div className='flex justify-center uppercase font_junge_custom font-bold text-xl'>study space</div>
                    <div>
                        <form className='flex flex-col gap-5' onSubmit={(e) => { e.preventDefault(); handleLogin() }}>
                            <div className='flex flex-col gap-2' >
                                <label className='w-full text-gray-600 text-sm'>Email</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} className="w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-0'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-gray-600 text-sm'>Password</label>
                                        <input onChange={(e) => { setPassword(e.target.value) }} type='password' className="px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
                                    </div>
                                    <div className='flex hover:cursor-pointer justify-end underline text-green-400 text-sm hover:text-green-400'>
                                        Forget Password?
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-4'>
                                <button type='submit' className={`bg-gray-800 px-3 py-2 text-gray-200 rounded-md hover:bg-gray-700 ${isLoading?'animate-pulse bg-gray-700': ''}`} >Login</button>
                            </div>
                        </form>
                        <div className='flex justify-around my-10 '>
                            <div className='w-5/12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent relative top-2'></div>
                            <div className='w-1/12 text-gray-900 text-sm ml-4'>or</div>
                            <div className='w-5/12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent relative top-2'></div>
                        </div>
                        <div className='w-full flex flex-col gap-3 '>
                            <button className={`w-full px-3 py-2 border border-gray-800 rounded-md ${isLoading1?'animate-pulse bg-gray-400': ''} `} onClick={() => { signInWithGoogle() }}>Login with Google</button>
                            <div className='flex justify-center text-sm'>
                                Are you new?
                                <Link href='/signup' className=' ml-1 underline text-green-500 hover:text-green-400'>Create an account</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default loginPage