
import { Link, NavLink } from 'react-router-dom'
export default function Nav(){
  const linkClass = ({isActive}) => (
    `px-3 py-2 rounded hover:bg-brand-gray-50 ` +
    (isActive ? 'text-brand-red-600 font-semibold underline decoration-brand-red-500 underline-offset-4' : 'text-brand-gray-700')
  )
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="section py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-brand-red-600">Tamil Solid Blocks</Link>
        <nav className="flex gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/quotation" className={linkClass}>Quotation</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/admin" className={linkClass}>Admin</NavLink>
        </nav>
      </div>
    </header>
  )
}
