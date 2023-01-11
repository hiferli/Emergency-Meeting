import './App.css';
import io from 'socket.io-client'
import { useEffect , useState } from 'react';

// Gets URL for backend server
const socket = io.connect("http://localhost:3001")

function App() {
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    socket.emit("sendMessage" , {
      message: message
    })
  }

  useEffect(() => {
    socket.on("recieveMessage" , (data) => {
      alert(data.message)
    });
  } , [socket])
  

  return (
    <div className="App">
       <input placeholder='Message...' onChange={(event) => setMessage(event.target.value)} />
       <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
