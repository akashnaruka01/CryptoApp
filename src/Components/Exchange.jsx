import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      
      try {
        const { data } = await axios.get(`${server}/exchanges`);  
        setExchanges(data);
        setLoading(false);
      } catch (error) {
          setError(true);
      }
    };

    fetchExchanges();
  }, []);

  if(error) return <ErrorComponent />

  return (
    <Container p={4} maxW="full" bgColor={"#0b1426"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap="wrap" p="16" justifyContent={"center"}> 
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                image={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, image, url, rank }) => (
  <a href={url} target="blank">
    <VStack
      w={"52"}
      boxShadow={"2px 2px 6px #bebebe, -2px -2px 6px #bebebe"}
      p={"8"}
      color={"white"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={image} w="12" h="12" objectFit="contain" alt="Error" />
      <Heading size="md" noOfLines="1">
        {rank}
      </Heading>
      <Text noOfLines="1">{name}</Text>
    </VStack>
  </a>
);

// link ka use isliye nhi kiya kyu k hmm bhar ka link dena h na k react k app ka

export default Exchange;
