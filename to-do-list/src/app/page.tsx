"use client"
import { useState } from 'react'

export default function Home() {
  const [name,setName] = useState("A cool guy");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submitHandler = (e:any) => {
    e.preventDefault();
    console.log(title);
    console.log(desc);
    setTitle("");
    setDesc("");
  }

  return (
    <>
      <div className=' w-full h-screen font-sans bg-purple-100'>
        <h1 className='bg-purple-500 p-6 text-center text-white font-bold  text-3xl'>{name}'s To do list</h1>
        <div className='flex py-14 h-fit justify-center mx-7'>
          <div className='flex gap-2 w-fit'>
            <form className='' action="" onSubmit={() => { submitHandler }}>
              <input className='px-2 mb-3 py-1 h-fit rounded-md border-2 border-purple-600 w-[100%]' type="text" placeholder='Enter your task'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }} />
                <textarea placeholder='Enter your description' className='px-2 py-1 mb-3 rounded-md border-2 border-purple-600 w-[100%] h-20' name="" id="" cols={30} rows={10}
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }} 
                ></textarea>
              <div className='flex w-full h-fit'>
                <button className='h-10 w-full m-auto rounded-md py-1.5 px-6 bg-purple-600 text-white' onClick={submitHandler}>Save</button>
              </div>
            </form>
          </div>

        </div>
        <div className='flex h-fit justify-center w-full'>
          <div className='px-5 py-2 rounded-md w-10/12 h-fit bg-white backdrop-blur-sm text-center'>
            hello
          </div>
        </div>
      </div>

    </>
  )
}
