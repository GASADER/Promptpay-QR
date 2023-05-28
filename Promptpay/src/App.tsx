import Promptpay from './components/Qrfrom'
import './App.css'

function App() {
  const mobileNumber = 123456789; 
  const amount = 100;

  return (
    <>
      <Promptpay mobileNumber={mobileNumber} amount={amount} />
      <div> Hello  World</div>
    </>
  )
}

export default App
