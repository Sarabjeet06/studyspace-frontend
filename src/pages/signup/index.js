import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { signInWithGoogle } from '@/utils/firebase';
import { BACKEND_URL } from '../../../config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '@/utils/firebase';
import { toast } from "sonner"
import { useRouter } from 'next/router';

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const {space_id , source} = router.query;

  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          console.log(result);
          const user = result.user;
          await handleSignup(user?.providerData[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignup = async (user = "") => {
    try {
      var userDetails;
      if (user !== "") {
        setIsLoading1(true);
        userDetails = {
          username: user?.displayName,
          email: user?.email,
          google_id: user?.uid,
          profile_url: user?.photoURL,
        }
      } else {
        setIsLoading(true);
        if (!name || !email || !password || !againPassword) {
          toast.warning("Enter all the fields");
          return;
        }
        userDetails = {
          username: name,
          email: email,
          password: password,
          againPassword: againPassword,
        }
      }

      const res = await fetch(`${BACKEND_URL}/api/users/sign_up`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("user add ho gaya");
        toast.success("Sign up Successfull");
        if(space_id){
          router.push(`/join-class?space_id=${space_id}&&email=${userDetails?.email}`);
        }else{
            router.push("/space");
        }
      } else {
        console.log(data.message);
        console.log("ok nhi hai response");
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Sign up failed");
      console.log(error);
    }finally{
      setIsLoading(false);
      setIsLoading1(false);
    }
  }

  return (
    <div className='flex gap-0'>
      <div className='w-full flex justify-center md:w-1/2'>
        <div className='w-10/12 h-screen flex  flex-col justify-center align-middle gap-2 md:w-3/4'>
          <div className='flex justify-center uppercase font_junge_custom font-bold text-xl'>study space</div>
          <div>
            <form className='flex flex-col gap-5' onSubmit={(e) => { e.preventDefault(); handleSignup() }}>
              <div className='flex flex-col gap-2' >
                <label className='w-full text-gray-600 text-sm'>UserName</label>
                <input onChange={(e) => { setName(e.target.value) }} className="w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
              </div>
              <div className='flex flex-col gap-2' >
                <label className='w-full text-gray-600 text-sm'>Email</label>
                <input onChange={(e) => { setEmail(e.target.value) }} type='email' className="w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-gray-600 text-sm'>Password</label>
                <input onChange={(e) => { setPassword(e.target.value) }} type='password' className="px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-gray-600 text-sm'>Re-Enter Password</label>
                <input onChange={(e) => { setAgainPassword(e.target.value) }} type='password' className="px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm" />
              </div>
              <div className='flex flex-col gap-2'>
                <button type='submit' className={`bg-gray-800 px-3 py-2 ${isLoading?'animate-pulse bg-gray-700': ''}  text-gray-200 rounded-md hover:bg-gray-700`} >Sign up</button>
              </div>
            </form>
            <div className='flex justify-around my-5 '>
              <div className='w-5/12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent relative top-2'></div>
              <div className='w-1/12 text-gray-900 text-sm ml-4'>or</div>
              <div className='w-5/12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent relative top-2'></div>
            </div>
            <div className='w-full flex flex-col gap-3 '>
              <button onClick={signInWithGoogle} className={`w-full px-3 py-2 border border-gray-800 rounded-md  ${isLoading1?'animate-pulse bg-gray-400': ''}`}>Sign up with Google</button>
              <div className='flex justify-center text-sm'>
                Already have an account?
                <Link href='/login' className=' ml-1 underline text-green-500 hover:text-green-400'>Login to your account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-green-100 h-screen hidden md:block">
        <Image className='h-screen w-full' src="/images/signupphoto.jpg" width={500} height={500} alt='student' />
      </div>
    </div>
  )
}

export default signup