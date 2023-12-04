import { ClerkProvider } from "@clerk/nextjs";
import { Jost, Onest } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/context/ThemeProvider";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});
const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code Community",
  description:
    "A community-driven platform for keeping track of programming questions/problems and their respective answers/solutions, with the goal of sharing knowledge and cutting down time spent on already solved known issues.",
  icons: {
    icon: "/assets/images/code-community-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${onest.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
