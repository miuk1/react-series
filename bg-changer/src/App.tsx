import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('Red')

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className='pt-10 text-3xl text-center font-bold text-white capitalize'>A background changer app with React and Tailwind</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white rounded-full shadow p-2 mx-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-2 rounded-3xl" onClick={() => setColor('Red')}>Red</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={() => setColor('Blue')}>Blue</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={() => setColor('Green')}>Green</button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={() => setColor('Yellow')}>Yellow</button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={() => setColor('Purple')}>Purple</button>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={() => setColor('Pink')}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
