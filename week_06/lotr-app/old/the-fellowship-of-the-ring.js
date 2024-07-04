import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

const result = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);
export default function BookOne() {
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
        alt="LOTR The Fellowship of the Ring Book Cover"
        height={230}
        width={140}
      />
      <div>
        <Link href="./volumes/the-fellowship-of-the-ring" hidden >previous</Link>
        <Link href="./the-two-towers">next</Link>
      </div>
    </>
  );
}
