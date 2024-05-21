import { getAvailableNewsYears } from "@/lib/news-filter";
import Link from "next/link";

interface Props {
  readonly selectedYear?: number;
}

export default function NewsYearsLinksList(props: Props) {
  const years = getAvailableNewsYears();

  if (props.selectedYear && !years.includes(props.selectedYear)) {
    throw new Error("Invalid year.");
  }

  return (
    <ul>
      {years.map((year) => (
        <li key={year}>
          <Link href={`/archive/${year}`}>{year}</Link>
        </li>
      ))}
    </ul>
  );
}
