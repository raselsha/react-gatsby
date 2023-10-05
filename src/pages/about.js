import * as React from 'react'
import Seo from '../components/Seo'
import * as styles from "../style/global.module.css"
import Layout from '../components/Layout'

export default function About(){
    return(
        <Layout>
            <section className={styles.container}>
                <h1><span className={styles.textSecondary}>About</span> Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus officiis vel sunt aliquam a adipisci, alias earum recusandae perferendis iure repellendus repudiandae eveniet laborum dignissimos dolor numquam quisquam. Et?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus officiis vel sunt aliquam a adipisci, alias earum recusandae perferendis iure repellendus repudiandae eveniet laborum dignissimos dolor numquam quisquam. Et?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus officiis vel sunt aliquam a adipisci, alias earum recusandae perferendis iure repellendus repudiandae eveniet laborum dignissimos dolor numquam quisquam. Et?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus officiis vel sunt aliquam a adipisci, alias earum recusandae perferendis iure repellendus repudiandae eveniet laborum dignissimos dolor numquam quisquam. Et?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minus officiis vel sunt aliquam a adipisci, alias earum recusandae perferendis iure repellendus repudiandae eveniet laborum dignissimos dolor numquam quisquam. Et?</p>
            </section>
        </Layout>
    )
}

export const Head = ()=> <Seo title="About page" />