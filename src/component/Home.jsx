import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            const response = await axios.post()
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <div className='relative bg-blue-300 h-screen p-1'>

            <div className='relative h-[23rem] rounded-t-lg mt-5 m-auto z-50 bg-yellow-400 w-[28rem] '>
                <div className='absolute -left-[50px] top-64'>
                    <div className='bg-white border-2 border-zinc-800 h-16 rounded-t-full rotate-[25deg] w-12' />
                    <div className='w-6 h-32 rotate-[25deg] -mt-[10px] border-2 border-zinc-800 border-t-0 -ml-[30px] bg-yellow-400' />
                </div>
                <div className='absolute -right-[50px] top-64'>
                    <div className='bg-white border-2 border-zinc-800 h-16 rounded-t-full -rotate-[25deg] w-12' />
                    <div className='w-6 h-32 -rotate-[25deg] -mt-[10px] border-2 border-zinc-800 border-t-0 absolute left-[54px] bg-yellow-400' />
                </div>
                <div className='h-10 w-10 bg-yellow-500 rounded-3xl absolute left-5 top-12' />
                <div className='h-12 w-10 bg-yellow-500 rounded-3xl absolute right-5 top-16' />
                <div className='h-6 w-6 bg-yellow-500 rounded-3xl absolute left-5 top-40' />
                <div className='h-10 w-10 bg-yellow-500 rounded-3xl absolute right-5 top-56' />
                <div className='h-10 w-10 bg-yellow-500 rounded-3xl absolute left-5 top-80' />
                <div className='h-4 w-4 bg-yellow-500 rounded-3xl absolute right-5 top-2' />
                <div className='h-5 w-5 bg-yellow-500 rounded-3xl absolute right-10 top-80' />
                <div className='flex justify-center space-x-0 py-10 m-auto'>
                    <div>

                        <div className='relative rounded-full flex flex-col justify-center items-center bg-white h-32 w-32'>
                            <div className='bg-black h-4 w-2 absolute -top-4 mr-2 -rotate-2 ' />
                            <div className='bg-black h-4 w-2 absolute -top-1 -rotate-[25deg] left-5' />
                            <div className='bg-black h-4 w-2 absolute -top-[10px] right-7 rotate-[25deg]' />
                            <div className='rounded-full flex flex-col justify-center items-center  bg-blue-500 h-14 w-14'>
                                <div className='rounded-full  bg-black h-8 w-8'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className='relative rounded-full flex flex-col justify-center items-center bg-white h-32 w-32'>
                            <div className='bg-black h-4 w-2 absolute -top-4 mr-2 -rotate-2 ' />
                            <div className='bg-black h-4 w-2 absolute -top-1 -rotate-[25deg] left-5' />
                            <div className='bg-black h-4 w-2 absolute -top-[10px] right-7 rotate-[25deg]' />
                            <div className='rounded-full flex flex-col justify-center items-center  bg-blue-500 h-14 w-14'>
                                <div className='rounded-full  bg-black h-8 w-8'>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center -mt-16'>
                    <div className='bg-yellow-500 drop-shadow-2xl  shadow-inner rounded-b-2xl h-24 w-6'></div>
                </div>
                <div>
                    <div className='border-2 bg-red-300  border-zinc-800 w-[70%] m-auto mt-2 rounded-t-4xl rounded-b-full h-28'>
                        <div className='-mt-0 flex justify-center space-x-3'>
                            <div className='w-10 h-8 border-t-0 border-2 z-10 border-zinc-800 bg-white' />
                            <div className='w-10 h-8 border-2 border-t-0 z-10 border-zinc-800 bg-white' />
                        </div>
                        <div className='flex justify-center items-baseline -mt-8'>
                            <div className='h-20 w-36 bg-red-400 rounded-b-3xl'>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='relative bg-white border-b-0 border-2 border-zinc-800 mx-auto h-16 w-[28rem]'>
                <div className='bg-white border-2 border-zinc-800 h-14 w-14 absolute left-[155px] bottom-10 -rotate-[50deg]' />
                <div className='bg-white border-2 border-zinc-800 h-14 w-14 absolute right-[155px] bottom-10 rotate-45' />


                <div className='bg-red-500 rounded-br-md  h-4 rotate-45 border-2 border-zinc-800  w-4 m-auto ' />
                <div className='bg-red-500 h-7 w-7 rounded-tl-md rotate-45 m-auto border-2 border-zinc-800 ' />
            </div>
            <div className='bg-[#B67A3F] flex justify-between px-5 border-2 border-zinc-800 mx-auto h-20 w-[28rem]'>
                <div className='bg-black w-16 h-5 mt-2' />
                <div className='bg-black w-16 h-5 mt-2' />
                <div className='bg-black w-16 h-5 mt-2' />
                <div className='bg-black w-16 h-5 mt-2' />
            </div>
            <div className='flex justify-center items-center space-x-56'>
                <div>
                    <div className='bg-[#B67A3F] rounded-b-lg border-t-0 border-2 border-zinc-800 h-6 w-12'>
                    </div>
                    <div className='bg-yellow-400 ml-3 h-8 w-6 border-t-0 border-2 border-zinc-800'>
                    </div>
                </div>
                <div>
                    <div className='bg-[#B67A3F] rounded-b-lg border-t-0 border-2 border-zinc-800 h-6 w-12'>
                    </div>
                    <div className='bg-yellow-400 ml-3 h-8 w-6 border-t-0 border-2 border-zinc-800'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home