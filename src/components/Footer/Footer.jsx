import React from 'react'
import instagram from "../../assets/images/icon-instagram.svg"
import bluesky from "../../assets/images/icon-bluesky.svg"
import tiktok from "../../assets/images/icon-tiktok.svg"
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-left">
            <p>Made With ❤️ and 🥑</p>
        </div>
        <div className="footer-right">
         <img src={instagram} alt="instagram image" />
         <img src={bluesky} alt="blue sky image" />
         <img src={tiktok} alt="tik tok image" />
        </div>
    </footer>
  )
}

export default Footer
