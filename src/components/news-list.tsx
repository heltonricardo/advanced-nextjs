import { NewsItem } from "@/lib/dummy-news";
import Link from "next/link";

interface Props {
  readonly news: NewsItem[];
}
export default function NewsList({ news }: Props) {
  return (
    <ul className="news-list">
      {news.map((newsItem: NewsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
