import './styles/global.css';
import { CustomElementAttributes } from '../public/element';
import { isUserLoggedIn } from './signals/isLoggedIn';

// Events passed as props are just an intial configuration
// They can be changed externally & will trigger re-render
export default function App({
  name = '',
  isloggedin = false,
}: Partial<CustomElementAttributes>) {
  console.log('Header loaded with attr: ', { name, isloggedin });
  console.log('signal', isUserLoggedIn.value);

  return (
    <div className="header">
      {isloggedin ? (
        <h1 className="bg-red text-blue-300">Welcome {name}!</h1>
      ) : (
        <h1 className="bg-red text-blue-300">Welcome! Please log in</h1>
      )}
    </div>
  );
}
