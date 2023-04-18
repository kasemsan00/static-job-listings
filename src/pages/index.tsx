import dataJSON from "../data.json";
import Card from "@/components/card/Card";
import { IData } from "@/interface/data";
import { useState } from "react";
import Filter from "@/components/Filter";
import Clear from "@/components/Clear";

export default function Home() {
  const [tagSelect, setTagSelect] = useState<string[]>([]);
  let filterData: Array<IData>;

  if (tagSelect.length === 0) {
    filterData = dataJSON;
  } else {
    filterData = dataJSON.filter((state) => state.languages.some((tag) => tagSelect.includes(tag)));
  }

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
      <div className="flex flex-col items-center justify-between mt-[120px] md:px-24 pt-0 px-5 gap-14 md:gap-4 pb-24">
        <div className={`${tagSelect.length > 0 ? "filter-bar grid" : "hidden"}`}>
          <Filter tagSelect={tagSelect} handleTagRemove={handleTagRemove} />
          <Clear handleClear={handleClear} />
        </div>
        {filterData.map((item: IData, index: number) => (
          <div key={index} className={`card ${item.featured ? "card-feature" : undefined}`}>
            <Card item={item} key={index} handleTagSelect={handleTagSelect} />
          </div>
        ))}
      </div>
    </main>
  );
}
