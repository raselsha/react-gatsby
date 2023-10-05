import * as React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import Seo from '../components/Seo'
import * as styles from '../style/global.module.css'

export default function Blog({ data }){
    console.log(data)
    return(
        <Layout>
            <section className={styles.container}>
                <h1>Blog</h1>
                <ul>
                    {
                      data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                        <h2>
                          <Link to={`/blog/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                          </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                      </article>
                      ))
                    }
                    </ul>
            </section>
        </Layout>
    )
}
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date
          title
          slug
        }
        id
      }
    }
  }
`
export const Head = ()=> <Seo title="Blog" />