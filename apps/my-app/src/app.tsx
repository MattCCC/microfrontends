import './styles/global.css';
import Login from './components/Login';

export default function App() {
  console.log('App loaded.');

  return (
    <div className="app">
      <myorg-header></myorg-header>

      <Login />
    </div>
  );
}
