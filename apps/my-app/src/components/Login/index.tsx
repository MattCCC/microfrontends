import { dispatch } from '@myorg/event';
import { useCallback, useState } from 'react';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('Login loaded.');

  const onClickHandler = useCallback(() => {
    const loggedInUserData = {
      name: 'John Doe',
      age: 50,
      isLoggedIn: true,
    };

    dispatch('@myorg/login', loggedInUserData);

    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  return (
    <div>{!isLoggedIn && <button onClick={onClickHandler}>Log in</button>}</div>
  );
}
