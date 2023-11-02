
// Through Functional Component or Class Component
import './App.css';
import DateAndTime from './DateAndTime'

function App() {

  const CurrentDateAndTime = new Date().toLocaleString()
 const fname="Anas"
  return (
    <div className="App">
     <DateAndTime fname={fname} lname={lname} />
    </div>
  );
}

export default App;


