import * as React from 'react'
import * as styles from "../style/global.module.css"
import * as topbar from "../style/topbar.module.css"
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

export default function TopBar(props){
    return(
        <section className={`${styles.containerFluid} ${styles.bgPrimary} ${styles.textWhite}`}>
            <div className={`${styles.container} `}>
                <div className={` ${topbar.box}`}> <span><FiPhoneCall /></span>  {props.phone} <span>|</span> <span><BsEnvelope /></span> {props.email} </div>
            </div>
        </section>
    )
}