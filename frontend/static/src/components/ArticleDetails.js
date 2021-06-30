import React from 'react';

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.article.tile,
      body: this.props.article.body,
      author: this.props.article.author,
      category: this.props.article.category,
    }
  }
  render() {
    const article = this.props.article;
    return(
      <>
      <li>
        <p>TITLE: {article.title}</p>
        <p>ARTICLE: {article.body}</p>
        <p>By: {article.author}</p>
      </li>
      </>
    )
  }
}

export default ArticleDetail
