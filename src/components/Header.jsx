import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import {IoIosArrowDown} from "react-icons/io"
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='relative mx-5 p-5'>
      <div className="flex items-center space-x-10">
        <div className="pt-2">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="hidden w-screen md:flex items-center justify-between text-mediumGray">
           <div className='space-x-10 text-sm'>
              <Link to="/features" className="hover:text-almostBlack ">Features <IoIosArrowDown className='inline'/></Link>
              <Link to="/company" className="hover:text-almostBlack">Company  <IoIosArrowDown className='inline' /></Link>
              <Link to="/careers" className="hover:text-almostBlack">Careers</Link>
              <Link to="/about" className="hover:text-almostBlack">About</Link>
           </div>
           <div className="space-x-6 px-6">
              <a href="/" className=" text-sm hover:text-almostBlack">Login</a>
              <a href="/" className="bg-transparent p-3 text-sm rounded-xl border border-almostBlack baseline hover:text-almostBlack">Register</a>
           </div>
        </div>
        <button id="menu-btn" onClick={()=>setOpen(!open)} className="absolute right-0 focus:outline-none md:hidden">
              {
                open ? <GrClose size="2rem" /> : <GiHamburgerMenu size="2rem" />
              }
        </button> 
        {
          open && (
            <div className="md:hidden">
                <div id="menu" className="text-sm absolute flex flex-col items-start px-5 self-end text-mediumGray py-8 mt-5 space-y-6 bg-almostWhite sm:w-auto sm:self-start w-1/2 h-screen left-1/2 -right-5 drop-shadow-md">
                    <Link to="/features" className="hover:text-almostBlack">Features <IoIosArrowDown className='inline'/></Link>
                    <Link to="/company" className="hover:text-almostBlack">Company <IoIosArrowDown className='inline'/></Link>
                    <Link to="/careers" className="hover:text-almostBlack">Careers</Link>
                    <Link to="/about" className="hover:text-almostBlack">About</Link>
                    <a href="/" className=" text-sm mx-auto hover:text-almostBlack">Login</a>
                  <a href="/" className="bg-transparent w-full text-center mx-auto p-3 text-sm rounded-xl border border-almostBlack baseline hover:text-almostBlack">Register</a>
                </div>
            </div>
          )
        }
        </div>
      </nav>
    )
  }

  export default Header