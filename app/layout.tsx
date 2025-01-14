import cn from "classnames";
import "@/styles/app.sass";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

const hostGrotesk = localFont({ src: "./fonts/HostGrotesk-Bold.woff2" });

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "SimpleList-landing-page",
    description: "Minimal to-do list app UI design kit + landing page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            
            <body className={cn(rubik.className, hostGrotesk.className)}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
