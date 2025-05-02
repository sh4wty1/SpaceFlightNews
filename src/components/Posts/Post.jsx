import React from "react";
import "./post.css"

export class Post extends React.Component {
    render() {
        return (
        <article id="article">
            <img src={ this.props.thumbnail } alt="" id="article-img"/>
            <div id="article-infos">
                <h2>
                    <a
                    href={this.props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {this.props.title}
                    </a>
                </h2>
                <h3>{ this.props.provider }</h3>
                <p>{ this.props.paragraph }</p>
            </div>
        </article>
        )}
}