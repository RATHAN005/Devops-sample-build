import { useEffect, useState } from "react";
import axios from "axios";

function App(){
  const [message, setMessage] = useState("");

  useEffect(() =>{
    axios
      .get("https://localhost:5000/api/message")
      .then((response)=>{
        setMessage(response.data.message);
      });
  }, []);

  return (
    <div>
      <h1>
        Devops Learning Project
      </h1>
      <p>i will be placed in Devops Role</p>
      <h2> {message} </h2>
    </div>
  );
}
export default App;