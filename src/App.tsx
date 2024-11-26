import Extension from "./components/Extension";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Question from "./components/Question";
import StayUptoDate from "./components/StayUptoDate";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Extension />
      <Question />
      <StayUptoDate />
    </div>
  );
}
