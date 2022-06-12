import React from 'react';
import Header from '../components/Header'

interface Props {
  children: React.ReactNode;
  setPage: (e: string) => void;
}

const Page = ({ children, setPage}: Props) => (
  <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
    <Header setPage={setPage}/>
    <div className="max-w-xs py-12 mx-auto sm:max-w-screen-sm md:max-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="w-full bg-white shadow sm:rounded-md">
        {children}
      </div>
    </div>
  </div>
);

export default Page;
