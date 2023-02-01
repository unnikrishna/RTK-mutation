import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import {Post,Employee } from '../models/contact.model';

export const MultiApi = createApi({
  reducerPath: "EmployeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    employees: build.query<Post, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        // get a random user
        const randomResult = await fetchWithBQ('employees')
        if (randomResult.error)
          return { error: randomResult.error as FetchBaseQueryError }
        const user = randomResult.data as Employee
        const result = await fetchWithBQ(`user/${user.id}/posts`)
        return result.data
          ? { data: result.data as Post }
          : { error: result.error as FetchBaseQueryError }
      },
    }),
  }),
})
export const {
  use
} = MultiApi;