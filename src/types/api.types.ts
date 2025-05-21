export interface ErrorApi {
  type: string;
  title: string;
  status: number;
  errors?: Record<string, string[]>;
  traceId: string;
}

export interface PaginationResponse<T> {
  items: T[];
  currentPage: number;
  currentPageCount: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: number;
  hasNextPage: number;
}

export enum Order {
  ASC = "Ascending",
  DESC = "Descending",
}

export interface BasePaginationFilter {
  sortBy?: string | null;
  orderBy?: Order | null;
  pageNumber?: number | null;
  pageSize?: number | null;
}
