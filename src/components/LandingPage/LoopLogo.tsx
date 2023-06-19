import { Box } from "@mui/material";
import Image from 'next/image';
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

function LoopLogo() {
  return (
    <Box mt={1} mx={2}>
      <StyledBox>
        <Image
          src="/Logo.svg"
          alt="Loop Logo"
          fill
          className="image"
        />
      </StyledBox>
    </Box>
  )
}

export default LoopLogo