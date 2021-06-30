import React from 'react'
import Cookies from 'js-cookie'
import ArticleDetails from './ArticleDetails'
import ArticleSubmit from './ArticleSubmit'

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      title: '',
      body: '',
      author: '',
      category: '',
    }


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

  render() {
    const articles = this.state.articles.map(article => (
    <ArticleDetails key={article.id} article={article}/>
    ))
    return (
      <>
        <ul>{articles}</ul>
      </>
    )
  }
}
export default Articles
