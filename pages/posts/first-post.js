import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>My first post!</title>
      </Head>

      <h1>First post</h1>
      <h2>
        <Link href="/">Go back home</Link>
      </h2>
    </div>
  );
}
