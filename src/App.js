import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";

export default function App() {
  return (
    <React.Fragment>
      <Header title={"Admin Portal"} />
      <Home />
    </React.Fragment>
  );
}
