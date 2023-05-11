import { useState } from "react";
import Jogo from "./Jogo"
import AlfabetoHTML from "./Letras";
import palavra from "./Palavras"
//let [tentativa,setTentativa] = useState(0)
//let tentativa = prompt("QUANTAS TENTATISCAS")
function App() {
  //let  [tentativa,setTentativa] =useState(0)
  //setTentativa(0)
  const tentativa = 1
  return (
    <div class='container'>
      <Jogo palavra={palavra} tentativa ={tentativa}/>
      <AlfabetoHTML />
      <h1></h1>
    </div>
  );
}

export default App
