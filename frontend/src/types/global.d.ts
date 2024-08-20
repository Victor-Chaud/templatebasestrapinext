export interface ApiResponse {
  data: PageData[];
  meta: PaginationMeta;
}

export interface PageData {
  id: number;
  attributes: PageAttributes;
}

export interface PageAttributes {
  createdAt: string;
  publishedAt: string;
  slug: string | null;
  title: string;
  updatedAt: string;
  sections: Section[];
}

export interface Section {
  id: number;
  __component: string;
  title: string;
  image?: ImageData;
}

export interface ImageData {
  data: {
    id: number;
    attributes: ImageAttributes;
  };
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface ImageFormats {
  thumbnail: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface PaginationMeta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
