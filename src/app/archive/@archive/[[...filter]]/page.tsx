import NewsList from "@/components/news/news-list";
import NewsMonthsLinksList from "@/components/news/news-months-links-list";
import NewsYearsLinksList from "@/components/news/news-years-links-list";

import { NewsItem } from "@/lib/dummy-news";
import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news-filter";

interface Props {
  readonly params: { filter: string[] };
}

function renderNews(news: NewsItem[] | undefined) {
  return news ? <NewsList news={news} /> : <p>No news found for the selected period.</p>;
}

export default function FilteredNewsPage({ params }: Props) {
  const selectedYear = +params.filter?.[0];
  const selectedMonth = +params.filter?.[1];

  const news = selectedMonth
    ? getNewsForYearAndMonth(selectedYear, selectedMonth)
    : getNewsForYear(selectedYear);

  return (
    <>
      <header id="archive-header">
        <nav>
          <NewsYearsLinksList />
          <NewsMonthsLinksList year={selectedYear} />
        </nav>
      </header>
      {renderNews(news)}
    </>
  );
}
