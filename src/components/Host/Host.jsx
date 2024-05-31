import './Host.css'

export default function Host() {
  const cardsH =[
    {
      id:1,
      cName:"h-card orang",
      title:"Basic",
      text:"for very small businesses and freelancers",
      cdis:"discount",
      titleD:"$2.5/mo",
      list1:"Disk Space: 500 M.B",
      list2:"Bandwidth: 500 G.B",
      button:"You will have 1 Gift "
    },
    {
      id:2,
      cName:"h-card violet",
      title:"Pro",
      text:"for Individuals that need sharing vlogs or need huge portfolio.",
      cdis:"discount",
      titleD:"$5/mo",
      list1:"Disk Space: 3000 M.B",
      list2:"Bandwidth: 3 TERA",
      button:"1 Gift per/mo for year "
    },
    {
      id:3,
      cName:"h-card green",
      title:"Business",
      text:"or Team that need sharing and reporting",
      cdis:"discount",
      titleD:"$8/mo",
      textD:"5% discount during 2022",
      list1:"Disk Space: 5000 M.B",
      list2:"Bandwidth: 5 TERA",
      button:"3 Gifts per/mo for year "
    },
    {
      id:4,
      cName:"h-card blue",
      title:"Basic",
      text:"for very small businesses and freelancers",
      cdis:"discount",
      titleD:"$12/mo",
      textD:"8% discount during 2022",
      list1:"Disk Space: 10000 M.B",
      list2:"Bandwidth: 10 TERA",
      button:"Just Call Us"
    },
  ]
  return (
    <section className='host'>
        <h2>Hosting Pricing</h2>
        <div className="h-cards">
          {cardsH.map((card,index) =>{
            return(
            <div key={index} className={card.cName}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className={card.cdis}>
              <h3>{card.titleD}</h3>
              <p>{card.textD}</p>
              </div>
              <ul>
                <li>{card.list1}</li>
                <li>{card.list2}</li>
                <li>SubDomains: Unlimited</li>
                <li>Parked Domains: Unlimited</li>
                <li>E-mail Accounts: Unlimited</li>
                <li>Cpanel (control panel): Yes</li>
                <li>Money Back Guarantee: 14 Days</li>
              </ul>
              <button>{card.button}</button>
            </div>
            )
          })}

        </div>
        <p className='h-p'>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.
Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
    </section>
  )
}
