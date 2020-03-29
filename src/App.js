import React, { useState } from "react";
import "./app.scss";
import { MainSection } from "./components/mainSection/mainSection";
import { CloneHeader } from "./components/header/header";
import { CloneFooter } from "./components/footer/cloneFooter";
import "semantic-ui-css/semantic.min.css";

export const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <CloneHeader query={query} setQuery={setQuery} />
      <MainSection query={query} setQuery={setQuery} />
      <CloneFooter />
    </div>
  );
};
