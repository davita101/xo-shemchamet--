import { Edit, Trash } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { useTask } from '../store/task-store'

export default function Home() {

  const { getTask, allTask, deleteTask } = useTask()
  useEffect(() => {
    getTask()
  }, [])

  const handleDeleteTask = (id) => {
    deleteTask(id)
    getTask()
  }
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='container w-full'>
        <div>
          <Link to="/create-task"><button className=' hover:bg-green-400'>add task</button></Link>
        </div>
        <div className='my-2 container w-full flex flex-col gap-2'>
          {(allTask && (allTask.length >= 1)) ? (
            allTask.map((item, index) => {
              return (
                <div key={index}>
                  <div className='card relative flex flex-col'>
                    <Link to={`/edit-task/${item._id}`}><Edit className='absolute right-1 cursor-pointer' color='blue' size={30} /></Link>
                    <Trash onClick={() => handleDeleteTask(item._id)} className='absolute bottom-1 right-1 cursor-pointer' color='red' size={30} />
                    <div className='hover:bg-gray-200 p-4'>
                      <p><b>Id: </b>{item._id}</p>
                      <hr />
                    </div>
                    <div className='hover:bg-gray-200 p-4'>
                      <p><b>Title: </b>{item.title}</p>
                      <hr />
                    </div>
                    <div className='hover:bg-gray-200 p-4'>
                      <p><b>Description: </b>{item.desc.length > 1 ? item.desc : "no text"}</p>
                      <hr />
                    </div>
                    <div className='hover:bg-gray-200 p-4'>
                      <p><b>CreateDate: </b>{item.updatedAt}</p>
                      <hr />
                    </div>
                    <div className='hover:bg-gray-200 p-4'>
                      <p><b>UpdateDate: </b>{item.createdAt}</p>
                    </div>
                  </div>
                </div>
              )
            })
          )
            : (
              <div>
                no info
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
