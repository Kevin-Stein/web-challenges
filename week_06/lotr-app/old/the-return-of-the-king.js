import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";
const result = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function BookThree() {

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
        alt="LOTR The Return of the King Book Cover"
        height={230}
        width={140}
      />
       <div>
        <Link href="./the-two-towers">previous</Link>
        <Link href="./volumes/the-fellowship-of-the-ring" hidden >next</Link>
      </div>
    </>
  );
}
