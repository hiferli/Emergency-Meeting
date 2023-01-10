import './App.css';
import io from 'socket.io-client'

// Gets URL for backend server
const socket = io.connect("http://localhost:3001")

function App() {
  return (
    <div className="App">
       <input placeholder='Message...' />
       <button>Send Message</button>
    </div>
  );
}

export default App;
