import style from "./HomeContent.module.css"
import logo from '../img/logo.jpg'
import sedinta from '../img/home-sedinta.jpg'
import plecare from '../img/home3.jpg'
import alimentare from '../img/home2.jpg'
import formatie from '../img/home1.jpg'
import coada from '../img/home4.jpg'
const HomeContent = () => {
    return (
        <div className={style.home}>
            <div className={style.title}>
                <img src={logo} alt="logo" width='854' height='424' />
                <div className={style.meeting} >
                    <img src={sedinta} alt="sedinta" width='2560' height='912' />
                </div>
            </div>
            <div className={style.content}>
                <img src={plecare} alt="plecare" width='1920' height='1080' />
                <img src={alimentare} alt="alimentare" width='1920' height='1080' />
                <img src={formatie} alt="formatie" width='1920' height='1080' />
                <img src={coada} alt="formatie" width='1483' height='882' />
            </div>
        </div>
    )
}

export default HomeContent