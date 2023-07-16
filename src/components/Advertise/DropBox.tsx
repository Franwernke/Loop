import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;

  .image {
    width: 100% !important;
    position: unset !important;
    height: 80px !important;
    color: black !important;
  }
`;

function DropBox({setImageUrl}: {setImageUrl: (file: string) => void}) {
  const [files, setFiles] = useState<(File & {preview: string})[]>([]);
  const {getRootProps, getInputProps} = useDropzone({
    maxFiles: 1,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: acceptedFiles => {
      setImageUrl(URL.createObjectURL(acceptedFiles[0]));
      console.log('acceptedFiles', URL.createObjectURL(acceptedFiles[0]))
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <Image
        alt={'image preview'}
        src={file.preview}
        width={400}
        height={250}
      />
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Box 
      display={'flex'} 
      alignItems={'center'} 
      justifyContent={'center'} 
      flexDirection={'column'} 
      bgcolor={'grey'} 
      py={3}
      mt={2}
    >
      <Box {...getRootProps()}>
        <input {...getInputProps()} />
        {files.length === 0 ?
          <StyledBox>
            <Image
              src="/imageIcon.svg"
              alt="Image Icon"
              fill
              className="image"
            />
            <Typography color={'white'}>
              Arraste sua propaganda aqui
            </Typography>
          </StyledBox>
          :
          <Box>
            <Typography color={'white'}>
              Clique aqui para escolher outra imagem
            </Typography>
            <Typography color={'white'}>
              Imagem escolhida:
            </Typography>
          </Box>
        }
      </Box>
      <Box height={'100%'}>
        {thumbs}
      </Box>
    </Box>
  );
}

export default DropBox