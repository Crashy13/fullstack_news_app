function Navbar(props) {
  return(
    <nav>
        <button className="login" onClick={() => props.handleNavigation('login')}>Login</button>
        <button className="registration" onClick={() => props.handleNavigation('registration')}>Register</button>
        <button className="logout" onClick={() => props.handleLogout('logout')}>Logout</button>
    </nav>
  )
}

export default Navbar
