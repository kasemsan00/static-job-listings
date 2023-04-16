import dataJSON from "../data.json";
import Card from "@/components/card/Card";
import { IData } from "@/interface/data";
import { useState } from "react";
import Image from "next/image";
import Filter from "@/components/Filter";

export default function Home() {
  const [tagSelect, setTagSelect] = useState<string[]>([]);

  const handleTagSelect = (tag: string) => {
    if (tagSelect.includes(tag)) {
      setTagSelect(tagSelect.filter((item) => item !== tag));
    } else {
      setTagSelect([...tagSelect, tag]);
    }
  };
  const handleTagRemove = (tag: string) => {
    if (tagSelect.includes(tag)) {
      setTagSelect(tagSelect.filter((item) => item !== tag));
    } else {
      setTagSelect([...tagSelect, tag]);
    }
  };
  const handleClear = () => {
    setTagSelect([]);
  };

  return (
    <main className="min-h-screen ">
      <div className="header-background fixed z-[-1] top-0 bg-Desaturated-Dark-Cyan h-[157px] w-full"></div>
      <div className="flex flex-col items-center justify-between mt-[120px] px-24 gap-4">
        <div className={`${tagSelect.length > 0 ? "filter-bar grid" : "hidden"}`}>
          <Filter tagSelect={tagSelect} handleTagRemove={handleTagRemove} />
        </div>
        {dataJSON.map((item: IData, index: number) => (
          <div key={index} className={`card ${item.featured ? "card-feature" : undefined}`}>
            <Card item={item} key={index} handleTagSelect={handleTagSelect} tagSelect={tagSelect} />
          </div>
        ))}
      </div>
    </main>
  );
}
