import Image from "next/image";

interface Props {
  tagSelect: string[];
  handleTagRemove: (tag: string) => void;
}

export default function Filter({ tagSelect, handleTagRemove }: Props) {
  return (
    <div className="inline-block">
      {tagSelect.length > 0 && (
        <span className="flex flex-row flex-wrap gap-2 space-x-2">
          {tagSelect.map((item, index) => (
            <span key={index} className="tag py-0 pr-0">
              <span className="py-1 pr-2">{item}</span>
              <span
                className="py-1 px-2 bg-Desaturated-Dark-Cyan flex justify-center items-center rounded-r-md"
                onClick={() => handleTagRemove(item)}
              >
                <Image src={require("@/assets/images/icon-remove.svg")} alt={"remove tag"} width={16} height={16} />
              </span>
            </span>
          ))}
        </span>
      )}
    </div>
  );
}
