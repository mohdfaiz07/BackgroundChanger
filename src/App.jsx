
import React , {useState} from  'react'
import './App.css'

const App = () => {
    const [color, setcolor] = useState("lightGrey")

  return (
    <>

    <div className='main'>
        <div className='left'>
            <h1>Background changer</h1>
          <div className='buttonDiv'>

            <button style={{backgroundColor:"lightGreen"}} onClick={()=>setcolor("lightGreen")}>Light Green</button>
            <button style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>yellow</button>
            <button style={{backgroundColor:"lavender"}} onClick={()=>setcolor("lavender")}>lavender</button>
            <button style={{backgroundColor:"Violet"}} onClick={()=>setcolor("Violet")}>violet</button>
            <button style={{backgroundColor:"salmon"}} onClick={()=>setcolor("salmon")}>salmon</button>
            <button style={{backgroundColor:"chocolate"}} onClick={()=>setcolor("chocolate")}>Chocolate</button>
            <button style={{backgroundColor:"SeaGreen"}} onClick={()=>setcolor("SeaGreen")}>cyan</button>
            <button style={{backgroundColor:"coral"}}onClick={()=>setcolor("coral")}>coral</button>

            </div>

        </div>
        <div className='right' style={{backgroundColor : color}}>

        </div>
    </div>
    
    </>
    )
}

export default App