import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default fetchBaseQuery({
  headers: {
    email: 'vv_v_mail@gmail.com',
  },
  baseUrl: 'https://back-end-socialbar.vercel.app/api',
});

//     email: 'happy2@gmail.com',
