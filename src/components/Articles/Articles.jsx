import "./Articles.css";
import { articles } from "../../utils/ArticlesList";
import ArticleListing from "./ArticleListing";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Articles = ({ isHome = false }) => {
  const articleList = isHome ? articles.slice(0, 4) : articles;

  return (
    <section className="a-wrapper">
      <div className="a-container">
        <div className="a-head">
          <p>{isHome ? "Get to Know Real Estate" : "Real Estate Articles"}</p>
          <Link to="/articles">
            <p className="a-head-right">
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
