import React from 'react'
import '@/styles/form.css'
import logo from '@/assets/icon.png'
import { useForm } from 'react-hook-form'
import { loginUserService } from '@/service/userService'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (formData) => {
    try {
      const { status, data } = await loginUserService(formData)
      if (status === 200) { // 200 porque es exitosa la respuesta, 201 es creado
        window.localStorage.setItem('tokenson', data.token) // Guarda el token en localStorage, aún si se cierra el navegador, permanece
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error);
    }
  }


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
              {...register('email', { required: true })} //El register debe ir dentro del input, para que sepa cuál se registrará 
            />
            {errors.email && <span>This field is required</span>}
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password && <span>This field is required</span>}
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
