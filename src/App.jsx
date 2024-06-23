import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard, { dashboardAction, dashboardLoader } from './Pages/Dashboard'
import Error from './Pages/Error'
import Main, { mainLoader } from './Layouts/Main'
import { logoutAction } from './Actions/logout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expensesAction, expensesLoader } from './Pages/ExpensesPage'
import BudgetPage, { budgetAction, budgetLoader } from './Pages/BudgetPage'




const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    loader: mainLoader,// loads the data from the function dashboardLoader
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Dashboard/>,
        loader:dashboardLoader,
        action:dashboardAction,
        errorElement:<Error/>
      },
      {
        path:'expenses',
        element:<ExpensesPage/>,
        loader:expensesLoader,
        action:expensesAction,
        errorElement:<Error/>
      },
      {
        path:'budget/:id',
        element:<BudgetPage/>,
        loader:budgetLoader,
        action:budgetAction,
        errorElement:<Error/>
      },
      {
        path:'logout',
        action:logoutAction
      }
    ]
  }
])

function App() {
 

  return (
    <>
     <RouterProvider router={router}/>
     <ToastContainer/>
    </>
  )
}

export default App
