import {
  Box,
  Button,
  Center,
  HStack,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
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
      <Box w="full" p={"4"} h="22vh" bgColor={"#0b1426"} className="footerBox">
        <Stack
          className="footerH"
          h={"70%"}
          color={"white"}
          justifyContent={"space-between"}
          direction={["column", "row"]}
        >
          <HStack w={"auto"} className="footerPart1" >
            <Image
              src={cryptoImg}
              h={ "20"}
              objectFit={"contain"}
            />

            <Text
              letterSpacing={"widest"}
              lineHeight={"150%"}
              fontSize={"1.5rem"}
              textAlign={"center"}
              fontWeight={"500"}
              className="rookieTxt"
            >
              Rookie.Crypto
            </Text>
          </HStack>
          <HStack
            className="footerLine"
            w={["0%", "container", "30%", "40%"]}
            bgColor={"whiteAlpha.900"}
            m={"4"}
            h={"0.1"}
            alignSelf={"center"}
          ></HStack>

          <HStack p={"4"} w={"auto"} justifyContent={'center'} >
            <Button variant={"link"}>
              <a href="https://github.com/akashnaruka01">
                <AiFillGithub size={"35"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://www.linkedin.com/in/akash-singh-78897620b/">
                <AiFillLinkedin size={"35"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://www.instagram.com/prabhuu_000001/">
                <AiFillInstagram size={"35"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://www.facebook.com">
                <AiFillFacebook size={"35"} />
              </a>
            </Button>
            <Button variant={"link"}>
              <a href="https://web.telegram.org/">
                <BiLogoTelegram size={"35"} />
              </a>
            </Button>
          </HStack>
        </Stack>
        <Text
        className="copyright"
          color={"white"}
          fontSize={["0.8rem", "0.9rem", "1.2rem"]}
          px={"4"}
        >
          Copyright © 2023 Rookie.Crypto. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
