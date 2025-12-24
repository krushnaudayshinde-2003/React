import React from 'react'
import Card from './Components/Card'
import "./index.css";
const App = () => {
  let users =[
    {
      name:"Krushna",
      profile:"https://images.unsplash.com/photo-1761839256840-7780a45b85dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      name:"Aman",
      profile:"https://images.unsplash.com/photo-1602077422495-c8733eb58c34?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Raghu",
      profile:"https://images.unsplash.com/photo-1766469284258-11bf4223e2af?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      name:"Arnav",
      profile:"https://images.unsplash.com/photo-1766425597359-08c8f7585ba4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Rohit",
      profile:"https://images.unsplash.com/photo-1766467090654-9b0eb36c1adb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Sanket",
      profile:"https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }]
  return (
    <div className='parent'>
      {
        users.map((user , id)=>{
          return <Card key={id} name={user.name} profile={user.profile}/>
        })
      }
      
    </div>
  )
}

export default App