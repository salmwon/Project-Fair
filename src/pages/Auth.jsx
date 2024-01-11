import React from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/Images/login.png'
import { Button, Form } from 'react-bootstrap'

function Auth({ insideRegister }) {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
      <div className="container w-75">
        <Link to={'/'}> <i className='fa-solid fa-arrow-left me-1'></i>Back to Home</Link>
        <div className='card shadow p-5' style={{ backgroundColor: 'greenyellow' }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={login} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className='fw-bolder text-danger-emphasis mt-2'><i className='fa-solid fa-paperclip me-4' style={{ height: '41px' }}></i>Project Fair</h1>
                <h5 className='fw-bolder mt-2 pb-3 text-dark'>
                  {insideRegister ? 'Sign up to your account' : 'Sign in to your account'}
                </h5>
                <Form className='w-100'>
                  {insideRegister && (
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  {
                    insideRegister ?
                      <div>
                        <button className='btn btn-light mb-2'>Register</button>
                        <p>Already have an account? Click here to <Link to={'/login'}>Login</Link></p>
                      </div> :
                      <div>
                        <button className='btn btn-light mb-2'>Login</button>
                        <p>New User? Click Here to <Link to={'/register'}>Register</Link></p>
                      </div>
                  }

                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth