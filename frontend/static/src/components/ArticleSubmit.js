import React from 'react'
import Cookies from 'js-cookie'

class ArticleSubmit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      title: '',
      body: '',
      author: '',
      category: '',
    }
    this.addArticle = this.addArticle.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  addArticle(article) {
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(this.state),
    }
    fetch('/api/v1/articles/', options)
      .then(response => {

        if (!response.ok) {
         throw new Error('Network response was not ok');
       }
        return response.json();

      })
      this.setState({title: '', body: ''})
  }

  render() {
    return(
      <>
        <form onSubmit={this.addArticle}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInput} placeholder="Title of Article"/>
          <textarea name="body" value={this.state.body} onChange={this.handleInput} id="" cols="30" rows="10" placeholder="Body of Article"></textarea>
          <input type="text" name="author" value={this.state.author} onChange={this.handleInput} placeholder="Author of Article"/>
          <input type="text" name="category" value={this.state.category} onChange={this.handleInput} placeholder="Category of Article"/>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default ArticleSubmit
