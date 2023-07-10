import { dispatch } from '@myorg/event';
import { useCallback, useState } from 'react';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('Login loaded.');

  const onClickHandler = useCallback(() => {
    dispatch('@myorg/login', {
      name: 'John Doe',
      isLoggedIn: true,
    });

    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  return (
    <div>{!isLoggedIn && <button onClick={onClickHandler}>Log in</button>}</div>
  );
}
