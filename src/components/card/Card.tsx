import { IData } from "@/interface/data";
import Image from "next/image";
interface Props {
  item: IData;
  handleTagSelect: (tag: string) => void;
}

export default function Card({ item, handleTagSelect }: Props) {
  return (
    <>
      <div className="justify-self-start md:justify-self-center mt-[-60px] h-[70px] w-[70px] md:h-auto md:w-auto md:mt-0">
        <Image src={require(`@/assets/images/${item.logo}`)} width={100} height={100} priority={true} alt={item.company} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="space-x-4">
          <span className="text-Desaturated-Dark-Cyan font-semibold">{item.company}</span>
          {item.new ? <label className="new-label mr-4">NEW!</label> : null}
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
      <div className="justify-self-start flex flex-row gap-2 flex-wrap md:justify-self-end">
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
