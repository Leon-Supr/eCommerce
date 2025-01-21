import React from 'react'
import '@/styles/form.css'
import logo from '@/assets/icon.png'
import { useForm } from 'react-hook-form'

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);


  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="mb-4"
            src={logo}
            alt=""
            width={72}
            height={57}
          />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"  
              placeholder="name@example.com"
              {...register('loginEmail', { required: true })} //El register debe ir dentro del input, para que sepa cuál se registrará 
            />
            {errors.loginEmail && <span>This field is required</span>}
            <label htmlFor="floatingInput">Email address</label>
          </div>
          
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register('loginPassword', { required: true })}
            />
            {errors.loginPassword && <span>This field is required</span>}
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className='mt-5 mb-3 text-muted'>Tienda E© 2017–2025</p>
        </form>
      </main>

    </>
  )
}

export default Login
