export interface ApiCallback<T> {
  error: boolean;
  loading: boolean;
  data: T;
}
