import { useLevelContext } from "../Contexts/LevelContext";
import LevelDropdown from "./LevelDropDown";
import { BuildArray } from './BuildArray';

export default function LevelBox() {
    const { level } = useLevelContext();

    return (
            <div className="left-box">
                <div className="level">
                    <LevelDropdown levels={level}></LevelDropdown>
                </div>
                <div className="level level2">
                        <p >{level.introduction}</p>
                        <p>{level.example}</p>
                        <p>{level.instructions}</p>
                </div>
                <div className="level level2" id="right">
                        <p>Expected result</p>
                        <BuildArray scale={3} array={JSON.parse(level.goalArray)} />
                    </div>
                </div>
    )
}