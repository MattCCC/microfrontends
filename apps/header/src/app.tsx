import './styles/global.css';
import { CustomElementAttributes } from '../public/element';
import { user } from './services/user';

// Events passed as props are just an intial configuration
// They can be changed externally & will trigger re-render
export default function App({
  brand = '',
  theme = '',
}: Partial<CustomElementAttributes>) {
  console.log('Header loaded with attr: ', { brand, theme }, user.value);
  console.log('signal', user.value);

  return (
    <div className="header">
      {user.value.isLoggedIn ? (
        <h1 className="bg-red text-blue-300">Welcome {user.value.name}!</h1>
      ) : (
        <h1 className="bg-red text-blue-300">Welcome! Please log in</h1>
      )}
    </div>
  );
}
