import "@/styles/globals.css";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <header className="bg-slate-700 text-slate-200 text-base font-semibold capitalize">
        <nav>
          <ul className="flex items-center justify-between p-3">
            <li className="hover:text-white hover:font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white hover:font-bold">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-white hover:font-bold">
              <Link href="/documents">Documents</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}
