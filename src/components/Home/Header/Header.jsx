import { IconContainer, MainLogo } from '../../Common/Common'
import './Header.scss'


export const Header = () => {

    return (
        <div className="header">
            <TopBar/>
            <NavBar/>
        </div>
    )
}



const TopBar = () => {

    const links = [
        { id:0 , text:'Belgium', chevron: true },
        { id:1 , text:'Winter', chevron: false },
        { id:2 , text:'Events' , chevron: true },
        { id:3 , text:'Music' , chevron: false},
        { id:4 , text:'Foundation' , chevron: false },
        { id:5, text:'Store', chevron: false },
        { id:6, text:'NFT', chevron: false },
        { id:7 , text:'FAQ' , chevron: false },
        { id:8 , text:'More' , chevron: true }
    ]

    const social = [
        { id: 0, name:'Facebook'},        
        { id: 1, name:'Instagram'},
        { id: 2, name:'Twitter'},
        { id: 3, name:'Youtube'},
        { id: 4, name:'TikTok'}        
    ]
    
    return (
        <div className="TopBar">

            {/* Left Block */}
            <div className="TopBar-leftBlock">

                {/* Name */}
                <a href="" className="TopBar-link">
                    <MainLogo/>
                    <span className="Link-text">Tomorrowland</span>
                </a>

                {/* Navigation */}
                <nav className="TopBar-nav">
                    <ul className="TopBar-ul">
                        { links.map ( ({ id, text, chevron }) =>
                            <li key={id} className="TopBar-li">
                                <a className="TopBar-link" href="">
                                    <span className="Link-text">{text}</span>
                                    <span className={`TopBar-icon ${ chevron ? 'active' : ''}`}>
                                        <img src="assets/header/chevron.svg" alt="" className="Icon-chevron" />
                                    </span>
                                </a>
                                
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Social */}
                <ul className="TopBar-ul">
                    { social.map ( (social) => 
                        <li key={social.id} className="TopBar-li">
                            <a className='TopBar-link' href=""><IconContainer {...social}/></a>
                        </li>
                    )} 
                </ul>
            </div>

            {/* Right Block */}
            <div className="TopBar-rightBlock">
                <a href="" className="TopBar-link">
                    <span className="Link-text">My account</span>
                </a>
            </div>

        </div>
    )

}


const NavBar = () => {

    const section = [
        { id:0, name: 'Festival', symbol: false },
        { id:1, name: 'Dreamville', symbol: false },
        { id:2, name: 'Global Journey', symbol: false },
        { id:3, name: 'My tomorrowland', symbol: true }
    ]

    const language = [
        { id:0, type:'EN'},
        { id:1, type:'NL'},
        { id:2, type:'FR'},
    ]

    const subcategories = [
        { id:0, name: 'Welcome', symbol: false },
        { id:1, name: 'Practical', symbol: false },
        { id:2, name: 'Tickets', symbol: false },
        { id:3, name: 'Line-up', symbol: true },
        { id:4, name: 'Adscendo', symbol: true },
    ]



    return (
        <div className="NavBar">


            {/* Nav Bar Sections */}
            <div className="NavBar-sections">

                {/* Logo */}
                <a href="" className="Sections-link">
                    <span className="Link-text Link-logo">Tomorrowland <span className='Logo-highlight'>Belgium</span></span>
                </a>

                {/* Navigation */}
                <nav className="Sections-nav">
                    <ul className="Sections-ul ">
                        {section.map ( ({id, name}) =>
                            <li className='Sections-li Link-lineEffect light' key={id}>
                                <a href="" className="Sections-link">
                                    <span className="Link-text">{name}</span></a>
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Language */}
                <ul className="Sections-ul Sections-language">
                    {language.map ( ( {id,type} ) => 
                        <li className='Sections-link Language-link' key={id}>{type}</li>
                    )}
                </ul>
            </div>


            {/* Nav Bar Submenu */}
            <div className="NavBar-submenu">
                <nav className="Submenu-nav">
                    <ul className='Submenu-ul'>
                        {subcategories.map ( ( {id,name} ) => 
                            <li className='Submenu-li Link-lineEffect' key={id}>
                                <a className='Submenu-link' href="">
                                    <span className="Link-text">{name}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
                <button className='Submenu-button'>
                    <span className='Button-text'>Pre-Register Now</span>
                </button>
            </div>

        </div>
    )
}



