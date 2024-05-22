import { DUMMY_NEWS, NewsItem } from "@/lib/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  readonly params: { slug: string };
}

export default function InterceptedImagePage({ params }: Params) {
  const slug = params.slug;
  const news = DUMMY_NEWS.find((newsItem: NewsItem) => newsItem.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <p>
        You are seeing this message because you accessed this page through an internal link within
        the application.
      </p>
      <p>Refresh the page and you will no longer see this message.</p>
      <div className="fullscreen-image">
        <Link href={`/news/${news.slug}`}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </Link>
      </div>
    </>
  );
}
