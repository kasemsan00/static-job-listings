import dataJSON from "../data.json";
import Card from "@/components/card/Card";
import { IData } from "@/interface/data";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [tagSelect, setTagSelect] = useState<string[]>([]);

  useEffect(() => {
    console.log(tagSelect.length);
  }, [tagSelect]);

  const handleTagSelect = (tag: string) => {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <div className={`${tagSelect.length > 0 ? "filter-bar block" : "hidden"}`}>
        <div>
          {tagSelect.length > 0 && (
            <span className="flex flex-row gap-2">
              {tagSelect.map((item, index) => (
                <span key={index} className="tag">
                  {item}
                  <span className="bg-Desaturated-Dark-Cyan flex justify-center items-center">
                    <Image src={require("@/assets/images/icon-remove.svg")} alt={"remove tag"} />
                  </span>
                </span>
              ))}
            </span>
          )}
        </div>
        <span className="filter-clear" onClick={handleClear}>
          Clear
        </span>
      </div>
      {dataJSON.map((item: IData, index: number) => (
        <div key={index} className={`card ${item.featured ? "card-feature" : undefined}`}>
          <Card item={item} key={index} handleTagSelect={handleTagSelect} tagSelect={tagSelect} />
        </div>
      ))}
    </main>
  );
}
