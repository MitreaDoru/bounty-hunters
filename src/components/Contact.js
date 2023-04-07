import style from './Contact.module.css'
import luci from '../img/Luci.jpg'
import ale from '../img/Ale.jpg'


const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={style.ale}>
                <img src={ale} alt='Ale' width='1920' height='986' />
                <div className={style.info}>
                    <p>Ale</p>
                    <p>Nr telefon: 666-0666</p>
                </div>
            </div>
            <div className={style.luci}>
                <img src={luci} alt='Luci' width='1920' height='1080' />
                <div className={style.info}>
                    <p>Lucifer</p>
                    <p>Nr telefon: 666-0666</p>
                </div>
            </div>
        </div>
    )
}

export default Contact