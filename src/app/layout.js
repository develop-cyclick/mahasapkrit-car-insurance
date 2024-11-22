import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppNavbar } from "@/components/app-navbar";
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
});

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        className={`${ibmPlexSansThai.className} antialiased`}
      >
        <SidebarProvider>

          <AppSidebar />
          <main className="flex flex-1 flex-col">
            <AppNavbar />
            {children}
          </main>

        </SidebarProvider>
      </body>
    </html>
  );
}
