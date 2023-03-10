import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Select from "react-select";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Head>
        <title>City Service</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.hero}>
        <div className="absolute h-full w-full bg-black opacity-80 overflow-hidden">
          <div className="absolute h-full w-full flex flex-col justify-center items-center">
            <h1 class="font-extrabold text-center text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-orange-600 to-pink-400">
              Your Personal Assistant
            </h1>

            <p className="text-white text-center text-3xl lg:text-6xl font-semibold my-5">
              <Typewriter
                words={["One-stop solution for your services","Order any service, anytime."]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>

            <div className="absolute bottom-10 md:bottom-20 w-3/4 md:w-1/2">
              <Select
                options={options}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                className="text-black"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
