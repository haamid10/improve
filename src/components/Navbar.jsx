import { useState } from "react"
import {AiOutlineClone, AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
    const  [IsOpen,setIsOpen ] = useState(false)
     const handleNav = () => {
         setIsOpen(!IsOpen)
     }
  return (
    <div className=' mx-auto px-4 flex justify-between items-center h-24 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Contact</li>
        <li className="p-4">About</li>
       </ul>
      
       <div className="">
        <AiOutlineMenu size={20}/>
       </div>
       <div className=" fixed left-0 top-0
        w-[60%] h-full border-r-gray-900 bg-[#000300">
       <ul className="p-4 uppercase">
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4">About</li>
       </ul>
       <div className="">
        <AiOutlineMenu size={20}/>
       </div>
       </div>

       {/* <AiOutlineClone size={20}/> */}

    </div>
  )
}

export default Navbar
 