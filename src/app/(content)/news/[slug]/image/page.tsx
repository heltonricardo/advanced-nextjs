import { DUMMY_NEWS, NewsItem } from "@/lib/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  readonly params: { slug: string };
}

export default function ImagePage({ params }: Params) {
  const slug = params.slug;
  const news = DUMMY_NEWS.find((newsItem: NewsItem) => newsItem.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Link href={`/news/${news.slug}`}>
        <img src={`/images/news/${news.image}`} alt={news.title} />
      </Link>
    </div>
  );
}
