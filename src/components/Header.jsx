import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import { useState } from 'react'
import arrowDown from '../images/icon-arrow-down.svg'
import iconClose from '../images/icon-close-menu.svg'
import iconMenu from '../images/icon-menu.svg'
import iconTodo from '../images/icon-todo.svg'
import iconPlanning from '../images/icon-planning.svg'
import iconReminders from '../images/icon-reminders.svg'
import iconCalendar from '../images/icon-calendar.svg'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [openSub, setOpenSub] = useState(false)
  const [openSub2, setOpenSub2] = useState(false)

  return (
    <nav className='relative mx-5 p-5'>
      <div className="flex items-center space-x-10">
        <div className="pt-2">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="hidden w-screen md:flex items-center justify-between text-mediumGray">
           <div className='space-x-10 text-sm'>
              <Link to="/features" className="hover:text-almostBlack" onClick={()=>setOpenSub(!openSub)}>Features <img src={arrowDown} alt="" className="inline" />
              {
                openSub && (
                  <div className='absolute top-10 bg-gray-200 flex flex-col rounded mt-3 p-3 text-sm w-32 space-y-2'>
                    <Link to="/" className="hover:text-almostBlack"><img src={iconTodo} alt="" className="inline p-1" /> Todo List</Link>
                    <Link to="/" className="hover:text-almostBlack"><img src={iconCalendar} alt="" className="inline p-1" /> Calendar</Link>
                    <Link to="/" className="hover:text-almostBlack"><img src={iconReminders} alt="" className="inline p-1" /> Reminders</Link>
                    <Link to="/" className="hover:text-almostBlack"><img src={iconPlanning} alt="" className="inline p-1" /> Planning</Link>
                  </div>
                )
              }
              </Link>
              <Link to="/company" className="hover:text-almostBlack" onClick={()=>setOpenSub2(!openSub2)}>Company <img src={arrowDown} alt="" className="inline" />
              {
                openSub2 && (
                  <div className='absolute top-10 bg-gray-200 flex flex-col rounded mt-3 p-3 text-sm w-32 space-y-2'>
                    <Link to="/" className="hover:text-almostBlack">History</Link>
                    <Link to="/" className="hover:text-almostBlack">Our Team</Link>
                    <Link to="/" className="hover:text-almostBlack">Blog</Link>
                  </div>
                )
              } 
              </Link>
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
                open ? <img src={iconClose} alt="" /> : <img src={iconMenu} alt="" />
              }
        </button> 
        {
          open && (
            <div className="md:hidden">
                <div id="menu" className="text-sm absolute flex flex-col items-start px-5 self-end text-mediumGray py-8 mt-5 space-y-6 bg-almostWhite sm:w-auto sm:self-start w-1/2 h-screen left-1/2 -right-5 drop-shadow-md">
                    <Link to="/features" className="hover:text-almostBlack">Features <img src={arrowDown} alt="" className="inline" /></Link>
                    <Link to="/company" className="hover:text-almostBlack">Company <img src={arrowDown} alt="" className="inline" /></Link>
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