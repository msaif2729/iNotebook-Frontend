import React from "react";
import img1 from "./specific.png";

export default function About() {
  return (
    <div className=" pb-2 pt-14">
      <div className=" justify-evenly flex flex-col  md:px-20 lg:flex-row pb-5 items-center pt-5 px-5 bg-blue-200">
        <div className="self-center w-[100%] flex flex-col justify-center items-center lg:items-start ">
          <p className="text-4xl font-semibold mt-3 text-center  lg:text-start">
            We help you effortlessly manage your notes and stay organized, all
            while ensuring your privacy and security.
          </p>
          <p className="mt-2 font-normal text-center lg:text-start ">
            iNotebook was developed to provide a secure, user-friendly platform
            for managing your personal notes in the cloud, keeping your
            thoughts, ideas, and tasks organized and accessible anytime,
            anywhere.
          </p>
        </div>
        <div className="self-center w-[100%] flex flex-col justify-center items-center lg:items-end ">
          <img src={img1} alt="" className="w-96  " />
        </div>
      </div>
      <h1 className="text-2xl font-bold pb-2 px-5 md:px-20 pt-10 ">Key Features</h1>
      <div className="flex flex-wrap pb-5  justify-center items-center ">
        <div className="px-6 py-4">
          <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">
            
            <h1 className="text-xl font-semibold ">Secure Access</h1>
            <p className="text-sm font-normal">
              Your notes are protected with top-tier security measures, ensuring
              that only you can access them.
            </p>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">

            <h1 className="text-xl font-semibold ">User-Specific Content</h1>
            <p className="text-sm font-normal">
            iNotebook stores and displays only your notes, providing a personalized and clutter-free experience.
            </p>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">

            <h1 className="text-xl font-semibold ">Full Control</h1>
            <p className="text-sm font-normal">
              Effortlessly create, read, update, and delete your notes with an
              intuitive interface designed for simplicity and efficiency.
            </p>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">
          
            <h1 className="text-xl font-semibold ">Device Sync</h1>
            <p className="text-sm font-normal">
              Access your notes from any device with seamless synchronization
              across platforms.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold pb-2 px-5 md:px-20">Advantages</h1>
<div className="flex flex-wrap pb-5 justify-center items-center">
    <div className="px-6 py-4">
         <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">
            <h1 className="text-xl font-semibold">Enhanced Productivity</h1>
            <p className="text-sm font-normal">
                iNotebook helps you stay organized, making it easier to manage your tasks and goals.
            </p>
        </div>
    </div>

    <div className="px-6 py-4">
        <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">
            <h1 className="text-xl font-semibold">Privacy First</h1>
            <p className="text-sm font-normal">
                Your notes are kept private, with no sharing or unauthorized access.
            </p>
        </div>
    </div>

    <div className="px-6 py-4">
        <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">
            <h1 className="text-xl font-semibold">Ease of Use</h1>
            <p className="text-sm font-normal">
                A clean, simple design makes iNotebook accessible for all users, regardless of tech skills.
            </p>
        </div>
    </div>

    <div className="px-6 py-4">
        <div className="flex-grow basis-28 px-5 py-2 w-80 md:w-72  shadow-xl h-32  bg-gray-200 rounded-xl justify-center items-center hover:scale-105 transition-all duration-150">
            <h1 className="text-xl font-semibold">Cloud Convenience</h1>
            <p className="text-sm font-normal">
                Enjoy cloud storage without compromising on security or functionality.
            </p>
        </div>
    </div>
  </div>
  <div className=" justify-evenly flex flex-col  md:px-20 lg:flex-row pb-5 items-center px-5 bg-b">
        <div className="self-center w-[100%] flex flex-col justify-center items-center lg:items-start ">
          <p className="text-4xl font-semibold mt-3 text-center  lg:text-start">
            The Reason Behind iNotebook
          </p>
          <p className="mt-2 font-normal text-center lg:text-start ">
          iNotebook was born out of the need for a secure, efficient, and accessible note-taking solution that respects your privacy. We wanted to create a platform that simplifies the way you manage your thoughts and tasks, while offering the flexibility to access your notes anywhere, anytime. Our goal is to empower you with a tool that not only enhances your productivity but also adapts to your lifestyle, keeping your information safe and at your fingertips.  
          </p>
        </div>
        <div className="self-center w-[100%] flex flex-col justify-center items-center lg:items-end ">
          <img src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?t=st=1724163372~exp=1724166972~hmac=e53c95b7406f34513aa9f3791b3dcf6ec03cf5f281a6b5df07620456b6b3b0cf&w=900" alt="" className="w-96  " />
        </div>
      </div>


    </div>
  );
}
