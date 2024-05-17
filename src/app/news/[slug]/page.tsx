import { DUMMY_NEWS, NewsItem } from "@/lib/dummy-news";
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
        <img src={`images/news/${news.image}`} alt={news.title} />
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
