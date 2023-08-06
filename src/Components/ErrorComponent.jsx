import { Alert, Image } from "@chakra-ui/react";
import React from "react";
import Home from "./Home";
import eroorImg from '../Assests/404.jpg';

const ErrorComponent = ({ error }) => {
  return (
    <Image src={eroorImg} onClick={()=><Home/>}></Image>
  );
};

export default ErrorComponent;
