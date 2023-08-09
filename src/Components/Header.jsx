import React, { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  MenuItem,
  MenuList,
  IconButton,
  Menu,
  Show,
  MenuButton,
  Hide,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cryptoImg from "../Assests/crypto.png";
import "../Styles/responsive.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const btnProp = {
    color: "white",
    padding: "10px",
    fontSize: "1.2rem",
  };

  return (
    <HStack
      w={"full"}
      position={"sticky"}
      zIndex={10}
      top={0}
      p="4"
      bgColor={"#061121"}
      shadow={"base"}
      justifyContent={"space-between"}
    >
      <HStack>
        <Image src={cryptoImg} h={["12", "20"]} objectFit={"contain"} />
        <Text
          fontSize={["1.2rem", "2rem"]}
          color={"white"}
          fontWeight={"500"}
        >
          Rookie.Crypto
        </Text>
      </HStack>

      <Hide breakpoint="(max-width: 767px)">
        <HStack>
          <Button css={{ ...btnProp }} variant={"link"} color={"#222222"}>
            <Link to="/">Home</Link>
          </Button>
          <Button css={{ ...btnProp }} variant={"link"} color={"#222222"}>
            <Link to="/exchange">Exchanges</Link>
          </Button>
          <Button css={{ ...btnProp }} variant={"link"} color={"#222222"}>
            <Link to="/coins">Coins</Link>
          </Button>
        </HStack>
      </Hide>

      <Show breakpoint="(max-width: 767px)">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="ghost"
            shadow={"base"}
            border={"1px solid #8ecae6"}
            color={"#ffffff"}
          />
          <MenuList bgColor={"#e0e0e0"}>
            <MenuItem bgColor={"#e0e0e0"} color={"#222222"}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem bgColor={"#e0e0e0"} color={"#222222"}>
              <Link to="/exchange">Exchanges</Link>
            </MenuItem>
            <MenuItem bgColor={"#e0e0e0"} color={"#222222"}>
              <Link to="/coins">Coins</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </HStack>
  );
};

export default Header;
