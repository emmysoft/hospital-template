import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navigation/Nav";
import Hero from "./features/Hero/Hero";
import Body from "./features/Body/Body";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      <Hero />
      <Body />
    </>
  );
}

export default App;
