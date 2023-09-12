import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Students } from "./pages/students/Students";

export default function App() {
  return (
    <React.Fragment>
      <Header title={"Admin Portal"} />
      <Home />
      <Students />
    </React.Fragment>
  );
}
