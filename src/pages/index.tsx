import { Intro } from "@/components/Main";
import { Faq } from "@/components/Main/Faq";
import { Photo } from "@/components/Main/Photo";
import { Translation } from "@/components/Main/Translation";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>라두두 한글패치</title>
      </Head>
      <Intro />
      <Photo />
      <Translation />
      <Faq />
    </>
  );
}
