import { useState } from 'react';

function ModeToggler(){
    const darkMode = <h1>Dark Mode is On</h1>;
    const lightMode = <h1>Light Mode is On</h1>;
    const [modeState, setModeState] = useState({
        darkModeOn: true,
        text: darkMode
    });

    function handleClick(){
        if(modeState.darkModeOn) {
            setModeState({
                darkModeOn: !modeState.darkModeOn,
                text: darkMode
            });
        }
        else {
            setModeState({
                text: lightMode,
                darkModeOn: !modeState.darkModeOn,
            });
        }
    }
    return (
        <div>
            {modeState.text}
            <button onClick={handleClick}>Change Mode</button>
        </div>
    );
}
export default ModeToggler;