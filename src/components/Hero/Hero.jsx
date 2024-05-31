import './Hero.css'
import brandingpattren from './../../assets/image/brandingpattren.png'
import gameBoy from './../../assets/image/gameBoy-min.png'
import pressStart from './../../assets/image/pressStart.svg'
import X from './../../assets/image/x-social.png'
import instgram from './../../assets/image/instgram (1).png'
import linkedin from './../../assets/image/linkedin.png'
import behance from './../../assets/image/behance (1).png'
import facebook from './../../assets/image/facebook (1).png'

export default function Hero() {
  return (
    <section className='Hero' id='Home'>
        <h1 className='title'>Hey !! Mario still here, But don’t forget that</h1>
        <p className='text'>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
        Branding, Digital Marketing, Web/App Development, Ui/Ux
        Content creation, Graphic design, Social media and More........
        So you can take a tour in our website, OR just Press Start :</p>
        <img className='brand' src={brandingpattren} alt="brandingpattren" />
        <img className='game' src={gameBoy} alt="gameBoy" />
        <div className='start-game'>
        <a href='https://focal-x.com/mario'className='start'>START</a>
        <img className='press' src={pressStart} alt="pressStart" />
        </div>
        <p className='copy'>© 2021 - 2022 focal X agency All Right Reserved</p>
        <div className="icon-hero">
          <a href="https://twitter.com/focal_x_agency" target='_blank'><img src={X} alt="x-social" /></a>
          <a href="https://www.instagram.com/focal.x.agency" target='_blank'><img src={instgram} alt="instgram" /></a>
          <a href="https://www.linkedin.com/company/focal-x-agency"target='_blank'><img src={linkedin} alt="linkedin" /></a>
          <a href="https://www.behance.net/focal-x-agency" target='_blank'><img src={behance} alt="behance" /></a>
          <a href="https://www.facebook.com/focal.x.agency/" target='_blank'><img src={facebook} alt="facebook" /></a>
        </div>
    </section>
  )
}
