import { Intro } from "@/components/Main";
import { Faq } from "@/components/Main/Faq";
import { Photo } from "@/components/Main/Photo";
import { Translation } from "@/components/Main/Translation";

export default function Home() {
  return (
    <>
      <Intro />
      <Photo />
      <Translation />
      <Faq />
    </>
  );
}
