import "./Articles.css";
import { articles } from "../../articles.json";
import ArticleListing from "./ArticleListing";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Articles = ({ isHome = false }) => {
  const articleList = isHome ? articles.slice(0, 4) : articles;

  return (
    <section className="a-wrapper">
      <div className="a-container">
        <div className={isHome ? "a-head" : "articles-page-head"}>
          <p>{isHome ? "Get to Know Real Estate" : "Real Estate Articles"}</p>
          <Link to="/articles">
            <p className={isHome ? "a-head" : "a-head-right-none"}>
              Explore All
              <FaArrowRight className="a-head-right-icon" />
            </p>
          </Link>
        </div>
        {/* article cards  */}
        <div className="a-cards">
          {articleList.map((article, i) => (
            <ArticleListing key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
