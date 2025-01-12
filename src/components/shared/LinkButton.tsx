import { useNavigate } from 'react-router-dom';

interface LinkButtonProps {
  title: string;
  url: string;
}

export default function LinkButton({ title, url }: LinkButtonProps) {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(`/${url}`);
  };

  return (
    <button onClick={handleLink} className='font-bold text-indigo-500 hover:underline hover:text-indigo-600'>
      {title}
    </button>
  );
}
