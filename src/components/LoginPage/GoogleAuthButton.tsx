import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useGoogleAuth } from '../../hooks/useGoogleAuth';

export default function GoogleAuthButton() {
  const { mutate, isPending } = useGoogleAuth();

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const idToken = credentialResponse.credential;
    if (!idToken) {
      console.error('Google ID Token is missing');
      return;
    }
    mutate(idToken); // ID Token을 백엔드로 전달
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Google login failed');
        }}
      />
      {isPending && <p>Authenticating...</p>}
    </div>
  );
}
