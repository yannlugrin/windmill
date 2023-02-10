import { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const App = () => {
  const [user, setUser] = useState<string | null>();

  const logOut = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <div className="App pt-4">
      <h1 className="mb-4 text-center text-3xl font-bold underline">
        Windmill
      </h1>

      {!user ? (
        <GoogleLogin
          onSuccess={credentialResponse => {
            setUser(credentialResponse.credential);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      ) : (
        <button type="submit" className="mb-4" onClick={logOut}>
          Log out
        </button>
      )}
    </div>
  );
};

export default App;
