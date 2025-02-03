import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const Project = () => {

    const [isSidepanelOpen, setIsSidepanelOpen] = useState(false);
    const location = useLocation();
    console.log(location.state);
    
  return (
    <main className='h-screen w-screen flex '>

      <section className='left h-full min-w-96 bg-red-300 flex flex-col relative'>
        <header className='flex justify-between items-center  p-3 px-4 w-full bg-slate-200' >
          <button className=' flex gap-2'>
            <i className="ri-add-fill mr-1"></i>
            <p>Add colaborators</p>
          </button>
          <button className='p-2 '
          onClick={()=>setIsSidepanelOpen(!isSidepanelOpen)}>
            <i className="ri-group-3-fill "></i>
          </button>
        </header>

        <div className="conversation-area  flex-grow flex flex-col">

          <div className="message-box  flex-grow flex flex-col">
            <div className="incoming message  flex flex-col bg-slate-50 w-fit max-w-56 p-2 px-4 rounded-lg my-2">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className='text-sm'>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, laboriosam?
                </p> 
            </div>
            <div className="ml-auto  message  flex flex-col bg-slate-50 w-fit max-w-56 p-2 px-4 rounded-lg my-2">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className='text-sm'>
              Lorem ipsum dolor sit amet.
                </p> 
            </div>

          </div>
            <div className="inputField w-full flex ">
              <input className='p-2 px-4 border-none flex-grow outline-none' type="text" placeholder="Type a message" />
              <button className=' px-5 bg-slate-950 text-white'><i className="ri-send-plane-fill"></i></button>
            
          </div>
        </div>
        
      <div className={`sidepanel flex flex-col gap-2 w-full h-full absolute  bg-slate-50 transition ${isSidepanelOpen?'translate-x-0':'-translate-x-full' } top-0`}>
        <header className='flex justify-end p-3 px-3 bg-slate-400'>
          <button className='p-2'
          onClick={()=>setIsSidepanelOpen(!isSidepanelOpen)}>
            <i className="ri-close-line"></i>
          </button>
        </header>

        <div className="users flex flex-col gap-2 p-2"> 
          <div className="user flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-md">  
            <div className='aspect-square w-fit h-fit flex items-center justify-center text-white p-5 rounded-full bg-slate-700 p-2 ' >
              <i className="ri-user-fill absolute"></i>
            </div>
              <h1 className='font-semibold text-lg' >user name</h1>
          </div>
        </div>

      </div>

      </section>

    </main>
  )
}

export default Project

/// TIME : 03:34:00