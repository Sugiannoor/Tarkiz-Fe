export type APIParams = {
  current_page: number;
  row_per_page: number;
  search?: string;
  sort?: string;
  sort_type?: "asc" | "desc";
};
