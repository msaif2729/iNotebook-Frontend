import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const [s1, setState] = useState({
        click : true,
    });

    const updatestate = (click1)=>{
        setState({
            click:click1
        })
    }

    return(
        <NoteContext.Provider value={{s1,updatestate}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;