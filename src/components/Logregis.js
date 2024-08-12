import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Logregis() {

    const passin = useRef(null)
    const passi = useRef(null)

    const login = useRef(null)
    const regis = useRef(null)
    
    const form = useRef(null)


    useEffect(()=>{
        form.current.style.transform="rotateY(180deg)"
    },[])

    const navigate = useNavigate()

    const passtogle = ()=>{

        if(passin.current.type=="password" && passi.current.classList.contains("fa-eye-slash"))
        {
           passin.current.type="text"
           passi.current.classList.remove("fa-eye-slash")
           passi.current.classList.add("fa-eye")
        }
        else{
            passin.current.type="password"
            passi.current.classList.remove("fa-eye")
            passi.current.classList.add("fa-eye-slash")
           
        }

        
    }

    const handleRegis = ()=>{

       console.log("clicked")
       login.current.style.transform="rotateY(180deg)"
        regis.current.style.transform="rotateY(180deg)"
         regis.current.style.zIndex="10"
    
    }

    const handleLogin = ()=>{

        console.log("clicked")
        login.current.style.transform="rotateY(0deg)"
         regis.current.style.transform="rotateY(0deg)"
          regis.current.style.zIndex="-10"
        
 
         
     }

     const gotoHome = ()=>{

        console.log("clicked")
        navigate("/")
       
 
         
     }

    

  return (
    <div className="bg-gray-200 fixed inset-0 bg-opacity-30 flex justify-center items-center">
        <div className="bg-blue-400 absolute w-full flex h-full ">
        <div className="bg-blue-500 relative  w-[100%] rotate-0  h-[100%]">
            <h1 className="text-white p-3 cursor-pointer" onClick={gotoHome}>
                <i class="fa-sharp fa-solid fa-arrow-left px-2"></i>
                Home
            </h1>
        </div>
        <div className="bg-blue-600 relative  w-[100%] rotate-0 h-[100%]">

        </div>
        <div className="bg-blue-700 relative  w-[100%] rotate-0 h-[200%]">

        </div>
        </div>
      
      <div className="bg-none w-[80%] md:w-[30%] h-[60%] md:h-[75%] fixed rounded-xl" style={{perspective:"1000px"}}>
        <div className="bg-gray-200 inset-0 absolute rounded-xl shadow-2xl transition-all duration-500  " ref={login}>
          <form
            action=""
            className="flex flex-col h-full px-5 py-5 justify-center "
          >
            <h1 className="font-bold text-3xl self-center pt-4 pb-5  ">Login</h1>
            <span className=" font-bold text-sm md:text-base rounded-l-lg pb-1 px-2">
              Email
            </span>
            <div className="flex group">
              <input
                type="text"
                placeholder="Enter Title..."
                className="w-[90%] bg-white border-2 border-gray-300 rounded-l-lg text-base border-r-0 px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:border-r-0 focus:border-2 focus:ring-blue-100"
                name="email"
              />
              <i className="fa-solid fa-user self-center text-blue-700 bg-white p-3 rounded-r-lg shadow-sm border-2 border-gray-300 border-l-0 group-focus-within:border-blue-700 group-focus-within:ring-blue-100"></i>
            </div>

            <span className=" font-bold text-sm md:text-base rounded-l-lg pt-5 pb-1 px-2">
              Password
            </span>
            <div className="flex group">
              <input
                type="password"
                placeholder="Enter Title..."
                className="w-[90%] bg-white border-2 border-gray-300 rounded-l-lg text-base border-r-0 px-4 py-2 shadow-sm focus:outline-none focus:border-blue-700 focus:border-r-0  focus:ring-blue-100"
                name="pass"
                ref={passin}
              />
              <i className="fa-solid fa-eye-slash cursor-pointer text-blue-700 self-center bg-white p-3 rounded-r-lg shadow-sm border-2 border-gray-300 border-l-0 group-focus-within:border-blue-700 group-focus-within:ring-blue-100" ref={passi} onClick={passtogle}></i>
            </div>


            <button className="bg-blue-700 text-base my-10 p-2 w-52 self-center text-white rounded-lg">
              Login
            </button>

            <p className="text-blue-700 self-center text-sm">Doesn't have an Account? <strong className="cursor-pointer " onClick={handleRegis}>SIGN UP</strong></p>

          </form>
        </div>
        <div className="bg-gray-200 inset-0 relative h-full -z-10 rounded-xl shadow-2xl transition-all duration-500"  ref={regis}>

        <form
            action=""
            className="flex flex-col h-full px-5 py-5 justify-center "
            ref={form}
          >
            <h1 className="font-bold text-3xl self-center pt-4 pb-3  ">Register</h1>
            <span className=" font-bold text-sm md:text-base rounded-l-lg pb-1 px-2">
              Name
            </span>
            <div className="flex group">
              <input
                type="text"
                placeholder="Enter Title..."
                className="w-[90%] bg-white border-2  border-gray-300 rounded-l-lg text-base border-r-0 px-4 py-2 shadow-sm focus:outline-none focus:border-r-0 focus:border-blue-700  focus:border-2 focus:ring-blue-100"
                name="email"
              />
              <i className="fa-solid fa-user self-center text-blue-700 bg-white p-3 rounded-r-lg shadow-sm border-2 border-gray-300 border-l-0 group-focus-within:border-blue-700 group-focus-within:ring-blue-100"></i>
            </div>
            <span className=" font-bold text-sm md:text-base rounded-l-lg pb-1 pt-3  px-2">
              Email
            </span>
            <div className="flex group">
              <input
                type="text"
                placeholder="Enter Title..."
                className="w-[90%] bg-white border-2  border-gray-300 rounded-l-lg text-base border-r-0 px-4 py-2 shadow-sm focus:outline-none focus:border-r-0 focus:border-blue-700  focus:border-2 focus:ring-blue-100"
                name="email"
              />
              <i className="fa-solid fa-user self-center text-blue-700 bg-white p-3 rounded-r-lg shadow-sm border-2 border-gray-300 border-l-0 group-focus-within:border-blue-700 group-focus-within:ring-blue-100"></i>
            </div>

            <span className=" font-bold text-sm md:text-base rounded-l-lg pt-3 pb-1 px-2">
              Password
            </span>
            <div className="flex group">
              <input
                type="password"
                placeholder="Enter Title..."
                className="w-[90%] bg-white border-2 border-gray-300 rounded-l-lg text-base border-r-0 px-4 py-2 shadow-sm focus:outline-none focus:border-r-0 focus:border-blue-700   focus:ring-blue-100"
                name="pass"
                ref={passin}
              />
              <i className="fa-solid fa-eye-slash cursor-pointer text-blue-700 self-center bg-white p-3 rounded-r-lg shadow-sm border-2 border-gray-300 border-l-0 group-focus-within:border-blue-700 group-focus-within:ring-blue-100" ref={passi} onClick={passtogle}></i>
            </div>


            <button className="bg-blue-700 text-base my-5 p-2 w-52 self-center text-white rounded-lg">
              Register
            </button>

            <p className="text-blue-700 self-center text-sm ">Doesn't have an Account? <strong className="cursor-pointer " onClick={handleLogin}>SIGN IN</strong></p>

          </form>
        </div>
      </div>
    </div>
  );
}
