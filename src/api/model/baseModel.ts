export interface BasicPageParams {
  pageNum: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  records: T[];
  total: number;
  size: number;
  current: number;
  orders: [];
  optimizeCountSql: true;
  searchCount: true;
  maxLimit: null;
  countId: null;
  pages: number;
}
