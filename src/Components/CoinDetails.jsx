// The useParams() hook is a React Router hook that allows you to access the parameters of the current URL.
import {
  Box,
  Container,
  HStack,
  VStack,
  RadioGroup,
  Radio,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../index";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import Chart from "./Chart";

const CoinDetails = () => {
  const [coins, setCoins] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArr, setChartArr] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "30d", "60d", "200d", "365d", "max"];

  const params = useParams();

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays(key);
        setLoading(true);
        break;
      case "7d":
        setDays(key);
        setLoading(true);
        break;
      case "30d":
        setDays(key);
        setLoading(true);
        break;
      case "60d":
        setDays(key);
        setLoading(true);
        break;
      case "200d":
        setDays(key);
        setLoading(true);
        break;
      case "365d":
        setDays(key);
        setLoading(true);
        break;
      case "max":
        setDays(key);
        setLoading(true);
        break;

      default:
        setDays(key);
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        setCoins(data);
        setChartArr(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [params.id, currency, days]);

  if (error) return <ErrorComponent error="Data is not synchronizing" />;

  return (
    <Container maxW={"container.xl"} >
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* chart call  */}
          <Box w={"full"} borderWidth={"1"}>
            <Chart currency={currencySymbol} arr={chartArr} days={days} />
          </Box>

          <HStack p={"4"}>
            {btns.map((i) => (
              <Button key={i} onClick={() => switchChartStats(i)}>
                {i}
              </Button>
            ))}
          </HStack>

          <RadioGroup defaultValue="inr" onChange={setCurrency} m="4">
            <HStack>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
            <Text fontSize="small" alignSelf={"center"}>
              Last update on{" "}
              {Date(coins.market_data.last_updated).split("G")[0]}
            </Text>

            <Image src={coins.image.large} w="16" h="16" objectFit="contain" />

            <Stat>
              <StatLabel>{coins.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coins.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coins.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coins.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
              {`#${coins.market_cap_rank}`}
            </Badge>

            <CustomBar
              high={`${currencySymbol}${coins.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coins.market_data.low_24h[currency]}`}
            />

            <Box w={"full"} p={"4"}>
              <Item title={"Max-supply"} value={coins.market_data.max_supply} />
              <Item
                title={"Circulating-supply"}
                value={coins.market_data.circulating_supply}
              />
              <Item
                title={"market Cap"}
                value={`${currencySymbol}${coins.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol}${coins.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol}${coins.market_data.ath[currency]}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w="full">
    <Progress value={"50"} colorScheme="teal" w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme="red" />
      <Text fontSize={"sm"}>24H RANGE</Text>
      <Badge children={high} colorScheme="green" />
    </HStack>
  </VStack>
);

export default CoinDetails;
