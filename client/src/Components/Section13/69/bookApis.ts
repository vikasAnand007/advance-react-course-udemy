import api from "./api";

export const fetchBooks = (params: any) => {
    console.log("params", params)
  if (params.page) {
    return api.get("books", { params }).then((res) => res.data);
  } else {
    return api.get("books").then((res) => res.data);
  }
};

export const postBook = (data: any) =>
  api.post("books", data).then((res) => res.data);
export const resetBooks = (data: any) =>
  api.put("books-reset", data).then((res) => res.data);
