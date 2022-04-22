import React from 'react'
import './footer.css'
import{BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{BsWhatsapp} from 'react-icons/bs'

function footer() {
  return (
   <footer>
     <h3>Ghafur</h3>
     
     <ul className="permalinks">
       <li><a href="#">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Experience</a></li>
       <li><a href="#">Services</a></li>
       <li><a href="#">Portfolio</a></li>
       <li><a href="#">Contact</a></li>
     </ul>

     <div className="footer__socials">
       <a href="facebook"><BsFacebook/></a>
       <a href="Instagram"><BsInstagram/></a>
       <a href="Whatsapp"><BsWhatsapp/></a>
     </div>

     <div className="footer__copyright">
       <small>&copy; Gghfurr. All Right Reserved.</small>
     </div>
   </footer>
  )
}

export default footer