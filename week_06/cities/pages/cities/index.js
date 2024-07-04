import { cities } from "@/lib/data";
import Link from "next/link";
import styled from "styled-components";

const StyledHomepageLink = styled(Link)`
  color: #BF4F74;
  font-weight: bold;
`;
const StyledCityLink = styled(Link)`
  padding: 0 .25rem;
	margin: 0 -.25rem;
  	box-shadow: inset 0 0 0 0 #D65472;
  	transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
	color: #D65472;
  	
	&:hover {
    	color: white;
    	box-shadow: inset 100px 0 0 0 #D65472;
  	}
`;
const StyledUl = styled.ul`
 display : flex;
 flex-direction: column;
 gap: 0.2rem;

`;

export default function Cities() {
  return (
    <>
      <StyledHomepageLink href="/">Hompage</StyledHomepageLink>
      <StyledUl>
        {cities.map((city) => (
          <li key={city.id}><StyledCityLink href={`/cities/${city.slug}`}>{city.name}</StyledCityLink></li>
        ))}
      </StyledUl>
    </>
  );
}
