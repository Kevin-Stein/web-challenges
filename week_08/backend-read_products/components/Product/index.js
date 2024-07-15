import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import styled from "styled-components";

export const StyledReview = styled.div`
display: flex ;
flex-direction: column;
`;
export const StyledParagraph = styled.p`
margin:0.5rem;
`;
export const StyledH5 = styled.h5`
margin: 0;
`;
export const StyledRating = styled.h5`
margin: 0.5rem;
display: flex;
justify-content: end;
`;


export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
console.log(data)
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews && data.reviews.length > 0 ? (
        data.reviews.map((review) => (
          <StyledReview key={review._id}>
            <StyledH5>Review: {review.title}</StyledH5>
            <StyledParagraph>{review.text}</StyledParagraph>
            <StyledRating>Rating: {review.rating}/5⭐</StyledRating>
          </StyledReview>
        ))
      ) : (
        <StyledParagraph>No reviews available.</StyledParagraph>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
