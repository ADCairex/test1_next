import Head from "next/head";
import { useState, useMemo } from "react";
import { Navbar } from "../../components/NavBar";

export default function CalculateFactorial() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const increment1 = () => setNum1(num1 + 1);
  const increment2 = () => setNum2(num2 + 1);
  const sum = useMemo(() => num1 + num2, [num1, num2]);

  return (
    <>
      <Head>
        <title>Ejemplo UseState</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <button
        onClick={increment1}
        className="ml-0 mt-1 w-min bg-blue-300 text-white font-bold py-1 px-2 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-100 hover:border-blue-200 rounded"
      >
        increment 1
      </button>
      <button
        onClick={increment2}
        className="ml-0 mt-1 w-min bg-blue-300 text-white font-bold py-1 px-2 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-100 hover:border-blue-200 rounded"
      >
        increment 2
      </button>
      <p>num1: {num1}</p>
      <p>num2: {num2}</p>
      <p>sum: {sum}</p>
    </>
  );
}
