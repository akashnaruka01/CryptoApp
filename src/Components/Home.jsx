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
import vedio from "../Assests/vedio.mp4";
import phonePhoto from "../Assests/phone.webp";
import phonePhoto2 from "../Assests/phone2.webp";

const motion = keyframes`  
  from {transform: scale(1.1)}  
`;

const Home = () => {
  const upAnimation = `${motion} infinite 2s alternate`;

  return (
    <>
      <Box
        bgColor={"#0b1426"}
        objectFit={"cover"}
        w={"cover"}
        className="home"
        pos={"relative"}
      >
        <video className="videoTag" autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
        </video>
        <Heading
          color={"white"}
          position={"absolute"}
          top={0}
          w={"100%"}
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"rgba(0,0,0,.2)"}
          textShadow={"1px 1px #a2d2ff, 1px 1px #a2d2ff"}
        >
          <VStack fontSize={"4rem"}>
            <Box className="vedioTxt">The World's Leading </Box>
            <Box className="vedioTxt" textAlign={"center"}>Cryptocurrency Platform</Box>
          </VStack>
        </Heading>
      </Box>
      <Box
        className="cryptoEarn"
        bgColor={"#0b1426"}
        h={"100vh"}
        display={"flex"}
        flexDirection={["column", "row"]}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Image
          src={phonePhoto}
          h={"80vh"}
          className="home2Photo"
          animation={upAnimation}
        />
        <Box w={['80%',"50%"]}>
          <Text
            className="home2heading"
            color={"#1199fa"}
            fontSize={"1.5rem"}
            fontWeight={"500"}
          >
            CRYPTO EARN
          </Text>
          <Text
            className="home2txt"
            color={"white"}
            fontSize={"3.5rem"}
            fontWeight={"600"}
          >
            Buy Bitcoin and other crypto at true cost.
          </Text>
        </Box>
      </Box>
      <Box
        className="cryptoEarn"
        bgColor={"#0b1426"}
        h={"100vh"}
        display={"flex"}
        flexDirection={["column-reverse"  , "row"]}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box w={['80%',"50%"]} >
          <Text
            className="home2heading"
            color={"#1199fa"}
            fontSize={"1.5rem"}
            fontWeight={"500"}
          >
            OUR VISION
          </Text>
          <Text
            className="home2txt"
            color={"white"}
            fontSize={"3.5rem"}
            fontWeight={"600"}
          >
            Cryptocurrency in Every Wallet™
          </Text>
        </Box>
        <Image src={phonePhoto2} h={"80vh"} className="home2Photo" />
      </Box>
    </>
  );
};

export default Home;
