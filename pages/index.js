import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
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
    </Layout>
  );
}
