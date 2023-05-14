import palavra from "./palavras"
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
    const forcaHTML = forca.map(function (image){return (<img data-test="game-image" src={image} className ="image"/>)})
    const enforcado = forcaHTML[props.tentativa]
    const palavra = props.Palavras[Math.floor(Math.random()*props.Palavras.length)]

    function começar(iniciar){
        props.setIniciar(true)
        let senha = props.codigo
        let secret_word = senha.map(function(l){return("_ ")})
        props.setSecret(secret_word)
        console.log(props.codigo)

    }
    return(
        <>
            <div className="jogo">
                {enforcado}
                <div className="palavra_and_botão">
                    <button 
                        className ='startbutton'
                        disabled={props.iniciar===true?true:false}
                        onClick={()=>{começar()}}
                        data-test="choose-word">
                            Escolher Palavra
                     </button>
                    <h1 className="secret">
                        {props.secret}
                    </h1>
                </div>
            </div>
        </>
    )
}
