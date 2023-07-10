import './styles/global.css';
import Login from './components/Login';

export default function App() {
  console.log('App loaded.');

  return (
    <div className="app">
      <myorg-header theme="light" brand="example"></myorg-header>

      <Login />
    </div>
  );
}
