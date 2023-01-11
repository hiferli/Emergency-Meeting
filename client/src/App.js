import './App.css';
import io from 'socket.io-client'
import { useEffect } from 'react';

// Gets URL for backend server
const socket = io.connect("http://localhost:3001")

function App() {
  const sendMessage = () => {
    socket.emit("sendMessage" , {
      message: "Hello!"
    })
  }

  useEffect(() => {
    socket.on("recieveMessage" , (data) => {
      alert(data.message)
    });
  } , [socket])
  

  return (
    <div className="App">
       <input placeholder='Message...' />
       <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
