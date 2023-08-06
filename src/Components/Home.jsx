import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import vedio from "../Styles/vedio.mp4";
import phonePhoto from "../Assests/phone.webp";

const motion = keyframes`  
  from {transform: scale(1.1)}  
`;

const Home = () => {
  const upAnimation = `${motion} infinite 4s linear`;

  return (
    <>
      <Box bgColor={"#0b1426"} objectFit={"cover"} w={"cover"} className="home">
        <video className="videoTag" autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
        </video>
        <Heading
          color={"white"}
          position={"absolute"}
          textColor={"white"}
          top={100}
          w={"100%"}
          h={"109vh"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"rgba(0,0,0,.1)"}
        >
          <VStack fontSize={"4rem"} textShadow={"1.5px 1.5px #bb3e03"}>
            <Box>The World's Leading </Box>
            <Box>Cryptocurrency Platform</Box>
          </VStack>
        </Heading>
      </Box>
      <Box
        bgColor={"#0b1426"}
        h={"130vh"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Image src={phonePhoto} h={"100vh"} />
        <Box w={"50%"}>
          <Text color={'#1199fa'} fontSize={'1.5rem'} fontWeight={'500'} >CRYPTO EARN</Text>
          <Text
            color={"white"}
            fontSize={"4rem"}
            fontWeight={"600"}
          >
            Buy Bitcoin and other crypto at true cost.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
