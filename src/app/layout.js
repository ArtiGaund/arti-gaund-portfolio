import localFont from "next/font/local";
import "./globals.css";
import MainSidebar from "@/components/sidebar/Main-Sidebar";
import ProjectSidebar from "@/components/sidebar/Project-Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Arti Portfolio",
  description: "Arti Gaund Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <div className="flex">
            <div>
                <MainSidebar />
            </div>
            <div className="flex-1 flex">
                <div className="flex-1">
                  {children}
                </div>
                {/* <ProjectSidebar /> */}
            </div>
        </div>
        
      </body>
    </html>
  );
}
