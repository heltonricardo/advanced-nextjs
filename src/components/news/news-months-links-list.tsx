import { getAvailableNewsMonths } from "@/lib/news-filter";
import Link from "next/link";

interface Props {
  readonly year: number;
}

export default function NewsMonthsLinksList(props: Props) {
  const months = getAvailableNewsMonths(props.year);

  return (
    <ul>
      {months.map((month) => (
        <li key={`${props.year}-${month}`}>
          <Link href={`/archive/${props.year}/${month}`}>
            {new Date(0, month).toLocaleString("default", { month: "short" })}
          </Link>
        </li>
      ))}
    </ul>
  );
}
