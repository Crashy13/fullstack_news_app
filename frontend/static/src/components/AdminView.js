import React from 'react'
import Cookies from 'js-cookie'

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      title: '',
      body: '',
      author: '',
      category: '',
    }

    this.publishArticle = this.publishArticle.bind(this)

  }

  componentDidMount() {
    fetch(`/api/v1/articles/admin/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({articles: data})).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
  }

  publishArticle(e) {
    e.preventDefault()
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
    const articles = this.state.articles.map(article => (
      <li key={article.id}>
        <h3 className="article_title">{article.title}</h3>
        <p className="article_body">{article.body}</p>
        <p> By: {article.author}</p>
        <input type="checkbox" id="is_published" name="is_published" value="True"/>
        <button type="submit" onClick={this.publishArticle}>Publish Article</button>
        <button>Delete</button>
      </li>
        ))
    return(
      <>
      <div className="article_container">
        <ul>{articles}</ul>
      </div>
      </>
    )
  }
}

export default AdminView
