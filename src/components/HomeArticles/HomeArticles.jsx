import "./HomeArticles.css";
import { Articles } from "../../utils/ArticlesList";
import { FaUserAlt, FaClock } from "react-icons/fa";

const HomeArticles = ({ isHome = false }) => {
  const articleList = isHome ? Articles.slice(0, 4) : Articles;

  return (
    <section className="a-wrapper">
      <div className="a-container">
        <div className="a-head">
          <span>Get To Know Real Estate</span>
        </div>
        {/* article cards  */}
        <div className="a-cards">
          {articleList.map((article, i) => (
            <div className="a-card">
              <img src={article.image} alt="home" />
              <div className="a-details">
                <span className="a-title">{article.title}</span>
                <div className="a-extra">
                  <span>
                    <FaUserAlt />
                    {article.author}
                  </span>
                  <span>
                    <FaClock />
                    {article.mins} mins
                  </span>
                </div>
                <div className="a-desc">
                  <span>{article.desc}</span>
                  <button className="a-btn">Read more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeArticles;
