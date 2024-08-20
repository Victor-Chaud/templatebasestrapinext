import { ApiResponse } from '../types/global';

export const fetchData = async (): Promise<ApiResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/pages?populate[sections][populate]=image`, {
      headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: ApiResponse = await res.json();
    console.log('Fetched data from API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


