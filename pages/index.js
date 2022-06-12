import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [songInput, setsongInput] = useState("");
  const [temperatureInput, setTemperatureInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ song: songInput}, {temperature: temperatureInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setsongInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dd.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dd.png" />
        <h3>Songline Generator</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="song"
            placeholder="Give us a subject and some suggestions"
            value={songInput}
            onChange={(e) => setsongInput(e.target.value)}
          />
          <input
            type="text"
            name="temperature"
            placeholder="Specify temperature"
            value={temperatureInput}
            onChange={(e) => setTemperatureInput(e.target.value)}
          />
          <input type="submit" value="Generate song line" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
