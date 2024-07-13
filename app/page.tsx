"use client"

import CardInvestimento from "./components/customs/CardInvestiment/CardInvestiment";
import { useInvestments } from "./contexts/InvestimentContext";

export default function Home() {

  const { investments } = useInvestments();

  return (
    <>
      <div className="flex gap-5">
        {investments.map((investment, index) => (
         <CardInvestimento 
         key={index}
         id={investment.id}
         investmentName={investment.investmentName}
         ownerName={investment.ownerName}
         date={investment.date}
         value={investment.currentValue?.toFixed(2) || investment.value.toFixed(2)}
       />
        ))}
      </div>

    </>
  );
}
