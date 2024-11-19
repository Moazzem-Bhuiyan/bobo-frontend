
import LoginForm from './component/LoginForm'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/authbg.png)' }}>
      <LoginForm></LoginForm>
    </div>
  )
}

export default page

