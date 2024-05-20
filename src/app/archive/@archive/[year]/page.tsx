import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news-filter";

interface Props {
  readonly params: { year: number };
}

export default function FilteredNewsPage({ params }: Props) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
