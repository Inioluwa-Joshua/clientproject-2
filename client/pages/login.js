import React from "react";
import Navbar from "../components/navbar";
// import { Container } from "../components/globalComp/wrapper";

const login = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("./img/bg.jpeg");
    &::-webkit-scrollbar {
      display: none;
    }
  `;
  return (
    <>
      <div className="px-[0.8rem] lg:px-[3rem]">
        <Navbar />
      </div>
    </>
  );
};

export default login;
