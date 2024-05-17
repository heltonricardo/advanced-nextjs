import { DUMMY_NEWS, NewsItem } from "@/lib/dummy-news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem: NewsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
