import { useState } from "react";
import Jogo from "./Jogo"
import AlfabetoHTML from "./Letras";
import palavras from "./Palavras";
function App(props) {
  const palavra = palavras[Math.floor(Math.random()*palavras.length)]
  const [tentativa,setTentativa] = useState(0)
  const[codigo,setCodigo] = useState(palavra.split(""))//palvra secreta
  const [secret,setSecret] = useState("")//palavar mostrada
  const[letras_usadas,setUsadas]=useState([])
  const [iniciar,setIniciar] = useState(false)
  const variaveis ={tentativa:tentativa,
    codigo:codigo,secret:secret,}
  return (
    <div class='container'>
      <Jogo codigo={codigo} setCodigo={setCodigo} Palavras={palavras} letras_usadas={letras_usadas} secret={secret} setSecret={setSecret} tentativa ={tentativa} setTentativa ={setTentativa} setIniciar={setIniciar} iniciar={iniciar}/>
      <AlfabetoHTML Palavras={palavras} setIniciar={setIniciar} tentativa={tentativa} setTentativa={setTentativa}codigo={codigo} secret={secret} setSecret={setSecret} letras_usadas={letras_usadas} setUsadas={setUsadas}  iniciar={iniciar}/>    
    </div>
  );
}

export default App
