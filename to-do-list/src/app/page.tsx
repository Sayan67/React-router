"use client"
import React from 'react';
import {useState } from 'react';

export default function Home(props:any) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState<{ title: string, desc: string }[]>([]);
  const submitHandler = (e: any) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }])

    console.log(mainTask);
    console.log(desc);
    setTitle("");
    setDesc("");

  }
  let taskRender : JSX.Element[] =[( <div className='w-[80%] px-5 py-2 rounded-md mb-5 h-fit bg-white bg-opacity-30 backdrop-blur-sm drop-shadow-xl text-center'>No task Pending</div>)]
  if(mainTask.length>0){
    taskRender  = mainTask.map((item, i) => {
      return (
        <>
          <div className='flex justify-items-end px-5 py-2 rounded-md mt-5 mb-5 w-[80%] h-fit bg-opacity-30 bg-white backdrop-blur-sm text-center drop-shadow-xl'>
            <div className='flex w-full'>
              
            <h2 className=' text-xl font-semibold w-full col-span-2 px-5 py-2 '>
              {item.title} 
            </h2>
            <h3 className='col-span-2 w-full px-5 py-2 '>
              {item.desc}
            </h3>
            </div>
            <button className=' w-fit flex h-fit px-5 py-2 rounded-md bg-red-500 text-white bg-opacity-80'>Delete</button>
          </div>
        </>
      )
      
    })
  
  }
  //taskRender = <div className='px-5 py-2 rounded-md w-full mb-5 h-fit bg-white backdrop-blur-sm text-center'>No task Pending</div>
  

  return (
    <>
      <div className='overflow-scroll flex-grow w-full h-[2000px] font-sans bg-cover bg-gradient-to-t from-cyan-200 to-cyan-400'>
        <h1 className='fixed w-full z-50 bg-white bg-opacity-25 backdrop-blur-md drop-shadow-xl p-6 text-center text-white font-bold text-3xl'>Cool guy's To do list</h1>
        <div className='flex py-14 h-fit justify-center mx-7'>
          <div className='flex gap-2 w-fit'>
            
            
            <form className='mt-16 px-10 py-16 bg-white bg-opacity-30 shadow-xl drop-shadow-xl rounded-md backdrop-blur-md' action="" onSubmit={() => { submitHandler }}>
             
             
              <input className='px-2 mb-3 py-1 h-fit placeholder-white rounded-md border-2 bg-white text-black bg-opacity-25 border-gray-400 w-[100%]' type="text" placeholder='Enter your task'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }} />
              
              
              <textarea placeholder='Enter your description' className='px-2 py-1 mb-3 placeholder-white bg-white bg-opacity-25 text-black rounded-md border-2 border-gray-400 w-[100%] h-20' name="" id="" cols={30} rows={10}
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
              
              
              <div className='flex w-full h-fit'>
                
                
                <button className='h-10 mt-5 w-full m-auto rounded-md drop-shadow-2xl py-1.5 px-6 shadow-xl bg-black bg-opacity-50 text-white ' onClick={submitHandler}>Save</button>
              
              
              </div>
            </form>
          </div>

        </div>
        <div className='grid h-fit align-middle place-items-center bg-transparent '>
          {taskRender}
        </div>
      </div>

    </>
  )
}
