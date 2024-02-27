import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { ApolloWrapper } from "../lib/apolloProvider";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENUYGUN AYIN ELEMANI",
  description: "Her ay en iyi çalışanı interaktif platformumuzla seçin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <ApolloWrapper>{children}</ApolloWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
