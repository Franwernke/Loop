import styled from "styled-components";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`
  padding: 22px 47px;
  font-size: 12px;
`

export const BlackButton = styled(StyledButton)`
  background-color: black;
  color: white;
  border: 2px white solid;
`;

export const ButtonRed = styled(StyledButton)`
  background-color: #EE4848;
  color: white;
  margin-right: 30px;
  :focus {
    background-color: #FF5050;
  }
`;
