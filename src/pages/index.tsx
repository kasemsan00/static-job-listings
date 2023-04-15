import dataJSON from "../data.json";
import React from "react";
import Card from "@/components/card/Card";
import { IData } from "@/interface/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-600">
      {dataJSON.map((item: IData, index: number) => (
        <Card item={item} key={index} />
      ))}
    </main>
  );
}
