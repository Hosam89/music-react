import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const ShazamCoreApi = createApi({
        reducerPath : 'shazamCoreApi',
        baseQuery : fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com',
            prepareHeaders:(headers) =>{
                headers.set('X-RapidAPI-Key' , import.meta.env.VITE_API_KEY);
                /** process.env.API_KEY  asdas with normal ncra (Normal creat react APP )*/
                return headers;
            },
        }),
        endpoints : (builder) =>({
            getTopCharts : builder.query({ query: () =>'/v1/charts/world'}),
            getSongsByGenre : builder.query({ query: ( genre ) =>`/v1/charts/genre-world?genre_code=${ genre }`}),
            getSongDetails : builder.query({ query: ({ songid }) =>`/v1/tracks/details?track_id=${ songid }`}),
            getSongRelated : builder.query({ query: ({ songid }) =>`/v1/tracks/related?track_id=${ songid }`}),
            getArtistDetails :  builder.query({ query:( artistId ) =>`/v2/artists/details?artist_id=${ artistId }`}),
            getSongbyCountry : builder.query({ query:( countryCode ) =>`/v1/charts/country?country_code=${ countryCode }`}),
            getSongBySearch : builder.query({ query: ( searchTerm ) =>`/v1/search/multi?query=${ searchTerm }&search_type=SONGS_ARTISTS`}),
        
           
        })
    })


export const {useGetTopChartsQuery, useGetSongsByGenreQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetSongbyCountryQuery,useGetSongBySearchQuery } = ShazamCoreApi;