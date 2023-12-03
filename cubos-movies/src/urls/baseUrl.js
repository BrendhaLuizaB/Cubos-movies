'use client'

export const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`;
export const DETAILS_URL = `https://api.themoviedb.org/3/movie/id?&api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`;
export const MOVIE_TRAILER = `https://api.themoviedb.org/3/movie/id/videos?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
export const MOVIE_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`

console.log('ENV2', process.env.NEXT_PUBLIC_API_KEY)