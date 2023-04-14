import { IData } from "@/interface/data";
import dataJSON from "../data.json";
import React, { useEffect } from "react";

export default function Home() {
  const [data, setData] = React.useState<IData[]>([]);
  useEffect(() => {
    setData(dataJSON);
  }, []);
  // React.useEffect(() => {
  //   fetch("../data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-100">
      {/*{data.map((item) => (*/}
      {/*  <div key={item.id}>{item.company}</div>*/}
      {/*))}*/}
    </main>
  );
}
