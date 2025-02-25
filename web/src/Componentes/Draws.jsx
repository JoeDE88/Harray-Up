import { useState } from "react"
import openingBracket from "../assets/icons/opening_bracket.png"
import { Box } from "@mui/material"
import { useAppContext } from '../AppContext';



let imgObject = {
    opening_bracket: openingBracket,
    closing_bracket: "src/assets/icons/closing_bracket.png",
    comma: "src/assets/icons/comma.png",
    apple: "src/assets/icons/apple.png",
    banana: "src/assets/icons/banana.png",
    cherry: "src/assets/icons/cherry.png",
    grapes: "src/assets/icons/grapes.png",
    lemon: "src/assets/icons/lemon.png",
    mondarine: "src/assets/icons/mondarine.png",
    pear: "src/assets/icons/pear.png",
    pineapple: "src/assets/icons/pineapple.png",
    strawberry: "src/assets/icons/strawberry.png",
    watermelon: "src/assets/icons/watermelon.png"
}

export const BuildArray = () => {
    const { fruits } = useAppContext(); // Accedemos a la variable global
    const scale=3

    return (
        <Box >
            <Box style={{ display: "flex"}}>
                <img style={{ width: `${8 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject.opening_bracket}></img>
                {fruits.map((element, index) => {

                    //Si hay un array dentro de un array, lo hago recursivo
                    if (Array.isArray(element)) {
                        //compruebo si es el último elemento para ponerle o no la coma del final
                        if (index !== fruits.length - 1) {
                            return <>
                                <BuildArray fruits={element}></BuildArray>
                                <img style={{ width: `${6 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject["comma"]}></img>
                            </>
                        } else {

                            return <BuildArray fruits={element}></BuildArray>
                        }
                        //Si no es un array devuelvo la imagen
                    } else {
                        if (index !== fruits.length - 1) {
                            return <><img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject[element]}></img>
                                <img style={{ width: `${6 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject["comma"]}></img></>
                        }
                        else {
                            return <img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject[element]}></img>
                        }
                    }
                })}
                <img style={{ width: `${8 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject.closing_bracket}></img>
            </Box>
        </Box>
    )
}