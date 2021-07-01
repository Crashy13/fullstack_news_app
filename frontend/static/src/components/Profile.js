import React from 'react';
import Cookies from 'js-cookie';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      avatar: null,
      preview: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editProfile = this.editProfile.bind(this);

  }

  componentDidMount() {
    fetch(`/api/v1/users/profiles/user/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({data})).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleImage(e) {
    let file = e.target.files[0]
    this.setState({
      avatar: file, // could also do [e.target.name]: file
      // saves file to state
    });

    let reader = new FileReader(); // allows us to read the content of a file
    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      })
    }

    reader.readAsDataURL(file)
    // on load end event
    // asynchronously read the file and tell it what to do with the file
    // reading the file and setting it to the preview property on state
  }

  async handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('avatar', this.state.avatar);
    formData.append('display_name', this.state.display_name);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    };

    const response = await fetch('/api/v1/users/profiles/', options);
    this.setState({response});
  }

  editProfile(profile) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(profile)
    }
    fetch(`/api/v1/users/profiles/user`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {

      })
  }


  render() {
    return(
      <>
      <div className="profile_container">


        {
          this.state.data
          ? (
            <div className='container'>
               <p>Profile Name: {this.state.data.display_name}</p>
               <p>Profile Picture:</p><img src={this.state.data.avatar} alt=""/>
               <button type="button">Edit</button>
            </div>
          )
          : <form onSubmit={this.handleSubmit}>
            <input type="text" name="display_name" value={this.state.display_name} onChange={this.handleInput}/>
            <input type="file" name="avatar" onChange={this.handleImage} />

            {
              this.state.avatar
              ? <img src={this.state.preview} alt=""/>
              : null
            }

            <button type='submit'>Save profile?</button>

          </form>

        }



      </div>
      </>
    )
  }
}

export default Profile
