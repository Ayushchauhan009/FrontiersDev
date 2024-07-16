import Document, { Html, Head, Main, NextScript } from "next/document";


import React from 'react'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVWQNBY8Y4"></script>
                    {/* <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-LVWQNBY8Y4');
                </script> */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-LVWQNBY8Y4');
              `,
                        }}
                    />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}

export default MyDocument;
