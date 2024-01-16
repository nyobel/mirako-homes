import React from "react";
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Properties from "./components/Property/Properties";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBar />
      <Properties />
    </div>
  );
};

export default App;
