import './Services.css'
import brand from './../../assets/image/brandingOrange.png'
import marketing from './../../assets/image/markiting.png'

export default function Services() {
  const cards = [
    {
      id :1,
      title:"Branding",
      tName:"brand-b",
      text:"It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company.",
      titleH:"In focal X agency, we provide:",
      titelM:"We walk with you from A to Z.",
      img:brand,
      cName:"card card-b"
    },
    {
      id:2,
      title:"Marketing",
      tName:"mark-h",
      text:"Talk to your customers and tell them you and your company`s story through us the way you want.Let us plan the content that will bring your audience closer to you.",
      titleH:"In our marketing agency, we provide:",
      img:marketing,
      cName:"card card-m"
    }
  ]
  return (
    <section className='serv'id='About'>
      <h2>Our Services</h2>
      <div className="cards">
        {cards.map((card,index)=>
        {
          return(     
          <div key={index} id={card.id} className={card.cName} >
          <h3 className={card.tName}>{card.title}</h3>
          <p>{card.text}</p>
          <h3>{card.titleH}</h3>
          <ul>
              <li>Visual identity design.</li>
              <li>Define Brand Identity.</li>
              <li>Define Brand personality.</li>
              <li>Building Your brand strategy.</li>
              <li>Market research and competitors study.</li>
          </ul>
          <h3>{card.titelM}</h3>
          <img className='card-img' src={card.img} alt="" />
          </div>
          );
        })}


      </div>
    </section>
  )
}
