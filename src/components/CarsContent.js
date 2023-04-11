import style from './CarsContent.module.css'
import cars from '../img/cars.jpg'
import car1 from '../img/car1.jpg'
import car2 from '../img/car2.jpg'
import car3 from '../img/car3.jpg'
import car4 from '../img/car4.jpg'
import car5 from '../img/car5.jpg'
import car6 from '../img/car6.jpg'
import car7 from '../img/car7.jpg'
const CarsContent = () => {
    return (
        <div className={style.content}>
            <div className={style.title}>
                <img src={cars} alt='cars' width='1920' height='1080' />
            </div>
            <div className={style.cars}>
                <img src={car1} alt='toyota-supra-1' width='1503' height='770' />
                <img src={car2} alt='tpyota-supra-2' width='1920' height='941' />
                <img src={car3} alt='silvia-S13' width='1897' height='903' />
                <img src={car4} alt='Nissan-R34' width='1920' height='901' />
                <img src={car5} alt='cars' width='2560' height='906' />
                <img src={car6} alt='Honda-S2000' width='1919' height='957' />
                <img src={car7} alt='BMW-M3' width='1920' height='990' />
            </div>
        </div>
    )
}

export default CarsContent