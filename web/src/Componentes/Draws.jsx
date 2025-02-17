import { useState } from "react"
let imgObject = {
    opening_bracket:"web/src/assets/icons/opening_bracket.png",
    closing_bracket:"web/src/assets/icons/closing_bracket.png",
    comma:"web/src/assets/icons/comma.png",
    apple:"web/src/assets/icons/apple.png",
    banana:"web/src/assets/icons/banana.png",
    cherry:"web/src/assets/icons/cherry.png",
    grapes:"web/src/assets/icons/grapes.png",
    lemon:"web/src/assets/icons/lemon.png",
    mondarine:"web/src/assets/icons/mondarine.png",
    pear:"web/src/assets/icons/pear.png",
    pineapple:"web/src/assets/icons/pineapple.png",
    strawberry:"web/src/assets/icons/strawberry.png",
}

export const BuildArray = ({initialArray})=>{
    let [myArray,setMyArray]= useState(initialArray)

return <div>
    <img src={imgObject.opening_bracket}></img>
    {myArray.map((element)=>{
        return <>
        <img src={imgObject[element]}></img>
        <img src={imgObject["comma"]}></img>
        </>
        
    })}
    <img src={imgObject.closing_bracket}></img>
</div>
}