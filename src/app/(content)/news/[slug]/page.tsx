import { DUMMY_NEWS, NewsItem } from "@/lib/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  readonly params: { slug: string };
}

export default function NewsDetailPage({ params }: Params) {
  const slug = params.slug;
  const news = DUMMY_NEWS.find((newsItem: NewsItem) => newsItem.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${news.slug}/image`}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
