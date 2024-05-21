import NavLink from "@/components/nav-link";
import HDate from "@/lib/hdate";
import { getAvailableNewsMonths } from "@/lib/news-filter";

interface Props {
  readonly yearFilter: number;
  readonly selectedMonth?: number;
}

export default function NewsMonthsLinksList(props: Props) {
  const months = getAvailableNewsMonths(props.yearFilter);

  if (props.selectedMonth && !months.includes(props.selectedMonth)) {
    throw new Error("Invalid month.");
  }

  return (
    <ul>
      {months.map((month) => (
        <li key={`${props.yearFilter}-${month}`}>
          <NavLink href={`/archive/${props.yearFilter}/${month}`}>
            {HDate.getMonthName(month)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
