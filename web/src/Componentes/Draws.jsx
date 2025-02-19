import { useState } from "react"
import openingBracket from "../assets/icons/opening_bracket.png"
import { Box } from "@mui/material"



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
}

export const BuildArray = ({ initialArray, scale = 3 }) => {
    let [myArray, setMyArray] = useState(initialArray)
    return (
        <Box>
                <img style={{ width: `${8 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated",marginTop:'15px' }} src={imgObject.opening_bracket}></img>
                {myArray.map((element, index) => {
                    if (index !== myArray.length - 1) {
                        return <>
                            <img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject[element]}></img>
                            <img style={{ width: `${6 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject["comma"]}></img>
                        </>
                    }
                    else {
                        return <>
                            <img style={{ width: `${23 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject[element]}></img>
                        </>
                    }
                })}
                <img style={{ width: `${8 * scale}px`, height: `${30 * scale}px`, imageRendering: "pixelated" }} src={imgObject.closing_bracket}></img>
        </Box>
    )
}