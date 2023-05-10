const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
export default function AlfabetoHTML(){
    return(
        <div class="sopa">
            {alfabeto.map(function(letra)
            {return(<div class="alfaBet_desatived" id={letra}>{letra}</div>)})}
        </div>
    )
}