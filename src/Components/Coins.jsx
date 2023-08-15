import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  background,
  keyframes,
} from "@chakra-ui/react";
import CoinCard from "./CoinCard";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent error="Data is not synchronizing" />;


  const btnProp = {
    color: "white",
  };

  return (
    <Container maxW="full" bgColor={"#0b1426"} p={['3',"6"]}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup
            value={currency}
            color={"white"}
            onChange={setCurrency}
            p={"5"}
          >
            <HStack spacing={"6"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap="wrap" p="4" justifyContent={"center"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                id={i.id}
                price={i.current_price}
                name={i.name}
                img={i.image}
                currencySymbol={currencySymbol}
                symbol={i.symbol}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
