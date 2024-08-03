import styled from "styled-components";
import { Button } from "../../globalStyles";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 60px;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template:
    "ci" 1fr
    "names " 1fr
    "lastnames" 1fr
    "image" 1fr
    "state" 1fr
    "age " 1fr
    "last_sight_date" 1fr
    "last_sight_location" 1fr
    "status" auto
    "description" 200px
    "submit" 1fr
    / 100%;
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  @media (min-width: 1024px) {
    grid-template:
      "ci names lastnames image" 1fr
      "state age last_sight_date last_sight_location" 1fr
      "status status status status" 1fr
      "description description . ." 10rem
      "submit . . ." 1fr
      / 1fr 1fr 1fr 1fr;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "column"};
  justify-content: center;
  align-items: ${({ $direction }) =>
    $direction === "row" ? "center" : "flex-start"};
  gap: 10px;
  grid-area: ${({ $gridArea }) => $gridArea};
`;

export const Status = styled.div`
  margin-bottom: 10px;
  grid-area: ${({ $gridArea }) => $gridArea};

  div {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const SubmitButton = styled(Button)`
  grid-area: ${({ $gridArea }) => $gridArea};
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
`;
