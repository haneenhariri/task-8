import './Footer.css'
import logo from './../../assets/image/logo.png'
import facebook from './../../assets/image/facebook.png'
import behance from './../../assets/image/behance.png'
import instgram from './../../assets/image/instgram.png'
import twitter from './../../assets/image/twitter.png'
import linkdin from './../../assets/image/linkdin.png'
export default function Footer() {
  return (
    <footer>
      <div className='f-div'>
        <img src={logo} alt="" />
        <span>.agency</span>
        <h3>Head Office</h3>
        <p>Syria - Latakia - GRH2+HJX
            35.5199518</p>
        <p className='f-c'>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
      </div>
      <div className='footer-info'>
        <div>
            <h3>Sales</h3>
            <p>contact@focal-x.com +963 953 666 056</p>
            <h3>Public Relations</h3>
            <p>pr@focal-x.com
                +963 953 666 052</p>
        </div>
        <div>
            <h3>Customer Support</h3>
            <p>info@focal-x.com
                +963 953 666 054</p>
            <h3>Human Resources</h3>
            <p>hr@focal-x.com</p>
            </div>
        <div>
            <h3>Useful Links</h3>
            <p>Clients & Partners</p>
            <p>Check Certificat ID</p>
            <p>Check for employee</p>
            <p>Our Brand ID guidlines</p>
        </div>
        <div>
            <h3>Keep In Touch</h3>
            <div className="icon-f">
                <a href="https://www.facebook.com/focal.x.agency/"><img src={facebook} alt="feacbook" /></a>
                <a href="https://www.behance.net/focal-x-agency"><img src={behance} alt="behance" /></a>
                <a href="https://www.instagram.com/focal.x.agency"><img src={instgram} alt="instsgrsm" /></a>
                <a href="https://twitter.com/focal_x_agency"><img src={twitter} alt="twitter" /></a>
                <a href="https://www.linkedin.com/company/focal-x-agency"><img src={linkdin} alt="linkedin" /></a>
            </div>
        </div>
      </div>
    </footer>
  )
}
