import React from 'react'
import ArticleDetails from './ArticleDetails'
import Cookies from 'js-cookie'

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }

  this.deleteArticle = this.deleteArticle.bind(this);
  this.editArticle = this.editArticle.bind(this);

  }

  componentDidMount() {
    fetch('/api/v1/articles/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ articles: data })).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  deleteArticle(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }

    fetch(`/api/v1/articles/${id}`, options)
      .then(response => {
        const articles = [...this.state.articles];
        const index = articles.findIndex(article => article.id === id);
        articles.splice(index, 1);
        this.setState({articles})
      })
  }

  editArticle(article) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(article),
    }

    fetch(`/api/v1/articles/${article.id}`, options)
      .then(response => response.json())
      .then(data => {
        const articles = [...this.state.articles];
        const index = articles.findIndex(article => article.id);
        articles[index] = data;
        console.log({articles});
      });
  }

  render() {
    const articles = this.state.articles.map(article => (
    <ArticleDetails key={article.id} article={article} deleteArticle={this.deleteArticle} editArticle={this.editArticle} />
    ))
    return (
      <>
        <ul>{articles}</ul>
      </>
    )
  }
}
export default Articles
