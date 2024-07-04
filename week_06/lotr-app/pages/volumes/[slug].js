import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";


export default function VolumenDetail() {
    const router = useRouter();
    console.log("router :", router.query)
    const {slug} = router.query;
      const result = volumes.find(( ele ) => ele.slug === slug);
      const currentIndex = volumes.findIndex(( ele ) => ele.slug === slug);
      console.log(result)


if (!result){
    return null;
}


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
        <Image src={result.cover}
          alt={result.title}
          height={230}
          width={140}/>
         <br></br>
      <Link
      hidden={currentIndex <= 0 ? true: false}
        href={
          currentIndex <= 0
            ? router.asPath
            : "/volumes/" + volumes[currentIndex - 1].slug
        }
      >
        Previous
      </Link>
      <br></br>
      <Link
      hidden={currentIndex >= volumes.lenght ? true: false}
        href={
          currentIndex >= volumes.length - 1
            ? router.asPath
            : "/volumes/" + volumes[currentIndex + 1].slug
        }
      >
        Next
      </Link>
      </>
    );
  }
        