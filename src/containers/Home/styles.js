import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  background-color: black;
`;

export const Image = styled.img`
  width: 342px;
  height: 354px;

  margin: 11px 0 25px 0;
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;

  margin-bottom: 50px;

  color: #ffffff;
  text-align: center;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;

  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  width: 342px;
  margin-bottom: 20px;

  padding: 19px 0px 18px 15px;
  border-radius: 14px 14px 14px 14px;
  box-shadow: 0px 4px 4px 0px #00000040;

  background: #ffffff40;
  outline: none;
  border: none;

  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  padding: 0px 113px 0px 113px;
  margin-top: 30px;

  background: #d93856;
  outline: none;
  border: none;

  font-size: 17px;
  font-weight: 900;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const Orders = styled.div`
  position: absolute;
  top: 40px;
  right: 150px;

  button {
    width: 150px;
    height: 45px;

    background: #d93856;

    outline: none;
    border: none;

    font-size: 17px;
    font-weight: 900;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;
