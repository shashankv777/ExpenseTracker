import React from 'react'
import logomark from '../assets/logomark.svg'
import { NavLink,Form } from 'react-router-dom'
import { TrashIcon} from '@heroicons/react/24/solid'



const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink to='/'>
            <img src={logomark} height={30}/>
            <h1 className='text-lg text-gray-500'>Expense Tracker</h1>
        </NavLink>
        {
            userName && (
                <Form
                 method="post"
                 action="/logout"
                 onSubmit={(event)=>{
                    if(!confirm("Delete user and all data?")){
                        event.preventDefault()
                    }
                 }}
                >
                    <button type='submit' className="delete text-lg"> Delete User
                    </button>
                </Form>
            )
        }


    </nav>
  )
}

export default Nav
