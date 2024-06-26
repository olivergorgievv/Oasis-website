import "@/app/_styles/globals.css";
import Header from "@/starter/components/Header";

// Font Initialization
import { Inter } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

//
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The wild Oasis",
  },
  desciprtion:
    "Luxurious cabin hotel, located in the heart of the Italian Dolometes, surrounded by beautifull mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.className} antialiased bg-primary-950 text-primary-100 flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
