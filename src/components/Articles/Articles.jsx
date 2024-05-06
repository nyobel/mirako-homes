import "./Articles.css";
import { articles } from "../../utils/ArticlesList";
import ArticleListing from "./ArticleListing";

const Articles = ({ isHome = false }) => {
  const articleList = isHome ? articles.slice(0, 4) : articles;

  return (
    <section className="a-wrapper">
      <div className="a-container">
        <div className="a-head">
          <span>{isHome ? "Get to Know Real Estate" : "Real Estate Articles"}</span>
        </div>
        {/* article cards  */}
        <div className="a-cards">
          {articleList.map((article, i) => (
            <ArticleListing key={article.id} article={ article }/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
