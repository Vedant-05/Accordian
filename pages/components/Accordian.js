import { questions } from "./api";
import MyAccordian from "./MyAccordian";
import { useState } from "react";

export default function Accordian() {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main-div">
        <h1>Accordian Page</h1>
        {data.map((currElem) => {
          const { id } = currElem;

          return <MyAccordian key={id} {...currElem} />;
        })}
      </section>
    </>
  );
}
