import openingBracketImg from "../assets/icons/opening_bracket.png"
import closingBracketImg from "../assets/icons/closing_bracket.png"

export default function Brackets({children}){
    return (
        <div style={{display:'flex'}}>
            <img style={{imageRendering:'pixelated'}} src={openingBracketImg} alt="" />
            {children}
            <img style={{imageRendering:'pixelated'}} src={closingBracketImg} alt="" />
        </div>

    )
}