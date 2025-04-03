import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Click.Save.Shop. - Save Money on Every Purchase",
  description: "Save money automatically while you shop online with Click.Save.Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-bold text-emerald-600">
                Click.Save.Shop.
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/how-it-works" className="text-gray-600 hover:text-emerald-600">
                  How it Works
                </Link>
                <Link href="/stores" className="text-gray-600 hover:text-emerald-600">
                  Stores
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-emerald-600">
                  Pricing
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Click.Save.Shop.</h3>
                <p className="text-gray-400">
                  Save money on every purchase with automatic coupon application.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><Link href="/how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
                  <li><Link href="/stores" className="text-gray-400 hover:text-white">Stores</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Click.Save.Shop. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
