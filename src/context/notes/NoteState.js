import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{


    const host = "http://localhost:5000";

    const [s1, setState] = useState({
        click : true,
    });

    const [alert,setAlert] = useState({
        alerttype:null,
        time:new Date().getTime()
    })

    const [modal,setModal] = useState({hidden:true,id:"",data:{}})
    
    const [emodal,setEModal] = useState({hidden:true,data:{}})

    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes);

    const getNote = async ()=>{

        const response = await fetch(`${host}/api/notes/getall`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTE3NWUzNjNjNjEyNzU4NmRjOWY2In0sImlhdCI6MTcyMzM3NzA4MX0.RB1ZR7lgN8Nwp-xmQ0LJhgqfePIEzb-HeeByurtdbo0"
            }
        });
        const json = await response.json() 
        // console.log(json)
        setNotes(json)

    }

    const getOneNote = async (id,wmodal)=>{

        const response = await fetch(`${host}/api/notes/getone/${id}`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTE3NWUzNjNjNjEyNzU4NmRjOWY2In0sImlhdCI6MTcyMzM3NzA4MX0.RB1ZR7lgN8Nwp-xmQ0LJhgqfePIEzb-HeeByurtdbo0"
            }
        });
        const json = await response.json() 
        if(wmodal=="edit")
        {
            setEModal({ hidden: false, data: json });
        }   
        else{
            setModal({ hidden: false, id: id, data: json });
        }
        // console.log(json)

    }

    const addNote= async (title,desc,tag)=>{

        const response = await fetch(`${host}/api/notes/createnote`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTE3NWUzNjNjNjEyNzU4NmRjOWY2In0sImlhdCI6MTcyMzM3NzA4MX0.RB1ZR7lgN8Nwp-xmQ0LJhgqfePIEzb-HeeByurtdbo0"
            },
            body:JSON.stringify({title,desc,tag})
        });
        const json = await response.json()
        console.log(json)

      
        setNotes([...notes, json]);
    }

    const editNote= async (id,title,desc,tag)=>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTE3NWUzNjNjNjEyNzU4NmRjOWY2In0sImlhdCI6MTcyMzM3NzA4MX0.RB1ZR7lgN8Nwp-xmQ0LJhgqfePIEzb-HeeByurtdbo0"
            },
            body:JSON.stringify({title,desc,tag})
        });
        const json = await response.json()
        console.log(json)

        getNote()

        // setNotes([...notes, json]);
    }

    const deleteNote = async (id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method:'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTE3NWUzNjNjNjEyNzU4NmRjOWY2In0sImlhdCI6MTcyMzM3NzA4MX0.RB1ZR7lgN8Nwp-xmQ0LJhgqfePIEzb-HeeByurtdbo0"
            }
        });
        const json = await response.json() 
        console.log(json)
        setNotes(json)
    }



    const updatestate = (click1)=>{
        setState({
            click:click1
        })
    }


    const hideModal = (hide,id1,data1)=>{
        setModal({
            hidden:hide,
            id:id1,
            data:data1
        })
    }

    const hideEModal = (hide,data1)=>{
        setEModal({
            hidden:hide,
            data:data1
        })
    }

    const updateAlert=(alert)=>{
        setAlert({
            alerttype:alert,
            time:new Date().getTime()
        })
    }

    return(
        <NoteContext.Provider value={{s1,updatestate,notes,addNote,deleteNote,getNote,editNote,modal,hideModal,getOneNote,hideEModal,emodal,updateAlert,alert}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;