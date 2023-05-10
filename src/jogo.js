import alfabeto from "./Letras"
import palavras from "./Palavras"

export default function Jogo(props){
    const palavra =  Math.floor(Math.random()*palavras.length)

    const forca = [
        "./assets/forca0.png",
        "./assets/forca1.png",
        "./assets/forca2.png",
        "./assets/forca3.png",
        "./assets/forca4.png",
        "./assets/forca5.png",
        "./assets/forca6.png"
    ]
    const forcaHTML = forca.map(function (image){return (<img src={image} class ="image"/>)})
    const enforcado = forcaHTML[props.tentativa]
    return(
        <>
            <div class="">
                {enforcado}
                <button class ='startbutton'>{props.tentativa}</button>
                <button>{props.palavra}</button>

            </div>
        </>
    )
}