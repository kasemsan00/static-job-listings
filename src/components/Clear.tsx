interface Props {
  handleClear: () => void;
}

export default function Clear({ handleClear }: Props) {
  return (
    <span className="filter-clear justify-self-end text-Dark-Grayish-Cyan" onClick={handleClear}>
      Clear
    </span>
  );
}
