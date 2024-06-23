import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'

function AddExpenseForm({budgets}) {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state ==='submitting'
    const formRef = useRef()
    const focusRef = useRef()

    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    })
  return (
    <div className='form-wrapper'>
        <h2 className="h3">Add New {" "} <span className='accent'>
               { budgets.length===1 && `${budgets.map((budg)=>budg.name)}`}
            </span> {" "}
            Expense            
        </h2>
        <fetcher.Form
        method='post'
        className='grid-sm'
        ref={formRef}
        >
            <div className="expense-inputs">
                <div className="grid-xs">
                    <label htmlFor="newExpense">Expense Name</label>
                    <input
                    type='text'
                    name='newExpense'
                    id='newExpense'
                    placeholder='e.g., Coffee'
                    ref = {focusRef}
                    required
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newExpenseAmount">Amount</label>
                    <input
                    type='number'
                    name='newExpenseAmount'
                    id='newExpenseAmount'
                    placeholder='e.g., ₹25'
                    required
                    />
                </div>
            </div>
            <div className="grid-xs" hidden={budgets.length=== 1}>
                <label htmlFor="newExpenseBudget">Budget Category</label>
                <select name='newExpenseBudget' id='newExpenseBudget' required>
                    {
                        budgets.sort((a,b)=>a.createdAt - b.createdAt).map((budget)=>{
                            return(
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            )
                        })
                    }

                </select>
            </div>

            <input type='hidden' name='_action' value='createExpense'/>
            <button className="createbutton type1 m">
                <div className='mb-1 ml-1 mr-1 '>
                    <span className="createbtn-txt text-lg text-center ">Add Expense</span>
                </div>
            </button>

        </fetcher.Form>
      
    </div>
  )
}

export default AddExpenseForm
