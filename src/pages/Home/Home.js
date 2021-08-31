import React from "react";
import { BottomSheet, ComponentBar, Header } from "../Components";

const Home = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Header />
      <ComponentBar />
      <BottomSheet />
    </div>
  );
};

export default Home;
