import { UserPlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Form } from 'react-router-dom'
import illustration from '../assets/illustration.jpg'

function Intro() {
  return (
    <div className='intro'>
        <div>
            <h1>
                Take Control of <span className='accent'>Your Money</span>
            </h1>
            <p>
                Personal budgeting is the secret to financial freedom.
                Start your journey today.
            </p>
            <Form method='post'>
            <input
            type='text' name='userName' required
            placeholder='What is your name?'
            autoComplete='given-name'
            />
            <input type='hidden' name='_action' value='newUser'/>
            <button className='fancy'>
              <span class="top-key"></span>
              <span class="text">Create Account</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </button>
            </Form>
        </div>
      <img src={illustration} width={600} />
    </div>
  )
}

export default Intro
