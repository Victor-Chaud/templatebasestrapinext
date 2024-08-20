'use client';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../lib/api';
import { ApiResponse } from '../types/global';

const HomeTop: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        console.log('Fetched data:', response);
        setData(response);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchDataAsync();
  }, []);

  if (!data || !data.data || data.data.length === 0) {
    return <div>Loading...</div>;
  }

  const homeTopSection = data.data[0].attributes.sections[0];

  return (
    <>
      <div className="relative w-full h-screen flex flex-col justify-between bg-container">
        <div
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homeTopSection.image.data.attributes.url})`,
          }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        ></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl font-bold text-black">{homeTopSection.title}</h1>
        </div>
      </div>
    </>
  );
};

export default HomeTop;
