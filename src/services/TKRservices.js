import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const TodosApi = createApi({
    reducerPath: "TodosApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com",
    }),
  
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: () => "/todos",
      }),
    }),
  });
  export const { useGetTodosQuery } = TodosApi;
  