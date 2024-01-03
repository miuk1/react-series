import { useState } from 'react'
import InputBox from './InputBox'
import useCurrencyService from '../services/currencyService'

function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('eur');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyData = useCurrencyService(from);
    const options = Object.keys(currencyData);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const convert = () => {
        setConvertedAmount(amount * currencyData[to]);
    }


    return (
        <div className="w-full">
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <h1 className='text-3xl font-bold mb-4 text-center text-teal-100 drop-shadow-md'>Currency Converter</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    convert()
                }}>
                    <div className='w-full mb-1'>
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={setAmount}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            currencyOptions={options}
                            selectedCurrency={from}
                        />
                    </div>
                    <div className='relative w-full h-0.5'>
                        <button
                            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className='w-full mb-1'>
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onAmountChange={setConvertedAmount}
                            onCurrencyChange={(currency) => setTo(currency)}
                            currencyOptions={options}
                            selectedCurrency={to}
                            amountDisabled={true}
                        />
                    </div>
                    <div className='flex justify-between'>
                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                        >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                        <button
                            className='w-full bg-gray-600 text-white px-4 py-3 ml-2 rounded-lg'
                            onClick={() => {
                                setAmount(0);
                                setConvertedAmount(0);
                            }}
                        >Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CurrencyConverter;