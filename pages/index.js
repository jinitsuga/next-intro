import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// console.log(path.join(process.cwd(), "posts"));
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Judy. Arguably the best character in Night City. Braindance
          techie, and Mox member.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
