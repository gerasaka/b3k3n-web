export const getCategories = async () => {
  return await fetch('/fee-assessment-categories').then((res) => res.json());
};

export const getBooks = async () => {
  return await fetch('/fee-assessment-books?categoryId=1&page=1&size=20').then(
    (res) => res.json()
  );
};
