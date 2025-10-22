import { useLevelContext } from '../Contexts/LevelContext';
import { levelList } from '../levels';
import { BotonDropDown } from './BotonDropdown';


export default function LevelDropdown({ levels }) {
    const { level, setLevel } = useLevelContext();

    const onLevelSelect = (level) => {
        setLevel(level)
    }
    
    return (
        <div>
            <div className='dropdown' tabIndex={1}>
                <i className='db2' tabIndex={1}></i>
                <BotonDropDown texto={`Level ${level.id}`}></BotonDropDown>
                <div className='dropradius'>

                    <div className="dropdown-content">

                        {levelList.map((level) => (
                            <a
                                key={level.id}
                                onClick={() => { onLevelSelect(level); handleClose(); }}
                            >
                                Level {level.id}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}