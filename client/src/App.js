import './App.css';
import io from 'socket.io-client'
import { useEffect , useState } from 'react';

// Gets URL for backend server
const socket = io.connect("http://localhost:3001")

function App() {
  const [message, setMessage] = useState("")
  const [recievedMessage, setRecievedMessage] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if(room !== ""){
      socket.emit("join_room" , room);
    }
  }

  const sendMessage = () => {
    socket.emit("sendMessage" , {
      message: message,
      room : room,
    })
  }

  useEffect(() => {
    socket.on("recieveMessage" , (data) => {
      // alert(data.message)
      setRecievedMessage(data.message);
    });
  } , [socket])
  

  return (
    <div className="App">``
       <input placeholder='Room Number' onChange={(event) => setRoom(event.target.value)} />
       <button onClick={joinRoom}>Join Room</button>

       <br />

       <input placeholder='Message...' onChange={(event) => setMessage(event.target.value)} />
       <button onClick={sendMessage}>Send Message</button>

       <h1>Message: </h1>
       <h4>{recievedMessage}</h4>
    </div>
  );
}

export default App;
