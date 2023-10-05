import * as React from 'react'
import TopBar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import { useStaticQuery, graphql } from 'gatsby'

export default function Layout({children}){
    const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
                    phone
                    title
                    email
                    siteUrl
                }
            }
        }
    `)
    return(
        <main>
            <TopBar phone={data.site.siteMetadata.phone} email={data.site.siteMetadata.email} />
            <Navbar siteUrl={data.site.siteMetadata.siteUrl} />
            {children}
            <Footer title={data.site.siteMetadata.title} phone={data.site.siteMetadata.phone} email={data.site.siteMetadata.email} siteUrl={data.site.siteMetadata.siteUrl} />
        </main>
    )
} 