import "./styles/global.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Container from "./shared/components/Container/Container";
import Strategy from "./components/Strategy/Strategy";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Hero />
        <Strategy />
        <About />
        <Pricing />
      </Container>
    </div>
  );
}

export default App;
