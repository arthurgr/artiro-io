import Head from "next/head";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export const siteTitle = "artiro consulting";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="artiro consulting" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div
        id="content"
        className="bg-white dark:bg-slate-900 h-screen mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        <ThemeToggle config={{ theme, setTheme }} />
        {children}
      </div>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
