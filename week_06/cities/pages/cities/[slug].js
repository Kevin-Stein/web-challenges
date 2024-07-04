import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const StyledBackLink = styled(Link)`
  color: #BF4F74;
  font-weight: bold;
`;
const StyledPrevNextLink= styled(Link)`
  display: inline-block;
  color: #BF4F74;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
  width: 100%;
  text-decoration: none;
  
`;
const StyledDiv = styled.div`
display:flex;
  
`;

export default function City() {
    const router = useRouter();
    const {slug} = router.query;
    
    
    if (!router.isReady){
        return null;
    }
    
    const cityIndex = cities.findIndex((ele) => ele.slug === slug);
    

    const city = cities[cityIndex];
    const nextCity = cities[cityIndex + 1];
    const previousCity = cities[cityIndex - 1];


    return (
      <>
      <StyledBackLink href="/cities">← Back</StyledBackLink>
       <h1>{city.name}</h1>
       <h2>Country: {city.country}</h2>
       <h3>Population: {city.population}</h3>
       <p>{city.description}</p>
       <br></br>
      <StyledDiv>
           {previousCity ? (
            <div>
              <StyledPrevNextLink href={`/cities/${previousCity.slug}`}>
                ← Previous City: {previousCity.name}
              </StyledPrevNextLink>
            </div>
          ) : null}
          {nextCity ? (
            <div>
              <StyledPrevNextLink href={`/cities/${nextCity.slug}`}>
                Next City: {nextCity.name} →
              </StyledPrevNextLink>
            </div>
          ) : null}
      </StyledDiv>
      </>
    );
  }