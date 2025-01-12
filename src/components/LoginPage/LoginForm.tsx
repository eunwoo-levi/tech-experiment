import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const { mutate: login, isError, error, isPending } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(form, {
      onSuccess: () => {
        navigate('/'); // 로그인 성공 시 메인 페이지로 리디렉션
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
          Email
        </label>
        <input
          id='email'
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='Enter your email'
          required
          className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div>
        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input
          id='password'
          type='password'
          name='password'
          value={form.password}
          onChange={handleChange}
          placeholder='Enter your password'
          required
          className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <button
        type='submit'
        disabled={isPending}
        className={`w-full py-2 px-4 text-white font-semibold rounded-md ${
          isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        {isPending ? 'Logging in...' : 'Login'}
      </button>
      {isError && (
        <div className='mt-2 text-red-500 text-sm text-center'>Error: {error?.message || 'Login failed'}</div>
      )}
    </form>
  );
}
