import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Toaster, toast } from "sonner";

import axios from "axios";

import BurgerLogo from "../../assets/burgerlogo.svg";

import {
  Container,
  H1,
  Image,
  InputLabel,
  Input,
  Button,
  Orders,
} from "./styles.js";

function App() {
  const [orders, setOrders] = useState([]);
  const InputName = useRef();
  const InputOrder = useRef();
  const InputAddress = useRef();

  const history = useHistory();

  async function AddNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: InputOrder.current.value,
        name: InputName.current.value,
        address: InputAddress.current.value,
      }
    );
    toast.success("Order created successfully");
    setOrders([...orders, newOrder]);
  }

  function goPag() {
    history.push("/orders");
  }
  return (
    <Container>
      <Orders>
        <button onClick={goPag}>Login</button>
      </Orders>
      <Image src={BurgerLogo} />
      <H1>Make your wish!</H1>

      <InputLabel>Order</InputLabel>
      <Input ref={InputOrder} placeholder="1 Coca-Cola, 1-X Salada"></Input>

      <InputLabel>Name</InputLabel>
      <Input ref={InputName} placeholder="Steve Jobs" required></Input>

      <InputLabel>Address</InputLabel>
      <Input ref={InputAddress} placeholder="Street First, 328"></Input>

      <Toaster richColors expand={true} position="top-center" />
      <Button onClick={AddNewOrder}>New Order</Button>
    </Container>
  );
}

export default App;
