import { Inter, Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${nunito.variable} `}
    >
      <body className={classNames("bg-semiwhite")}>
        <main>{children}</main>
      </body>
    </html>
  );
}
