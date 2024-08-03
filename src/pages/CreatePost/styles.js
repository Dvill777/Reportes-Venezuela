import styled from "styled-components";
import { Button } from "../Home/styles";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 60px;
`;

export const Form = styled.form`
  margin-top: 1rem;
  display: grid;
  grid-template:
    "ci names lastnames image" 1fr
    "state age last_sight_date last_sight_location" 1fr
    "status status status status" 1fr
    "description description . ." 10rem
    "submit . . ." 1fr
    / 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "column"};
  justify-content: center;
  align-items: ${({ $direction }) =>
    $direction === "row" ? "center" : "flex-start"};
  gap: 10px;
  margin-bottom: 10px;
  grid-area: ${({ $gridArea }) => $gridArea};
`;

export const Status = styled.div`
  margin-bottom: 10px;
  grid-area: ${({ $gridArea }) => $gridArea};

  div {
    margin-top: 10px;
    display: flex;
    gap: 40px;
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
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
`

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 2px solid var(--accent-color);
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
`