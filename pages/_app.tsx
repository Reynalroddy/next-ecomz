import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      <ToastContainer/>
    <Component {...pageProps} />
</Provider>
</SessionProvider>
  )
}

export default MyApp
