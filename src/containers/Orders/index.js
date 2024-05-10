import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import BurgerLogo from "../../assets/package.svg";
import Trash from "../../assets/trash.svg";

import { Container, H1, Image, Order, Button, Ul } from "./styles.js";

function App() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );
      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrderDelete = orders.filter((order) => order.id !== orderId);
    setOrders(newOrderDelete);
  }

  function goBackPag() {
    history.push("/");
  }

  return (
    <Container>
      <Image src={BurgerLogo} />
      <H1>Orders</H1>

      <Ul>
        {orders.map((order) => (
          <Order key={order.id}>
            <p>🥘 {order.order}</p>
            <p>🏘️ {order.address}</p>
            <p>
              <strong>👪 {order.name}</strong>
            </p>
            <button>
              <img onClick={() => deleteOrder(order.id)} src={Trash} />
            </button>
          </Order>
        ))}
        ;
      </Ul>

      <Button onClick={goBackPag}>Back</Button>
    </Container>
  );
}

export default App;
