import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [isCharacterAllowed, setCharacterAllowed] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (isNumberAllowed) {
      str += '0123456789';
    }

    if (isCharacterAllowed) {
      str += '!@#$%^&*()_+';
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharacterAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1500);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 text-orange-500 shadow-md rounded-lg px-4 my-8 p-5">
      <h1 className="text-center my-3">Password Generator</h1>
      <div className="relative flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />
        <button
          className="bg-blue-700 text-white px-3 py-1 rounded-lg outline-none absolute right-0 top-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>

      </div>
      <div className="flex items-center gap-x-2">
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label htmlFor="length">Length: {length}</label>
        <input
          type="checkbox"
          defaultChecked={isNumberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="isNumberAllowed">Numbers</label>
        <input
          type="checkbox"
          defaultChecked={isCharacterAllowed}
          onChange={() => setCharacterAllowed((prev) => !prev)}
        />
        <label htmlFor="isCharacterAllowed">Characters</label>
      </div>
      <div className="flex justify-center mt-4 pd-4">
        <button
          className="bg-blue-700 text-white px-3 py-1 rounded-lg outline-none"
          onClick={generatePassword}
        >
          Generate
        </button>

      </div>
      {isTooltipVisible && (
        <div className="ml-2 mt-1 text-black bg-white px-2 py-1 rounded-md">
          Password copied
        </div>
      )}
    </div>
  );
}

export default App;
