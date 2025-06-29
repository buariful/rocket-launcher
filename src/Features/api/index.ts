import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AllLauchesType } from '../type'



export const allLaunchesApi = createApi({
    reducerPath: 'allLaunchesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/' }),
    endpoints: (builder) => ({
        launcesData: builder.query<AllLauchesType[], void>({
            query: () => '/launches'
        })
    })
})

export const { useLauncesDataQuery } = allLaunchesApi;