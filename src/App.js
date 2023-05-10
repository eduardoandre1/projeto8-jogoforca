import { useState } from "react";
import Jogo from "./Jogo"
import AlfabetoHTML from "./Letras";
import palavra from "./Palavras"
//let [tentativa,setTentativa] = useState(0)
const tentativa = 0
function App() {
  return (
    <div class='container'>
      <Jogo palavra={palavra} tentativa ={tentativa}/>
      <AlfabetoHTML />
      <h1></h1>
    </div>
  );
}

export default App
