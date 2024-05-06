import React from 'react'
import errorImg from "../../assets/pagenotfound.jpeg"
import "./NotFoundPage.css"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section className='error container'>
        <div className='error-page'>
            <img src={ errorImg } alt="" />
            <div className='error-details'>
                <p>Sorry! The page you are looking for does not exist.</p>
                <Link to="/">
                <button>Go to Home</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default NotFoundPage