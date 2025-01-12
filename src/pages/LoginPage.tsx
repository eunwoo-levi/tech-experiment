import LinkButton from '../components/shared/LinkButton';
import LoginForm from '../components/LoginPage/LoginForm';

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white p-8 shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
        <LoginForm />
        <div className='flex gap-4 justify-end mt-4'>
          <p>You don't have an account?</p>
          <LinkButton title='Register' url='register' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
