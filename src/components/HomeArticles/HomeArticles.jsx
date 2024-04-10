import React from 'react'
// import '../Property/properties.css'
import './HomeArticles.css'
import { ArticlesList } from '../../utils/ArticlesList'

const HomeArticles = () => {
  return (
    <section className="a-wrapper">
      <div className="a-container">
        <div className="a-head">
          <span>Get To Know Real Estate</span>
        </div>
    {/* article cards  */}
        <div className="a-cards">
          {ArticlesList.map((card, i) => (
              <div className="a-card">
                <img src={card.image} alt="home" />
                <div className="a-details">
                  <span className="a-title">{card.title}</span>
                  <div className="a-extra">
                    <span>{card.author}</span>
                    <span>{card.mins} mins</span>
                  </div>
                  <div className="a-desc">
                    <span>{card.desc}</span>
                    <button className="a-btn">Readmore</button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeArticles