import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = "392fbff4-f795-4195-b95d-ac1b0fcb6e88";

type Breed = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

const dogsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchDogs: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export { dogsApiSlice };
export const { useFetchDogsQuery } = dogsApiSlice;
