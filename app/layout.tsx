import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { DM_Sans } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const dmsans_init = DM_Sans({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={dmsans_init.className + " "}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
