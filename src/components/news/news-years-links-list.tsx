import { getAvailableNewsYears } from "@/lib/news-filter";
import Link from "next/link";

export default function NewsYearsLinksList() {
  const years = getAvailableNewsYears();

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
