import React, { useEffect, useRef } from 'react'
import { Form, useFetcher } from 'react-router-dom'


function AddBudgetForm() {
    const fetcher=useFetcher()
    const isSubmitting = fetcher.state==='submitting'
    const formRef = useRef();
    const focusRef = useRef();
    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    },[isSubmitting])

  return (
    <div className="form-wrapper">
        <h2 className="h3">
            Create Budget
        </h2>
        <fetcher.Form
        method='post'
        className='grid-sm'
        ref={formRef}
        >
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input
                type='text'
                name='newBudget'
                id='newBudget'
                placeholder='e.g., Groceries'
                required
                ref={focusRef}
                />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgetAmount">Amount</label>
                <input
                type='number'
                name='newBudgetAmount'
                id='newBudgetAmount'
                placeholder='e.g.,₹300'
                required
                />
            </div>
            <input type='hidden' name='_action' value='createBudget'/>
            <button className="createbutton type1 m">
                <div className='mb-1 ml-1 mr-1 '>
                    <span className="createbtn-txt text-lg text-center ">Create Budget</span>
                </div>
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm
