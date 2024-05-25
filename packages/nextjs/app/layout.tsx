import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? "https://zk-voting.com"
  : `http://localhost:${process.env.PORT || 3000}`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

const title = "MACI Starter Kit";
const titleTemplate = "%s | Scaffold-ETH 2";
const description = "Built with 🏗 Scaffold-ETH 2";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: titleTemplate,
  },
  description,
  openGraph: {
    title: {
      default: title,
      template: titleTemplate,
    },
    description,
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageUrl],
    title: {
      default: title,
      template: titleTemplate,
    },
    description,
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": imageUrl,
    "fc:frame:button:1": "Fork On GitHub",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": "https://github.com/yashgo0018/maci-wrapper",
    "fc:frame:button:2": "Start Voting!",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": "https://zk-voting.com",
  },
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
