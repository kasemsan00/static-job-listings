import { IData } from "@/interface/data";
import Image from "next/image";
interface Props {
  key: number;
  item: IData;
}

export default function Card({ key, item }: Props) {
  return (
    <div key={key} className="flex w-[700px] flex-row items-center gap-2 p-6 rounded-md border-l-black bg-slate-600">
      <div>
        <Image src={require(`@/assets/images/${item.logo}`)} width={100} height={100} alt={item.company} />
      </div>
      <div>
        <div>
          <span>{item.company}</span>
          <span>NEW!</span>
          <span>FEATURED</span>
        </div>
        <div>{item.position}</div>
        <div>
          <span>{item.postedAt}</span>
          <span>{item.contract}</span>
          <span>{item.location}</span>
        </div>
      </div>
      <div>
        <span>{item.role}</span>
        <span>{item.level}</span>
        <span>xxxx</span>
      </div>
    </div>
  );
}
