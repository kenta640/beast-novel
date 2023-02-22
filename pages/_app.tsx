//tailwind style is imported
import '../styles/main.css'
import {AppProps} from 'next/app'
import {Session} from 'next-auth';
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: true,
      staleTime: 30000,
    },
  },
});

function MyApp({ Component, pageProps,}: AppProps<{session: Session}>) {
  return (
  <SessionProvider refetchInterval={1}>
    <QueryClientProvider client={queryCache}>
    <Component {...pageProps} />
    </QueryClientProvider>
  </SessionProvider>
  )
}

export default MyApp
