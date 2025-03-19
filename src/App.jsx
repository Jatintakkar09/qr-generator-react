import { useState } from 'react'
import QRCode from "react-qr-code";

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('')
  
 
  return (
    <>
     <div className='h-screen w-screen flex justify-center items-center'>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <input 
           value={input}
           onChange={(e) => setInput(e.target.value)}
          type="text" 
          placeholder="Enter text" 
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <button
          onClick={() => setQrCode(input)}
          className="bg-blue-500 text-white p-2 hover:bg-blue-700 rounded w-full"
        >
          Generate QR Code
        </button>
         <div className="flex items-center justify-center p-5">
        {qrCode!=='' && <QRCode value={qrCode} />}

         </div>


      </div>
     </div>
    
    </>
  )
}

export default App
