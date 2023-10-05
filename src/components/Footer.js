import * as React from 'react'
import * as styles from "../style/global.module.css"
import logo from '../images/logo-2.png';
import * as footer from "../style/footer.module.css"
import { Link } from 'gatsby'
import { FiPhoneCall,FiMapPin } from "react-icons/fi";
import { BsFacebook,BsYoutube,BsLinkedin,BsInstagram,BsEnvelope } from "react-icons/bs";

export default function Footer(props){
    return(
        <footer className={`${styles.containerFluid} ${styles.bgPrimary}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.textCenter}  ${footer.logo}`}>
                    <Link to={props.siteUrl}><img src={logo} alt="" /></Link>
                </div>
                <div className={`${footer.widgets}`}>
                    <div className={`${footer.col} ${styles.textWhite}`}>
                        <h2>{props.title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat libero quia laboriosam itaque aliquam quod cum, corrupti ea, soluta</p>
                        <div  className={`${footer.icons}`}>
                            <Link to="/facebook"><BsFacebook/></Link>
                            <Link to="/youtube"><BsYoutube/></Link>
                            <Link to="/linkedin"><BsLinkedin/></Link>
                            <Link to="/instagram"><BsInstagram/></Link>
                        </div>
                    </div>
                    <div className={`${footer.col} ${styles.textWhite}`}>
                        <h2>Get in Touch</h2>
                        <ul>
                            <li>
                                <span className={styles.textSecondary}><FiPhoneCall/></span> {props.phone}
                            </li>
                            <li>
                                <span className={styles.textSecondary}><BsEnvelope/></span>  {props.email}
                            </li>
                            <li>
                                <span className={styles.textSecondary}> <FiMapPin/></span>   7275 nw 68th Street, Bay #9 Miami, FL 33166
                            </li>
                        </ul>
                    </div>
                    <div className={`${footer.col} ${styles.textWhite}`}>
                        <h2>Useful Links</h2>
                        <ul>
                            <li>
                                <Link className={styles.textWhite} to='/Engine'>Engine Parts</Link>
                            </li>
                            <li>
                                <Link className={styles.textWhite} to='/Ground'>Ground Engaging Tools</Link>
                            </li>
                            <li>
                                <Link className={styles.textWhite} to='/Undercrarriage'>Undercrarriage Parts</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${footer.col} ${styles.textWhite}`}>
                        <h2>Get free Estimate</h2>
                        <p>Fill Out the form below and request a free and secure quote.</p>
                        <Link className={styles.cta}>Request A Quote</Link>
                    </div>
                </div>
            </div>
            <div className={`${footer.copyright}`}>
                <p>copyright &copy; 2023</p>
            </div>
        </footer>
    )
}