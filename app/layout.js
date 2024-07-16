import { Inter } from "next/font/google";
import Navbar from "@/components/CommonComps/Navbar";
import "./globals.css";
import Head from "next/head";

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
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVWQNBY8Y4"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-LVWQNBY8Y4');
        </script> */}

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
    </html>
  );
}
