import dynamic from 'next/dynamic';

const HomeTop = dynamic(() => import('../components/HomeTop'));
const SecondSection = dynamic(() => import('../components/SecondSection'));
const LenisEffect = dynamic(() => import('../components/LenisEffect'));

export default function Home()  {
  return (
    <>
      <LenisEffect />
      <HomeTop />
      <SecondSection />
    </>
  );
};
