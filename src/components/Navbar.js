import * as React from 'react'
import * as styles from "../style/global.module.css"
import * as navbar from "../style/navbar.module.css"
import logo from '../images/logo-2.png';
import { Link } from 'gatsby';

export default function Navbar(props){
    return(
        <section className={`${styles.containerFluid} ${styles.shadow} ${styles.bgWhite}`} >
            <nav className={`${navbar.navbar} ${styles.container}`}>
                <div className="brand">
                    <Link to={props.siteUrl}><img src={logo} alt="" /></Link>
                </div>
                <div className={`${navbar.navbar}`}>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                    <Link to='/request' className={styles.cta}>Request a Quote</Link>
                </div>
            </nav>
        </section>
    )
}