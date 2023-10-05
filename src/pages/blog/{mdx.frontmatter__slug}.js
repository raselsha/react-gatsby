import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import * as styles from '../../style/global.module.css'

export default function Posts({data, children}){
    return(
        <Layout>
            <section className={styles.container}>
                <h1>{data.mdx.frontmatter.title}</h1>
                {children}
            </section>
        </Layout>
    )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
    }
  }
`

export const Head = ({data})=><Seo title={data.mdx.frontmatter.title} />