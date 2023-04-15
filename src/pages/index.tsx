import dataJSON from "../data.json";
import React, { useEffect } from "react";
import Card from "@/components/card/Card";
import { IData } from "@/interface/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-100">
      {dataJSON.map((item: IData, index: number) => (
        <Card key={index} item={item} />
      ))}
    </main>
  );
}
