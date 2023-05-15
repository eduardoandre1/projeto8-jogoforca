//laranja
import palavras from "./palavras"
export default function AlfabetoHTML(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const ativo = "alfaBet_atived"
    const desativo ="alfaBet_desatived"
    function desativar(letra){
        let situação = false
        if(props.heavenorhell!==""){
            situação = true
            return situação
        }
        for(let i=0;i< props.letras_usadas.length;i++){
            if(props.letras_usadas[i]===letra){
                situação = true
            }
        }
        return situação
    }
    function heaven_or_hell(){
        if(props.tentativa ===5){
            props.setHoH(false)
            props.setIniciar(false)
            props.setCodigo(palavras[Math.floor(Math.random()*palavras.length)].split(''))
        }
        if(props.codigo.toString() === props.secret.toString()){
            props.setHoH(true)
            props.setIniciar(false)
            props.setCodigo(palavras[Math.floor(Math.random()*palavras.length)].split(''))
        }
    }

    function mandar(letra){
        props.setUsadas([...props.letras_usadas,letra])
        let tem_letra = false
        let segredo = props.secret
        for(let i = 0;i <props.codigo.length;i++){
            if(props.codigo[i]===letra){
                segredo[i] = letra
                props.setSecret(segredo)
                tem_letra = true
            }
        }
        console.log(props.codigo)
        console.log(props.secret)
        if(tem_letra === false){
            props.setTentativa(props.tentativa+1)
        }
        heaven_or_hell()
        console.log(props.tentativa)
        console.log(props.letras_usadas)
    }
    

    return(
        <div className="sopa">
            {alfabeto.map(function(letra)
            {
                return(<button 
                    data-test="letter"
                    className={props.iniciar===true?ativo:desativo} 
                    id={letra}
                    key={letra}  
                    onClick={()=>mandar(letra)}
                    disabled={desativar(letra)===true?true:false}
                        >{letra}
                    </button>)})}
        </div>
    )
}