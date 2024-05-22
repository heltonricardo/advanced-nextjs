"use client";

import { DUMMY_NEWS, NewsItem } from "@/lib/dummy-news";
import { notFound, useRouter } from "next/navigation";

interface Params {
  readonly params: { slug: string };
}

export default function InterceptedImagePage({ params }: Params) {
  const router = useRouter();

  const slug = params.slug;
  const news = DUMMY_NEWS.find((newsItem: NewsItem) => newsItem.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
