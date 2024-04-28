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
        <meta
          property="og:title"
          content="FrontiersDev | Professional Website Development Services"
        />
        <meta
          property="og:description"
          content="Elevate your online presence with expert website development services from FrontiersDev. Our team crafts stunning, user-centric websites that drive results. From intuitive design to seamless functionality, we deliver tailored solutions that reflect your brand identity. Contact us today to unlock your online potential."
        />
        <meta property="og:image" content="/OgImage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FrontiersDev | Professional Website Development Services"
        />
        <meta
          name="twitter:description"
          content="Elevate your online presence with expert website development services from FrontiersDev. Our team crafts stunning, user-centric websites that drive results. From intuitive design to seamless functionality, we deliver tailored solutions that reflect your brand identity. Contact us today to unlock your online potential."
        />
        <meta name="twitter:image" content="/OgImage.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
