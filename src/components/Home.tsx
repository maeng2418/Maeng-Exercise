import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home flex flex-col items-center justify-center w-full">
      <div className="flex flex-col align-center justify-center">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-4xl lg:text-5xl tracking-tight text-center dark:text-white">
          Maeng의 코딩 연습장
        </h1>
        <h3 className="mt-3 text-3xl text-slate-600 text-center dark:text-slate-400">
          with CodeSandbox
        </h3>
      </div>
    </div>
  );
};

export default Home;
