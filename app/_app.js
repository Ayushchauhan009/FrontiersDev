import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <GoogleTagManager gtmId="GTM-N5L23X3F" />
        </>
    )
}