import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "..";
import { Container } from "@chakra-ui/react";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data)
    };
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
        gjk
    </Container>

    
  );
};

export default Exchanges;
