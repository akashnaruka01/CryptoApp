import React from "react";
import { Button, HStack, Image, Text, background } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cryptoImg from "../Assests/crypto.png";

const Header = () => {
  return (
    <HStack
      w={"full"}
      position={"sticky"}
      zIndex={10}
      top={0}
      p="4"
      bgColor={"#061121"}
      shadow="base"
      justifyContent={"space-between"}
    >
      <HStack>
        <Image src={cryptoImg} h={"20"} objectFit={"contain"} />
        <Text
          style={{
            color: "white",
            font: "500 2.3rem white",
          }}
        >
          Rookie.Crypto
        </Text>
      </HStack>
      <HStack>
        <Button
          bgColor={"#061121"}
          fontWeight={"600"}
          fontSize="1.2rem"
          color={"white"}
          colorScheme="Whatsapp"
        >
          <Link to="/">Home</Link>
        </Button>
        <Button
          color={"white"}
          bgColor={"#061121"}
          fontWeight={"600"}
          fontSize="1.2rem"
          colorScheme="Whatsapp"
        >
          <Link to="/coins">Coins</Link>
        </Button>
        <Button
          color={"white"}
          bgColor={"#061121"}
          fontWeight={"600"}
          fontSize="1.2rem"
          colorScheme="Whatsapp"
        >
          <Link to="/exchange">Exchange</Link>
        </Button>
        <Button
          color={"white"}
          bgColor={"#061121"}
          fontWeight={"600"}
          fontSize="1.2rem"
          colorScheme="Whatsapp"
        >
          <Link to="/"> Contact Us</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
