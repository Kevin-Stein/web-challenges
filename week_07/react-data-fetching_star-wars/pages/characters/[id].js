import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
const fetcher = async (url) => {
  const response = await fetch(url);

 
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
  
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();

};
/* const fetcher = (...args) => fetch(...args).then(res => res.json()) */
export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher,
    { refreshInterval: 5000 }
  );
  console.log(data);
  if (isLoading) return <h1>Failed to load. Please try again later</h1>;
  if (error) return <h1>{error.status}</h1>;
  console.log(data);
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
