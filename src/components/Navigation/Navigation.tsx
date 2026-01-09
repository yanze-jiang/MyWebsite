import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

interface NavigationProps {
  isOpen: boolean
  onClose: () => void
}

const Navigation = ({ isOpen, onClose }: NavigationProps) => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/project', label: 'Project' },
    { path: '/moment', label: 'Moment' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
