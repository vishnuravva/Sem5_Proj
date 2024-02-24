import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const navigateTo = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.username == "" || credentials.password == "") {
      alert('Enter the required details')
      return;
    }
    // console.log(JSON.
    //     stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location }))
    const response = await fetch('http://localhost:5000/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })
    });
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {
      localStorage.setItem('authToken', json.authToken)
      console.log(localStorage.getItem('authToken'))
      navigateTo("/dashboard")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#000" }}>
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">

                <h3 className="mb-5">Admin Login</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="typeEmailX-2">Username</label>
                    <input onChange={onChange} value={credentials.username} name='username' type="username" id="typeEmailX-2" className="form-control form-control-lg" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="typePasswordX-2">Password</label>
                    <input onChange={onChange} value={credentials.password} name='password' type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                  </div>

                  <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login