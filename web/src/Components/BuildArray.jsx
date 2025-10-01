import apple from "../assets/icons/apple.png"
import comma from "../assets/icons/comma.png"
import banana from "../assets/icons/banana.png"
import cherry from "../assets/icons/cherry.png"
import grapes from "../assets/icons/grapes.png"
import lemon from "../assets/icons/lemon.png"
import mondarine from "../assets/icons/mondarine.png"
import pear from "../assets/icons/pear.png"
import pineapple from "../assets/icons/pineapple.png"
import strawberry from "../assets/icons/strawberry.png"
import watermelon from "../assets/icons/watermelon.png"
import Brackets from "./Brackets"

let images = {
    apple: apple,
    banana: banana,
    cherry: cherry,
    grapes: grapes,
    lemon: lemon,
    tangerine: mondarine,
    pear: pear,
    pineapple: pineapple,
    strawberry: strawberry,
    watermelon: watermelon
}

export const BuildArray = ({ array, scale = 3 }) => {

    return (
        <div >
            <div style={{ display: "flex" }}>
                <Brackets >
                {array.map((element, index) => {
                    //Si hay un array dentro de un array, lo hago recursivo
                    if (Array.isArray(element)) {
                        //compruebo si es el último elemento para ponerle o no la coma del final
                        if (index !== array.length - 1) {
                            return <>
                                <BuildArray array={element}></BuildArray>
                                <img style={{ width: `${8 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={comma}></img>
                            </>
                        } else {
                            
                            return <BuildArray array={element}></BuildArray>
                        }
                        //Si no es un array devuelvo la imagen
                    } else {
                        if (index !== array.length - 1) {
                            return <><img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={images[element]}></img>
                                <img style={{ width: `${6 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={comma}></img></>
                        }
                        else {
                            return <>
                            <img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={images[element]}></img>
                            </>
                        }
                    }
                })}
                </Brackets>
            </div>
        </div>
    )
}