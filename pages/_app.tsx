//tailwind style is imported
import '../styles/main.css'
import {AppProps} from 'next/app'
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
function MyApp({ Component, pageProps}: AppProps) {
  return (
  <SessionProvider session={pageProps.session} refetchInterval={0}>
    <QueryClientProvider client={queryCache}>
    <Component {...pageProps} />
    </QueryClientProvider>
  </SessionProvider>
  )
}

export default MyApp
