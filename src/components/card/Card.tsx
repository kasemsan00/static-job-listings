import { IData } from "@/interface/data";
import Image from "next/image";
interface Props {
  item: IData;
  tagSelect: string[];
  handleTagSelect: (tag: string) => void;
}

export default function Card({ item, tagSelect, handleTagSelect }: Props) {
  return (
    <>
      <div className="justify-self-center">
        <Image src={require(`@/assets/images/${item.logo}`)} width={100} height={100} priority={true} alt={item.company} />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <span className="text-Desaturated-Dark-Cyan font-semibold">{item.company}</span>
          {item.new ? <label className="new-label">NEW!</label> : null}
          {item.featured ? <span className="feature-label">FEATURED</span> : null}
        </div>
        <div className="font-semibold text-xl">{item.position}</div>
        <div className="flex flex-row gap-4 text-Dark-Grayish-Cyan">
          <span>{item.postedAt}</span>
          <span>•</span>
          <span>{item.contract}</span>
          <span>•</span>
          <span>{item.location}</span>
        </div>
      </div>
      <div className="justify-self-end flex flex-row gap-2">
        <span className="tag" onClick={() => handleTagSelect(item.role)}>
          {item.role}
        </span>
        <span className="tag" onClick={() => handleTagSelect(item.level)}>
          {item.level}
        </span>
        {item.languages.map((language: string, index: number) => {
          return (
            <span className="tag" key={index} onClick={() => handleTagSelect(language)}>
              {language}
            </span>
          );
        })}
      </div>
    </>
  );
}
