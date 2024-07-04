import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";
const result = volumes.find(({ slug }) => slug === "the-two-towers");

export default function BookTwo() {

  return (
    <>
      <Link href="/">🔙 All Volumes</Link>
      <h1>{result.title}</h1>
      <p>{result.description}</p>
      <ul>
        <li>
          {result.books[0].ordinal}: {result.books[0].title}
        </li>
        <li>
          {result.books[1].ordinal}: {result.books[1].title}
        </li>
      </ul>
      <Image
        src={result.cover}
        alt="LOTR The Two Towers Book Cover"
        height={230}
        width={140}
      />
       <div>
        <Link href="./the-fellowship-of-the-ring">previous</Link>
        <Link href="./the-return-of-the-king">next</Link>
      </div>
    </>
  );
}
