import './Hero.css'

export default function Hero() {
  return (
    <section className='Hero' id='Home'>
        <h1 className='title'>Hey !! Mario still here, But don’t forget that</h1>
        <p className='text'>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
        Branding, Digital Marketing, Web/App Development, Ui/Ux
        Content creation, Graphic design, Social media and More........
        So you can take a tour in our website, OR just Press Start :</p>
        <img className='brand' src="../../../public/image/brandingpattren.png" alt="" />
        <img className='game' src="../../../public/image/gameBoy-min.png" alt="" />
        <div className='start-game'>
        <a href='https://focal-x.com/mario'className='start'>START</a>
        <img className='press' src="../../../public/image/pressStart.svg" alt="" />
        </div>
        <p className='copy'>© 2021 - 2022 focal X agency All Right Reserved</p>
        <div className="icon-hero">
          <a href="https://twitter.com/focal_x_agency" target='_blank'><img src="../../../public/image/x-social.png" alt="" /></a>
          <a href="https://www.instagram.com/focal.x.agency" target='_blank'><img src="../../../public/image/instgram (1).png" alt="" /></a>
          <a href="https://www.linkedin.com/company/focal-x-agency"target='_blank'><img src="../../../public/image/linkedin.png" alt="" /></a>
          <a href="https://www.behance.net/focal-x-agency" target='_blank'><img src="../../../public/image/behance (1).png" alt="" /></a>
          <a href="https://www.facebook.com/focal.x.agency/" target='_blank'><img src="../../../public/image/facebook (1).png" alt="" /></a>
        </div>
    </section>
  )
}
