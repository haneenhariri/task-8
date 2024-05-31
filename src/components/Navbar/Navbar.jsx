import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const MenuItem =[
        {
            titel: "Home",
            url:"#Home",
            cName:"nav-link"
        },
        {
            titel: "Services",
            url:"#About",
            cName:"nav-link"
        },
        {
            titel: "Portfolio",
            url:"#Home",
            cName:"nav-link"
        },
        {
            titel: "Clients & Partners",
            url:"#Home",
            cName:"nav-link"
        },
        {
            titel: "X Academy",
            url:"#Home",
            cName:"nav-link"
        },
        {
            titel: "About Us",
            url:"#Home",
            cName:"nav-link"
        },
        {
            titel: "Let`s Talk",
            url:"#Home",
            cName:"nav-link"
        },


    ]
    const[click, setClick]= useState(false);
    const handelClick = () =>setClick(!click);
    return (
        <nav className='Nav-bar'>
            <div className='logo'>
            <img src="./../../public/image/logo.svg" alt=""/>
            <p>Digital marketing agency</p>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItem.map((item,index) =>{
                    return(
                        <li key={index} className="nav-item">
                        <a className={item.cName} href={item.url} onClick={handelClick}>{item.titel}</a>
                        </li>
                    )
                })}
            </ul>
            <div className='nav-icon' onClick={handelClick}>
                <i className={click ? 'bx bx-x-circle' : 'bx bx-menu'}></i>
            </div>
        </nav>
  )
}
