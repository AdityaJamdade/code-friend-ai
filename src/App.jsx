import './App.css'
import Navbar from './components/Navbar/Navbar'
import Signup from './screens/signup/Signup'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: 'GET',
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Authentication has been failed");
      }).then(resObj => {
        setUser(resObj.user)
      }).catch(err => {
        console.log(err)
      })
    }

    getUser();
  }, [])

  console.log(user);

  return (
    <>
      <div className="app">
        <Navbar user={user} />
        <Signup />
      </div>
    </>
  )
}

export default App
