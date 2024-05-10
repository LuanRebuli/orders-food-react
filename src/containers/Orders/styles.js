import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  padding: 0px 113px 0px 113px;
  margin-top: 270px;
  margin-bottom: 60px;

  background: #ffffff24;
  outline: none;
  border: none;

  font-size: 17px;
  font-weight: 900;
  color: #ffffff;

  &:hover {
    opacity: 0.9;
  }
`;
export const Image = styled.img`
  width: 342px;
  height: 354px;

  margin: 11px 0 25px 0;
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;

  margin-bottom: 40px;

  color: #ffffff;
  text-align: center;
`;

export const Order = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  width: 342px;
  height: 165px;
  margin-bottom: 20px;
  padding: 5px 0px 0px 10px;

  border-radius: 14px;
  background: #ffffff40;
  list-style: none;
  button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    img {
      background-color: transparent;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    color: white;
    padding: 5px;
    background-color: transparent;
    strong {
      background-color: transparent;
    }
  }
`;

export const button = styled.button`
  background: transparent;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`;
