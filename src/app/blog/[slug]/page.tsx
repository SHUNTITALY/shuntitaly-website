type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function BlogSlugPage() {
  return <div>Blog page</div>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#0b426e]">
          Blog
        </p>

        <h1 className="text-5xl font-black capitalize text-slate-950">
          {slug.replaceAll("-", " ")}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Articolo tecnico Shunt Italy in preparazione.
        </p>
      </div>
    </main>
  );
}