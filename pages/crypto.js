import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckboxesTags from "../components/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicTable from "../components/muitable";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
export default function Crypto() {
  const [coins, setCoins] = useState([]);

  const [coinsDisplay, setCoinsDisplay] = useState([]);

  const [coinsName, setCoinsName] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setCoinsDisplay(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const getCoinsName = () => {
      let coinNames = [];
      coins.map((coin, key) => {
        return (key = coin.name), coinNames.push({ title: `${coin.name}` });
      });
      setCoinsName(coinNames);
    };
    if (coins.length > 0) {
      getCoinsName();
    }
  }, [coins]);
  useEffect(() => {
    if (!coinsDisplay.length) {
      setCoinsDisplay(coins);
    }
  }, [coinsDisplay, coins]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const rating = (newValue) => {
    console.log(coins);
    const filterData = coins.filter(({ name }) => {
      for (const filter of newValue) {
        console.log([filter]);
        if (name.includes([filter])) {
          return true;
        }
      }
    });

    setCoinsDisplay(filterData);
  };

  return (
    <section id="crypto">
      <Container>
        <h1 style={{ textAlign: "center" }}> TOP 100 Crypto</h1>
        <p style={{ textAlign: "center" }}>
          Les meilleures cryptomonnaies sur Puzuru, classées par volume, prix
          plancher et autres statistiques
        </p>
        <Row>
          <Col md={12} lg={12}>
            <CheckboxesTags
              cryptoName={(cryptoName) => {
                rating(cryptoName);
              }}
              coinsName={coinsName}
            />
          </Col>
          <Col md={12} lg={12}>
            {coinsDisplay.length > 0 ? (
              coinsDisplay.map((coin) => {
                return (
                  <BasicTable
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })
            ) : (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
