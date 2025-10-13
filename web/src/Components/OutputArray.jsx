import { BuildArray } from "./BuildArray";
import { useLevelContext } from "../Contexts/LevelContext";

export default function OutputArray() {
    const { fruits } = useLevelContext(); // Accedemos a la variable global
    return (
        <div className="lower-box">
                <p className="text">
                    Your result:
                </p>
            <div className="result">
                <BuildArray scale={4} array={fruits} />
            </div>
        </div>
    )
}