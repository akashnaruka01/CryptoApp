import { Box, Button, Center, HStack,Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import cryptoImg from "../Assests/crypto.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  return (
    <>
    <hr></hr>
      <Box w="full"  p="4" h="22vh" bgColor={"#0b1426"}  >
        <Stack h={"70%"} color={"white"} justifyContent={""} p={"-10"} direction={['column','row']}>
          <HStack w={"auto"} p={"2"}>
            <Image src={cryptoImg} h={"20"} objectFit={"contain"} />
            <Text
              letterSpacing={"widest"}
              lineHeight={"150%"}
              fontSize={"1.5rem"}
              textAlign={"center"}
              fontWeight={"500"}
            >
              Rookie.Crypto
            </Text>
          </HStack>
          <HStack w={'60%'} bgColor={"whiteAlpha.900"} m={"4"} h={'0.1'} alignSelf={'center'} >
            <hr />
          </HStack>

          <HStack p={"4"}>
            <Button variant={"link"}>
              <a href="https://github.com/akashnaruka01">
                <AiFillGithub size={"40"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://www.linkedin.com/in/akash-singh-78897620b/">
                <AiFillLinkedin size={"40"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://www.instagram.com/">
                <AiFillInstagram size={"40"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://www.facebook.com">
                <AiFillFacebook size={"40"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://web.telegram.org/">
                <BiLogoTelegram size={"40"} />
              </a>
            </Button>
          </HStack>
        </Stack>
          <Text color={"white"} fontSize={'1.3rem'}  px={'4'} >Copyright © 2023 Rookie.Crypto. All rights reserved.</Text>
         
      </Box>
    </>
  );
};

export default Footer;
