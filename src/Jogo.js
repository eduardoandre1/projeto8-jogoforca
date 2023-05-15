
export default function Jogo(props){
    const forca = [
        "./assets/forca0.png",
        "./assets/forca1.png",
        "./assets/forca2.png",
        "./assets/forca3.png",
        "./assets/forca4.png",
        "./assets/forca5.png",
        "./assets/forca6.png"
    ]
    function classe(){
    const vitoria = "secret vitoria"
    const derrota = "secret derrota"
    const neutro = "secret neutro"
    console.log(props.heavenorhell)
    let resultado = neutro
    switch (props.heavenorhell){
        case "": 
            resultado = neutro
            break
        case false: 
            resultado = derrota;
            break;
        case true: 
            resultado = vitoria;
            break;
        default:
            resultado = neutro
            break
        }
        return resultado
    }
    const classe1 = classe()
    function começar(iniciar){
        props.setIniciar(true)
        props.setTentativa(0)
        let senha = props.codigo
        let secret_word = senha.map(function(l){return("_ ")})
        props.setSecret(secret_word)
        console.log(props.codigo)
        props.setHoH('')
        props.setUsadas([])

    }
    return(
        <>
            <div className="jogo">
            <img data-test="game-image" src={forca[props.tentativa]} className ="image" alt={forca[props.tentativa]}/>
                <div className="palavra_and_botão">
                    <button 
                        data-test="choose-word"
                        className ='startbutton'
                        disabled={props.iniciar===true?true:false}
                        onClick={()=>{começar()}}
                        >
                            Escolher Palavra
                    </button>
                    <h2 className="secret">{props.heavenorhell==false?props.codigo:""}</h2>
                    <h2 className="secret">
                        tentativas :{props.iniciar===true?6-props.tentativa:""}
                    </h2>
                    <h1 className={classe1}>
                        {props.secret}
                    </h1>
                </div>
            </div>
        </>
    )
}
