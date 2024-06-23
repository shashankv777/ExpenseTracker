import React from 'react'
import { createBudget, createExpense, deleteItem, fetchData } from '../helper'
import { Link, useLoaderData } from 'react-router-dom';
import Intro from '../Components/Intro';
import AddBudgetForm from '../Components/AddBudgetForm';
import AddExpenseForm from '../Components/AddExpenseForm';
import BudgetItem from '../Components/BudgetItem';
import { toast } from 'react-toastify';
import Table from '../Components/Table';

export function dashboardLoader(){
    const userName=fetchData("userName");
    const budgets =fetchData("budgets");
    const expenses = fetchData("expenses")
    return {userName,budgets,expenses}
}
export async function dashboardAction({request}){
  const data =await request.formData()
  const {_action,...values} = Object.fromEntries(data) //converts form data into javascript object
  if(_action === 'newUser'){
    try{
     localStorage.setItem("userName",JSON.stringify(values.userName))
     return toast.success(`Welcome ${values.userName}`)
  }
  catch(e){
    throw new Error("There was a problem creating your account.");
  }
  }

  if(_action=== 'createBudget'){
    try{
      createBudget({
        name:values.newBudget,
        amount:values.newBudgetAmount
      })

      return toast.success("Budget created!")
    }
    catch(e){
      throw new Error("There was a problem creating your budget")
    }
  }

  if(_action=== 'createExpense'){
    try{
      createExpense({
      name:values.newExpense,
      amount:values.newExpenseAmount,
      budgetId:values.newExpenseBudget
    })
    return toast.success(`Expense ${values.newExpense} created!`)
  }
    catch(e){
    throw new Error("There was a problem creating your budget")
    }
  }

  if(_action=== 'deleteExpense'){
    try{
      deleteItem({
      key:"expenses",
      id: values.expenseId
    })
    return toast.success('Expense deleted!')
  }
    catch(e){
    throw new Error("There was a problem creating your budget")
    }
  }


} 








function Dashboard() {
    const { userName,budgets,expenses} = useLoaderData()

  return (
    <>
    {userName ? (
      <div className="dashboard">
        <h1>Welcome back, <span className='accent'>{userName}</span></h1>
        <div className="grid-sm">
          {
            budgets && budgets.length > 0 
            ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm/>
                  <AddExpenseForm budgets ={budgets}/>
                </div>
                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {
                    budgets.map((budget)=>(
                      <BudgetItem key={budget.id} budget={budget} />

                    ))
                  }
                </div>
                {
                  expenses && expenses.length> 0 && (
                    <div className="grid-md">
                      <h2>Recent Expenses</h2>
                      <Table expenses={expenses.sort((a,b)=>b.createdAt-a.createdAt)
                        .slice(0,8)
                       }/>
                    {expenses.length>8 && (
                      <Link to="expenses"
                      className='createbutton type1 m mb-1 ml-1 mr-1 createbtn-txt text-lg '>
                        <div className='text-sm text-justify mt-3 ml-1'>View all expenses</div>
                        
                      </Link>

                    )

                    }
                    </div>
                  )
                }
              </div>
            )
            :(
              <div className="grid-sm">
                <p className='font-bold'>Personal budgeting is the secret to financial freedom.</p>
                <p className='font-bold'>Create a Budget to get started!</p>
                <AddBudgetForm/>
              </div>
              
            )
          
          }

        </div>
      </div>

      
      ) : <Intro/> }
    </>
  )
}

export default Dashboard
