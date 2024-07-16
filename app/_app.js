// // pages/_app.js

// import Head from 'next/head';
// import { DefaultSeo } from 'next-seo'; // If you are using next-seo for SEO management
// import SEO from '../next-seo.config'; // Import your next-seo configuration

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         {/* Global site tag (gtag.js) - Google Analytics */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVWQNBY8Y4"></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-LVWQNBY8Y4', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />
//       </Head>
//       <DefaultSeo {...SEO} />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
