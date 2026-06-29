import Link from "next/link";

type SiteHeaderProps = {
  isContactPage?: boolean;
};

const brandChars = Array.from("RANGER AUTO");
const taglineChars = Array.from("BUY - SELL - REPAIR");

export function SiteHeader({ isContactPage = false }: SiteHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 shadow-[0_10px_30px_rgba(21,85,159,0.08)]">
      <div className="site-header-scene">
        <div className="site-header-layer" aria-hidden="true">
          <img
            src="/white-background-with-transparent-right-bottom-for-animation.svg"
            alt=""
            className="site-header-scene-art site-header-wipe"
          />
        </div>

        <div className="site-header-layer" aria-hidden="true">
          <img
            src="/yellow-and-blue-stripes-for-animation.svg"
            alt=""
            className="site-header-scene-art site-header-wipe site-header-wipe-delay-1"
          />
        </div>

        <div className="site-header-ui shell">
          <div className="site-header-ui-row">
            <Link href="/" className="site-header-brand-link">
              <span className="sr-only">Ranger Auto home</span>
              <span className="site-header-brand-text" aria-hidden="true">
                <span className="site-header-brand-wordmark">
                  {brandChars.map((char, index) => (
                    <span
                      key={`brand-${index}`}
                      className={`site-header-letter${char === " " ? " site-header-letter-space" : ""}`}
                      style={{ ["--letter-index" as string]: index }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="site-header-brand-tagline">
                  {taglineChars.map((char, index) => (
                    <span
                      key={`tagline-${index}`}
                      className={`site-header-letter site-header-letter-tagline${char === " " ? " site-header-letter-space" : ""}`}
                      style={{ ["--letter-index" as string]: index + brandChars.length }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            </Link>

            {isContactPage ? (
              <Link href="/" className="header-nav-button site-header-nav-entry">
                Back Home
              </Link>
            ) : (
              <nav className="site-header-nav hidden items-center gap-10 lg:flex">
                <Link href="#services" className="header-nav-link site-header-nav-entry">
                  Services
                </Link>
                <Link href="#about" className="header-nav-link site-header-nav-entry">
                  About
                </Link>
                <Link href="/contact" className="header-nav-button site-header-nav-entry">
                  Contact
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
