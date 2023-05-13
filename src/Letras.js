export default function AlfabetoHTML(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const ativo = "alfaBet_atived"
    const desativo ="alfaBet_desatived"
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
        if(tem_letra = false){
            props.setTentativa(props.tentativa+1)
        }
        console.log(props.tentativa)
    }

    return(
        <div class="sopa">
            {alfabeto.map(function(letra)
            {
                return(<button class={props.iniciar===true?ativo:desativo} id={letra} disabled={props.iniciar===true?false:true} onClick={()=>mandar(letra)}>{letra}</button>)})}
        </div>
    )
}