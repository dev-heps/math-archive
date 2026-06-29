import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "katex/dist/katex.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Math Archive - Dongwoo Lee",
    template: "%s - Math Archive",
  },
  description: "Dongwoo Lee's math archive for notes, studies, and formalizations.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-fg">
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md px-2 pt-2">
            <div className="mx-auto flex min-h-12 w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
              <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 py-2 font-mono text-sm font-medium" aria-label="Math Archive navigation">
                <a href="https://dev-heps.github.io/" className="text-muted hover:text-fg transition-colors">Portfolio</a>
                <Link href="/" className="text-fg">Math Archive</Link>
                <Link href="/studies" className="text-muted hover:text-fg transition-colors">Studies</Link>
                <Link href="/formalization" className="text-muted hover:text-fg transition-colors">Formalization</Link>
                <Link href="/models" className="text-muted hover:text-fg transition-colors">Models</Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <article className="math-article prose prose-zinc max-w-none dark:prose-invert">
              {children}
            </article>
          </main>
          <footer className="mx-auto w-full max-w-6xl px-4 pb-10 text-center font-mono text-xs text-muted sm:px-6 lg:px-8">
            &copy; 2026 Dongwoo Lee. Back to <a href="https://dev-heps.github.io/" className="text-fg hover:underline underline-offset-4">Portfolio</a>.
          </footer>
        </div>
      </body>
    </html>
  );
}
