import logo from '@/assets/icon.png'
import '@/styles/form.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const { status } = await registerUserService(data)
      if (status === 201) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            {...register('first_name', { required: true })} //Para registrar, se usa el name
          />
          {errors.first_name && <span>This field is required</span>}
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            {...register('last_name', { required: true })}
          />
          {errors.last_name && <span>This field is required</span>}
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            {...register('gender', { required: true })}
          >
            <option value='NA'>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
            <option value='Other'>Other</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>Tienda E© 2017–2025</p>
      </form>
    </main>
  )
}

export default Register