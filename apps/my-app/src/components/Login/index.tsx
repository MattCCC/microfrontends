import { dispatch } from '@myorg/event';
import { useCallback, useState } from 'react';
// import { isUserLoggedIn2 } from '../../stores/user';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('Login loaded.');

  const onClickHandler = useCallback(() => {
    dispatch('@myorg/login', {
      name: 'John Doe',
      age: 50,
      isLoggedIn: true,
    });

    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  return (
    <div>{!isLoggedIn && <button onClick={onClickHandler}>Log in</button>}</div>
  );
}
