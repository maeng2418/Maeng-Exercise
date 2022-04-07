import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="error-page flex flex-col items-center justify-center w-full">
      <div className="status text-white text-6xl">404</div>
      <div className="status-text text-slate-500 text-xl mt-8">페이지를 찾을 수 없습니다.</div>
    </div>
  );
};

export default NotFound;
