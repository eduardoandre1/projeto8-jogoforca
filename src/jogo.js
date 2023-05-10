import "./Letras"
import "./palavras"

export default function Jogo(){
    const forca = [
        <img src="./assets/forca0.png" class ="image"/>,
        <img src="./assets/forca1.png"/>,
        <img src="./assets/forca2.png"/>,
        <img src="./assets/forca3.png"/>,
        <img src="./assets/forca4.png"/>,
        <img src="./assets/forca5.png"/>,
        <img src="./assets/forca6.png"/>
    ]
    const [forca0,forca1,forca2,forca3,forca4,forca5,forca6] = forca;
    return(
        <>
            {forca[0]}
        </>
    )
}