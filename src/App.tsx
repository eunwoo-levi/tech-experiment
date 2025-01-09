import { useUserInfo } from './hooks/useUser';

function App() {
  const { data: user, isLoading, error } = useUserInfo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>User Detail</h1>
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
    </div>
  );
}

export default App;
