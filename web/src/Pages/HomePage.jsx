import Navbar from "../Components/estructura/Navbar"
import OutputArray from "../Components/OutputArray"
import LevelBox from "../Components/LevelBox"
import CodeEditor from "../Components/CodeEditor"

export default function Homepage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="main">
            <LevelBox/>
            <CodeEditor/>
            </div>
            <OutputArray></OutputArray>
        </>
    )
}