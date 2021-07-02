import Cookies from 'js-cookie'

function Navbar(props) {
  return(
    <nav>
        <button className="home" onClick={() => props.handleNavigation('articles')}>Home</button>
        {!Cookies.get('Authorization') && <button className="login" onClick={() => props.handleNavigation('login')}>Login</button>}
        {!Cookies.get('Authorization') && <button className="registration" onClick={() => props.handleNavigation('registration')}>Register</button>}
        {!!Cookies.get('Authorization') && <button className="profile" onClick={() => props.handleNavigation('profile')}>Profile</button>}
        {!!Cookies.get('Authorization') && <button className="newPost" onClick={() => props.handleNavigation('article submit')}>Create New Post</button>}
        {!!Cookies.get('Authorization') && <button className="logout" onClick={() => props.handleLogout('articles')}>Logout</button>}
        {!!Cookies.get('Authorization') && <button className="adminView" onClick={() => props.handleNavigation('admin view')}>Admin View</button>}
    </nav>
  )
}

export default Navbar
