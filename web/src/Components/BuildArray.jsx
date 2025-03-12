
import openingBracketImg from "../assets/icons/opening_bracket.png"
import closingBraketImg from "../assets/icons/closing_bracket.png"
import appleImg from "../assets/icons/apple.png"
import commaImg from  "../assets/icons/comma.png"
import bananaImg from "../assets/icons/banana.png"
import cherryImg from "../assets/icons/cherry.png"
import grapesImg from "../assets/icons/grapes.png"
import lemonImg from "../assets/icons/lemon.png"
import mondarineImg from "../assets/icons/mondarine.png"
import pearImg from "../assets/icons/pear.png"
import pineappleImg from "../assets/icons/pineapple.png"
import strawberryImg from "../assets/icons/strawberry.png"
import watermelonImg from "../assets/icons/watermelon.png"

import { Box } from "@mui/material"

let imgObject = {
    openingBracket: openingBracketImg,
    closingBracket: closingBraketImg,
    comma: commaImg,
    apple: appleImg,
    banana: bananaImg,
    cherry: cherryImg,
    grapes: grapesImg,
    lemon: lemonImg,
    tangerine: mondarineImg,
    pear: pearImg,
    pineapple: pineappleImg,
    strawberry: strawberryImg,
    watermelon: watermelonImg
}

export const BuildArray = ({array,scale=3}) => {

    return (
        <Box >
            <Box style={{ display: "flex"}}>
                <img style={{ width: `${8 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject.openingBracket}></img>
                {array.map((element, index) => {

                    //Si hay un array dentro de un array, lo hago recursivo
                    if (Array.isArray(element)) {
                        //compruebo si es el último elemento para ponerle o no la coma del final
                        if (index !== array.length - 1) {
                            return <>
                                <BuildArray array={element}></BuildArray>
                                <img style={{ width: `${6 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject["comma"]}></img>
                            </>
                        } else {

                            return <BuildArray array={element}></BuildArray>
                        }
                        //Si no es un array devuelvo la imagen
                    } else {
                        if (index !== array.length - 1) {
                            return <><img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject[element]}></img>
                                <img style={{ width: `${6 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject["comma"]}></img></>
                        }
                        else {
                            return <img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject[element]}></img>
                        }
                    }
                })}
                <img style={{ width: `${8 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject.closingBracket}></img>
            </Box>
        </Box>
    )
}