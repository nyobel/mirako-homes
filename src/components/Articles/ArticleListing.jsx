import { FaUserAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticleListing = ({ article }) => {
  return (
    <div className="a-card">
              <img src={article.image} alt="home" />
              <div className="a-details">
                <span className="a-title">{article.title}</span>
                <div className="a-extra">
                  <p>
                    <FaUserAlt className="a-icon" />
                    {article.author}
                  </p>
                  <p>
                    <FaClock className="a-icon" />
                    {article.mins} mins
                  </p>
                </div>
                <div className="a-desc">
                  <span>{article.desc}</span>
                  <Link to={`/article/${article.id}`}><button className="a-btn">Read more</button></Link>
                </div>
              </div>
            </div>
  )
}

export default ArticleListing