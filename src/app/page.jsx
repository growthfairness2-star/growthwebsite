import Hero from "./components/Hero";
import ConditionsTabs from "./components/ConditionsTabs";
import FAQ from "./components/FAQ";
import Insurances from "./components/Insurances";
import Suicide from "./components/Suicide";


export default function Home() {
  return (
    <>
      <Hero />
      <ConditionsTabs />
      <FAQ />
      <Insurances />
      <Suicide />
    </>
  );
}
