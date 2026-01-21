type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
};

export async function apiFetch<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const res = await fetch(url, {
    cache: options.cache ?? 'no-store',
    next: {
      revalidate: options.revalidate,
      tags: options.tags,
    },
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}
