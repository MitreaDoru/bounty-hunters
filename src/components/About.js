import style from './About.module.css'
import silvia from '../img/about.jpg'
import location from '../img/Service-map.jpg'
const About = () => {
    return (
        <div className={style.about}>
            <div className={style.image}>

                <img src={silvia} alt='Silvia-S13' width='1920' height='941' />
            </div>
            <div className={style.location}>
                <h3>Where you can find us?</h3>
                <img src={location} alt='Service-location' width='693' height='964'></img>
            </div>
        </div>
    )
}

export default About