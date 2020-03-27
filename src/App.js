import React from "react";
import "./app.scss";
import { MainSection } from "./components/mainSection/mainSection";
import { CloneHeader } from "./components/header/header";
import { CloneFooter } from "./components/footer/cloneFooter";
import "semantic-ui-css/semantic.min.css";

export const App = () => {
  return (
    <div className="App">
      <CloneHeader />
      <MainSection />
      <CloneFooter />
    </div>
  );
};
