import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import './App.css'

function App() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(null);
  

  return (
    <>
      <div className="vfx">
        <h1>Calculator App by Kshitij</h1>
        <TextField
        required
        id="filled-required"
        label="input 1"
        variant="filled"
        onChange={(e) => setInput1(e.target.value)} 
        />
        <br></br><br></br>
        <TextField
        required
        id="filled-required"
        label="input 2"
        variant="filled" 
        onChange={(e) => setInput2(e.target.value)} 
        />
        <br></br><br></br>
        <Button onClick={() => {setResult(Number(input1) + Number(input2));}}>add</Button>
        <Button onClick={() => {setResult(Number(input1) - Number(input2));}}>sub</Button>
        <Button onClick={() => {setResult(Number(input1) * Number(input2));}}>mul</Button>
        <Button onClick={() => {setResult(Number(input1) / Number(input2));}}>div</Button>
        <br></br><br></br>
        Result: {result}
      </div>
      <div></div>
    </>
  )
}

export default App
