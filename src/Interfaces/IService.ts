export default interface IService<T> {
  type: string | null;
  message: T | T[] | string;
}