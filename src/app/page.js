import React from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';
import Layout from './layout';

const Home = () => {
  return (
    <Layout isHomePage={true}>
      <div className="md:m-28 px-5">
        <div className="text-center">
          <h1 className="text-4xl 2xl:text-8xl md:text-6xl font-bold text-black pt-20 pb-6">
            Recipe Revive
          </h1>

          <div className="sm:mt-12 mx-auto max-w-[1000px] relative mb-16">
            <SearchBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;






