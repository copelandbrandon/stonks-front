import React from "react";

// Import global styling overrides aka our theme
import "../../globalStyleOverride.scss";
import ListItem from "./ListItem";

  // props
  // img
  // headline
  // summary
  export default function ArticleList(props) {
    let articles;

    if (props.news){
      articles = props.news.map((article) => {
        return (
          <div className='list-item-container' key={article.id}>
          <ListItem
          img={article.image}
          headline={article.headline}
          summary={article.summary}
          dateTime={article.datetime}
          />
          <div className='article-divider'/>
          </div>
        )
      });
    }

    return (
    <div>
      <ul className='article-list'>
        { articles }
      </ul>
    </div>
    )
  }