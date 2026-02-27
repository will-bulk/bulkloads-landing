import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BulkLoads — Find Bulk Freight Loads. Get Paid Faster.",
  description: "Join 34,000+ carriers on the #1 load board built for hopper, end dump, pneumatic, belt, tanker & grain haulers.",
  openGraph: {
    title: "BulkLoads — Find Bulk Freight Loads. Get Paid Faster.",
    description: "Join 34,000+ carriers on the #1 bulk freight load board.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Facebook Pixel — replace PIXEL_ID_HERE */}
        <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','PIXEL_ID_HERE');
          fbq('track','PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=PIXEL_ID_HERE&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="bg-[#0a1628] text-white antialiased" style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
