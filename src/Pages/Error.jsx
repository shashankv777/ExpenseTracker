import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()  //access the error thrown by the route
  const navigate = useNavigate()
  return (
    <div className='error'>
      <h1>Uh oh! We've got a problem</h1>
      <p>{error.message || error.statusText}</p>
      <div className='flex-md'>
        <button className='btn p-1 pl-3 pr-3 bg-gray-400' onClick={()=>navigate(-1)}>
          <ArrowUturnLeftIcon width={20}/>
          <span>Go back</span>
        </button>
        <Link to='/' className='btn p-2 pl-3 pr-3'>
        <HomeIcon width={20}/>
        <span>Go Home</span>
        </Link>

      </div>
    </div>
  )
}

export default Error
