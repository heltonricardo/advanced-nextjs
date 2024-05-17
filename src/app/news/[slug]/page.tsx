interface Params {
  readonly params: { slug: string };
}

export default function NewsDetailPage({ params }: Params) {
  const slug = params.slug;

  return <h1>{slug}</h1>;
}
