import React from 'react';

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      body: this.props.article.body
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  saveArticle() {
    const article = this.props.article;
    article.body = this.state.body;
    this.props.editArticle(article);
    this.setState({isEditing: false});
  }

  render() {
    const article = this.props.article;
    return(
        <>
        <div className="article_single">
          <li>

            <h3 className="article_title">{article.title}</h3>

            {this.state.isEditing
              ? <textarea cols="30" row="10" name="body" value={this.state.body} onChange={this.handleInput}/>
            : <p className="article_body">{article.body}</p>
            }

            <p>By: {article.author}</p>

            {this.state.isEditing
              ? <button type='button' onClick={this.saveArticle}>Save</button>
              : article.is_owner && <button type='button' onClick={() => this.setState({isEditing: true})}>Edit</button>
            }

            {article.is_owner && <button type="button" onClick={() => this.props.deleteArticle(article.id)}>Delete</button>}

          </li>
        </div>
        </>
    )
  }
}

export default ArticleDetail
