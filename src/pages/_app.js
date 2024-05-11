import "@/styles/globals.css";
import { Inter, Poppins, Junge, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const junge_init = Junge({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-junge",
});
const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${inter_init.variable} ${poppins_init.variable} ${junge_init.variable} ${montserrat_init.variable}`}>
        <Toaster richColors position="top-right" />
        <Component {...pageProps} />
      </div>
    </>
  );
}
