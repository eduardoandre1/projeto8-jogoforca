import { useState } from "react";
import Jogo from "./Jogo"
import AlfabetoHTML from "./Letras";
import palavra from "./Palavras"
function App() {
  const [tentativa,setTentativa] = useState(0)
  const [secret,setSecret] = useState('')
  const[letras_usadas,setUsadas]=useState([])
  const [iniciar,setIniciar] = useState(false)
  const [palavra,setPalavra] = useState('')
  return (
    <div class='container'>
      <Jogo secret={secret} setSecret={setSecret} tentativa ={tentativa} setTentativa ={setTentativa} setIniciar={setIniciar} iniciar={iniciar}/>
      <AlfabetoHTML letras_usadas={letras_usadas} setUsadas={setUsadas}/>    
    </div>
  );
}

export default App
