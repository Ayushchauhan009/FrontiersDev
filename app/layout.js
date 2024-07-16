import { Inter } from "next/font/google";
import Navbar from "@/components/CommonComps/Navbar";
import "./globals.css";
import Head from "next/head";
// import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FrontiersDev",
  description:
    "Elevate your online presence with expert website development services from FrontiersDev. Our team crafts stunning, user-centric websites that drive results. From intuitive design to seamless functionality, we deliver tailored solutions that reflect your brand identity. Contact us today to unlock your online potential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>

        {/* <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)
        })(window,document,'script','dataLayer','GTM-N5L23X3F');</script> */}


        <meta
          property="og:title"
          content="FrontiersDev | Professional Website Development Services"
        />
        <meta
          property="og:description"
          content="Elevate your online presence with expert website development services from FrontiersDev. Our team crafts stunning, user-centric websites that drive results. From intuitive design to seamless functionality, we deliver tailored solutions that reflect your brand identity. Contact us today to unlock your online potential."
        />
        <meta
          property="og:image"
          content="https://frontiersdev-test.netlify.app/OgImage.png"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FrontiersDev | Professional Website Development Services"
        />
        <meta
          name="twitter:description"
          content="Elevate your online presence with expert website development services from FrontiersDev. Our team crafts stunning, user-centric websites that drive results. From intuitive design to seamless functionality, we deliver tailored solutions that reflect your brand identity. Contact us today to unlock your online potential."
        />
        <meta
          name="twitter:image"
          content="https://frontiersdev-test.netlify.app/OgImage.png"
        />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
      </Head>
      <body className={inter.className}>{children}</body>
      {/* <GoogleTagManager gtmId="G-LVWQNBY8Y4" /> */}
    </html>
  );
}
