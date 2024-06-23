import React from 'react'
import { fetchData } from '../helper'
import { Outlet, useLoaderData } from 'react-router-dom'
import wave from '../assets/wave.svg'
import Nav from '../Components/Nav'


export function mainLoader(){
    const userName = fetchData("userName")
    return {userName}
}

function Main() {
    const {userName} = useLoaderData()
  return (
    <div >
      <Nav userName = {userName}/>
        <main>
            <Outlet/>
        </main>

    </div>
  )
}

export default Main
