'use client'
import { Box, Button, CircularProgress, Typography } from "@mui/material"
import LoopBar from "../LoopBar"
import { useState } from "react"
import { saveRequest } from "./data"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Form from "./Form"
import Link from "next/link"
import { BlackButton } from "../LandingPage/styled"

const FormStatus = {
  FILLING: 'FILLING',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function Advertise() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState(FormStatus.FILLING)

  const createRequest = async () => {
    setStatus(FormStatus.LOADING);
    try {
      await saveRequest(name, email, description, imageUrl);
      setStatus(FormStatus.DONE);
    } catch (e) {
      console.error(e);
      setStatus(FormStatus.ERROR)
    }
  };

  return (
    <Box mt={10}>
      <LoopBar/>
      {status === FormStatus.FILLING &&
        <Form 
          setName={setName}
          setDescription={setDescription}
          setEmail={setEmail}
          setImageUrl={setImageUrl}
          createRequest={createRequest}
        />
      }
      {status === FormStatus.LOADING &&
        <Box height={'60vh'} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <CircularProgress />
        </Box>
      }
      {status === FormStatus.DONE &&
        <Box height={'60vh'} width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Typography fontSize={'48px'}>
            <CheckCircleIcon color={'success'} fontSize="large"/>
          </Typography>
          <Box color={'white'} textAlign={'center'} px={2}>
            <Typography variant={'h5'} color={'white'} mr={0.5} fontFamily={'Montserrat'} fontWeight={900}>
              Pronto!
            </Typography>
            <Typography mt={2} variant={'h5'} color={'white'} mr={0.5} fontFamily={'Montserrat'} fontWeight={900}>
              Agora, nossa equipe analisará o seu pedido e entraremos em contato pelo email 
              que você registrou aqui.
            </Typography>
            <Typography mt={2} variant={'h5'} color={'white'} mr={0.5} fontFamily={'Montserrat'} fontWeight={900}>
              Obrigado por confiar na
            </Typography>
            <Typography variant={'h3'} color={'#FFBD3E'} mr={0.5} fontFamily={'Montserrat'} fontWeight={900}>
              Loop
            </Typography>
          </Box>
          <Box mt={5}>
            <Link href={'/'}>
              <BlackButton>
                Voltar a Home
              </BlackButton>
            </Link>
          </Box>
        </Box>
      }
    </Box>
  )
}

export default Advertise