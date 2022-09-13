import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import HeadingPart from "./components/HeadingPart";
import TheCard from "./components/TheCard";
import PageFooter from "./components/PageFooter";
import PageFooter2 from "./components/PageFooter2";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeadingPart></HeadingPart>
    <TheCard />
    <PageFooter name="Angelo Samson" />
    <PageFooter2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
