"use client"
import { Box, Grid } from "@mui/material";
import LoopBar from "../components/LoopBar";
import LoopLogo from "../components/LandingPage/LoopLogo";
import AdvertiseButton from "../components/LandingPage/AdvertiseButton";
import AccessLocationsButton from "../components/LandingPage/AccessLocationsButton";
import Title from "@/components/LandingPage/Title";

export default function Home() {
  return (
    <Box>
      <LoopBar/>
      <Box
        mt={12}
        component="main"
      >
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} ml={2} justifyContent={'center'} alignItems={'center'}>
            <Title/>
          </Grid>

          <Grid item display={'flex'} justifyContent={'center'} my={3} xs={12}>
            <AdvertiseButton/>
            <AccessLocationsButton/>
          </Grid>

          <Grid item display={'flex'} xs={12} justifyContent={'center'} alignItems={'center'}>
            <LoopLogo/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
