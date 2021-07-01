import { Component } from 'react';
import Cookies from 'js-cookie'
import './App.css';
import Login from './Login';
import Registration from './Registration';
import Navbar from './Navbar';
import ArticleSubmit from './ArticleSubmit'
import Articles from './Articles'
import Profile from './Profile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'articles'
    }

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }


handleNavigation(selection) {
  this.setState({selection});
}

async handleRegistration(user) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(user),
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/registration/', options).catch(handleError);

  if(response.ok) {
  const data = await response.json().catch(handleError);
  Cookies.set('Authorization', `Token ${data.key}`)
  this.setState({ selection: 'articles' })
  }
}

async handleLogin(user) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(user),
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/login/', options).catch(handleError);

  if(response.ok) {
  const data = await response.json().catch(handleError);
  Cookies.set('Authorization', `Token ${data.key}`);
  this.setState({ selection: 'articles' })
  }
}

async handleLogout() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    }
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/logout/', options).catch(handleError);

  if(response.ok) {
    Cookies.remove('Authorization');
    this.setState({ selection: 'login' })
  }
}

  render() {
    return (
      <div className="main_container">
        <>
          <Navbar handleNavigation={this.handleNavigation} isAuth={this.state.selection === 'articles'} handleLogout={this.handleLogout}/>
            <div>
              {this.state.selection === 'login' && <Login handleNavigation={this.handleNavigation} handleLogin={this.handleLogin}/>}
              {this.state.selection === 'registration' && <Registration handleNavigation={this.handleNavigation} handleRegistration={this.handleRegistration}/>}
              {this.state.selection === 'articles' && <Articles addArticle={this.addArticle} />}
              {this.state.selection === 'profile' && <Profile />}
              {this.state.selection === 'article submit' && <ArticleSubmit />}
            </div>
        </>
      </div>
    );
  }
}

export default App;
