import Navbar from "../Components/estructura/Navbar"
import OutputArray from "../Components/OutputArray"
import LevelBox from "../Components/LevelBox"
import EditorBox from "../Components/EditorBox"

export default function Homepage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="main">
            <LevelBox/>
            <EditorBox/>
            </div>
            <OutputArray></OutputArray>
        </>
    )
}