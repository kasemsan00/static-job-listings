import dataJSON from "../data.json";
import React from "react";
import Card from "@/components/card/Card";
import { IData } from "@/interface/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      {dataJSON.map((item: IData, index: number) => (
        <div key={index} className={`card ${item.featured ? "card-feature" : undefined}`}>
          <Card item={item} key={index} />
        </div>
      ))}
    </main>
  );
}
