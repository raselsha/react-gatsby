import * as React from 'react'
import * as styles from "../style/global.module.css"
import * as slider from "../style/slider.module.css"
import baner from '../images/baner.png'; 
import slide from '../images/slide.png'; 
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export default function Slider(){
    return(
        <section className={`${styles.containerFluid} ${slider.slider}`} style={{backgroundImage:`url(${baner})`}}>
            <div className={`${slider.overlay}`}>
                <div className={`${styles.container} ${slider.box}`}>
                    <div className={`${slider.title}`}>
                        <h1 className={`${styles.textWhite}`}><span className={`${styles.textSecondary}`}>GROW</span> YOUR BUSINESS <span className={`${styles.textSky}`}>WITH ANNCAR</span></h1>
                        <p className={`${styles.textWhite}`}>HIGH QUALITY HEAVY EQUIPMENT SPARE PARTS SUPPLIER</p>
                    </div>
                    <div className={`${slider.slides} ${styles.textCenter}`}>
                        <swiper-container  navigation="false"  pagination="true" scrollbar="false" autoplay="true" slides-per-view="1" speed="500" loop="true" css-mode="true">
                            <swiper-slide>
                                <img src={slide} alt="" width={450} />
                            </swiper-slide>
                            <swiper-slide>
                            <img src={slide} alt=""  width={450} />
                            </swiper-slide>
                            <swiper-slide>
                            <img src={slide} alt="" width={450} />
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </div>
            </div>
        </section>
    )
}