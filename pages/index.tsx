import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>artiro consulting</title>
        <meta
          name="description"
          content="SASS application consulting in Denver Colorado"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="xl:inline">artiro</span>
                  <span className="text-blue-600 xl:inline">.io</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Bringing your ideas to life through with design,
                  artchitecture, and development consulting experiance.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="mailto:arevelski@gmail.com"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://www.arthur-revelski.com/"
                      target="blank"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-indigo-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Our Partners
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
