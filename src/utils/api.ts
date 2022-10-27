import { ParamType } from '../types/param.type';

export const getCategories = async () => {
  return await fetch('/fee-assessment-categories').then((res) => res.json());
};

export const getBooks = async ({ categoryId, page }: ParamType) => {
  return await fetch(
    `/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=20`
  ).then((res) => res.json());
};
