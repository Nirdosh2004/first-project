import { useState } from "react";
import  FirstComponent  from "./components/FirstComponent";


const App = () => {

const btnClick = () => {
console.log("clicked");
setx(x+1);
console.log(x);
}
 
const [x,setx] = useState(0);

  return (
    <div>
      <button onClick={()=>{btnClick()}}>CLick me</button>
     <FirstComponent data={x} fn={setx}/>
    </div>
  )
}

export default App;