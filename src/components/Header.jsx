import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <nav className='relative container mx-auto p-2'>
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-500">
           <Link to="/features" className="hover:text-gray-400">Features</Link>
           <Link to="/company" className="hover:text-gray-400">Company</Link>
           <Link to="/careers" className="hover:text-gray-400">Careers</Link>
           <Link to="/about" className="hover:text-gray-400">About</Link>
        </div>
        <div>
          <a href="/" className="p-3 px-6 pt-2 text-gray-500 rounded-full baseline hover:bg-white">Login</a>
          <a href="/" className="p-3 px-6  text-gray-500 border border-gray-500 bg-white rounded-full baseline hover:bg-white">Register</a>
        </div>
      </div>
    </nav>
  )
}

export default Header