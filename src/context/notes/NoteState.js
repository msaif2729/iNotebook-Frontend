import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{


    const host = "https://inotebook-backend-cyan.vercel.app";

    const [s1, setState] = useState({
        click : true,
    });

    const [alert,setAlert] = useState({
        alerttype:null,
        time:new Date().getTime(),
        color:"",
        transform:""
    })

    const [modal,setModal] = useState({hidden:true,id:"",data:{}})
    
    const [emodal,setEModal] = useState({hidden:true,data:{}})

    const [amodal,setAModal] = useState({hidden:true})

    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes);

    const [udata,setUData] = useState({success:false,authtoken:""})

    const [account,setAccount] = useState({name:"",email:""})


    const getNote = async ()=>{

        console.log(udata.success)
            const response = await fetch(`${host}/api/notes/getall`, {
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
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
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json() 
        if(wmodal==="edit")
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
                "auth-token": localStorage.getItem("token")
            },
            body:JSON.stringify({title,desc,tag})
        });
        const json = await response.json()
        // console.log(json)

        
        setNotes([...notes, json]);

        updateAlert("Note Added Successfully!","blue","0px")
    
      
    }

    const editNote= async (id,title,desc,tag)=>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body:JSON.stringify({title,desc,tag})
        });
        const json = await response.json()
        console.log(json)

        getNote()
        updateAlert("Note Updated Successfully!","blue","0px")

            // setNotes([...notes, json]);
    

        
    }

    const deleteNote = async (id)=>{

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method:'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json() 
        // console.log(json)
        setNotes(json)

        updateAlert("Note Deleted Successfully!","blue","0px")
    }


    const userlogin = async (email,pass)=>{
        const response = await fetch(`${host}/api/auth/login`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email,pass})
        });
        const json = await response.json()
        if(json.success)
        {
            setUData({success:json.success,authtoken:json.authtoken})
            updateAlert("Login Successfully","blue","-63px")
            console.log(json)
            localStorage.setItem('token', json.authtoken);
        }
        else{
            setUData({success:false,authtoken:null})
            updateAlert(json.error,"red","-63px")
        }
    }

    const getuser = async ()=>{
        const response = await fetch(`${host}/api/auth/getuser`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json()

        setAccount({name:json.name,email:json.email})
       
    }

    const userregis = async (name,email,pass)=>{
        const response = await fetch(`${host}/api/auth/createuser`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name,email,pass})
        });
        const json = await response.json() 
        console.log(json)
        if(json.success)
        {
            setUData({success:json.success,authtoken:json.authtoken})
            updateAlert("Registered Successfully","blue","-63px")
            localStorage.setItem('token', json.authtoken);
        }
        else{
            setUData({success:false,authtoken:null})
            updateAlert(json.error,"red","-63px")
        }
    }


    const updateData = ()=>{
        setUData({
            success:false,
            authtoken:""
        })
        localStorage.removeItem('token');
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

    const hideAModal = (hide)=>{
        setAModal({
            hidden:hide
        })
    }

    const updateAlert=(alert,color1,t)=>{
        setAlert({
            alerttype:alert,
            time:new Date().getTime(),
            color:color1,
            transform:t

        })
    }

    return(
        <NoteContext.Provider value={{s1,updatestate,notes,addNote,deleteNote,getNote,editNote,modal,hideModal,getOneNote,hideEModal,emodal,updateAlert,alert,userlogin,userregis,udata,updateData,getuser,account,hideAModal,amodal}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;