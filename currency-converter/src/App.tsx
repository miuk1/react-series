import backgroundImage from './assets/elena-mozhvilo-Sq9x7yg9wLY-unsplash.jpg';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <CurrencyConverter />
    </div>
  );
}

export default App;
