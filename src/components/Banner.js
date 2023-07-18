import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'Green Spirit'
    return(
        <div className="banner-info">
            <img src={logo} alt='Logo génépi' className='logo-banner' />
            <h1 className='banner-titre'>{title}</h1> 
    </div>
    )

}

export default Banner