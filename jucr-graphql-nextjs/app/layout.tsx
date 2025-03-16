import React from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>JUCR web builder</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
