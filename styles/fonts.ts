import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export { inter, poppins };