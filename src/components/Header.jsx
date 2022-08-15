import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <nav className='relative mx-5 p-5'>
      <div className="flex items-center space-x-10">
        <div className="pt-2">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="hidden w-screen md:flex items-center justify-between text-mediumGray">
           <div className='space-x-10 text-sm'>
              <Link to="/features" className="hover:text-almostBlack">Features</Link>
              <Link to="/company" className="hover:text-almostBlack">Company</Link>
              <Link to="/careers" className="hover:text-almostBlack">Careers</Link>
              <Link to="/about" className="hover:text-almostBlack">About</Link>
           </div>
           <div className="space-x-6 px-6">
              <a href="/" className=" text-sm hover:text-almostBlack">Login</a>
              <a href="/" className="bg-almostWhite p-3 text-sm rounded-xl border border-almostBlack baseline hover:bg-almostWhite hover:text-almostBlack">Register</a>
           </div>
        </div>
      </div>
    </nav>
  )
}

export default Header