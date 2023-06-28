import { useState } from "react";
function MyAccordian({ question, ans }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}>{show ? "−" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{ans}</p>}
    </>
  );
}
export default MyAccordian;
