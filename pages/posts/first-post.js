import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout home>
      <Head>
        <title>My first post!</title>
      </Head>

      <h1>First post</h1>
      <h2>
        <Link href="/">Go back home</Link>
      </h2>
    </Layout>
  );
}
