import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news-filter";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
