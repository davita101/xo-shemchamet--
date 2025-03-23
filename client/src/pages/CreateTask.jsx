import { ArrowLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useTask } from '../store/task-store'

export default function CreateTask() {
  const [updateData, setUpdateData] = useState({ title: "", desc: "" })

  const { addTask, isLoading } = useTask()

  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading) {
      navigate("/home")
    }
  }, [])
  console.log(isLoading)

  const handleSendData = () => {
    addTask(updateData)
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='container w-full'>
        <div>
        </div>
        <div className='my-2 max-w-[800px] mx-auto w-full flex flex-col gap-2'>
          <div>
            <Link to={"/home"}><ArrowLeft className=' rounded-full cursor-pointer' color='black' /></Link>
            <h1>CREATE TASK</h1>
            <form className='card p-0 relative flex flex-col'>
              <div className='hover:bg-gray-200 p-4'>
                <label ><b>Title</b></label>
                <input
                  onChange={e => setUpdateData({ ...updateData, title: e.target.value })}
                  type="text"
                  className='w-full'
                  value={updateData.title}
                  placeholder='Enter title' />
              </div>
              <div className='hover:bg-gray-200 p-4'>
                <label ><b>Description</b></label>
                <input
                  onChange={e => setUpdateData({ ...updateData, desc: e.target.value })}
                  type="text"
                  className='w-full'
                  value={updateData.desc}
                  placeholder='Enter description' />
              </div>
              <button
                onClick={() => handleSendData()}
                className=' mt-4 w-30 m-4'>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
