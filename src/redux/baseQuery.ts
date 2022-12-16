import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default fetchBaseQuery({
  headers: {
    email: 'happy2@gmail.com',
  },
  baseUrl: 'https://back-end-socialbar.vercel.app/api',
});
