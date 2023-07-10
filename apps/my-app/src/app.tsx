import './styles/global.css';
import Login from './components/Login';

export default function App() {
  console.log('App loaded.');

  return (
    <div className="app">
      <myorg-user theme="light" brand="example"></myorg-user>

      <Login />
    </div>
  );
}
