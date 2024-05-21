import NavLink from "@/components/nav-link";
import { getAvailableNewsYears } from "@/lib/news-filter";

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
          <NavLink href={`/archive/${year}`}>{year}</NavLink>
        </li>
      ))}
    </ul>
  );
}
