import styled from "styled-components";

export const ReportContainer = styled.div`
  width: 100%;
  background-color: var(--secondary-bg-color);
  padding: 1rem;
  display: grid;
  grid-gap: 20px;
  grid-template:
    "photo" auto
    "data" auto
    "description" auto
    / 100%;
  @media (min-width: 700px) {
    grid-template:
      "photo data" auto
      "description description" auto
      / 60% 40%;
  }
  @media (min-width: 1024px) {
    grid-template:
      "photo data description" 100% / 40% 20% auto;
  }
`;

export const PersonPhoto = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  grid-area: photo;
`;

export const PersonData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-area: data;
`;

export const PersonDescription = styled.div`
  grid-area: description;
`;

export const RelatedPosts = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`