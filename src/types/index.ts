export interface PageProps {
  params: {
    category?: string;
    slug?: string;
  };
  searchParams: SearchParams;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}
