import React from 'react';

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,

    }
  }
  render() {
    return(
    <>

    {
      this.state.data
      ? (
        <div className='container'>
           <p>{this.state.data.display_name}</p>
           <img src={this.state.data.avatar} alt=""/>
           <button type="button">Edit</button>
           <button type="button">Delete</button>
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


    </>
  )
  }
}

export default ProfileDetails
