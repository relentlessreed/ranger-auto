import Link from "next/link";

type SiteHeaderProps = {
  isContactPage?: boolean;
};

export function SiteHeader({ isContactPage = false }: SiteHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 shadow-[0_10px_30px_rgba(21,85,159,0.08)]">
      <div className="site-header-top">
        <div className="site-header-top-bg" aria-hidden="true">
          <img
            src="/white-background-with-transparent-right-bottom-for-animation.svg"
            alt=""
            className="site-header-top-bg-art"
          />
        </div>

        <div className="shell">
          <div className="site-header-top-row">
            <Link href="/" className="site-header-brand-link">
              <span className="sr-only">Ranger Auto home</span>
              <span className="site-header-brand-art">
                <img
                  src="/ranger-auto-logo-for-animation.svg"
                  alt=""
                  aria-hidden="true"
                  className="site-header-logo-art site-header-wipe"
                />
                <img
                  src="/buy-sell-repair-for-animation.svg"
                  alt=""
                  aria-hidden="true"
                  className="site-header-tagline-art site-header-wipe site-header-wipe-delay-1"
                />
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

      <div className="site-header-stripe-band" aria-hidden="true">
        <img
          src="/yellow-and-blue-stripes-for-animation.svg"
          alt=""
          className="site-header-stripe-art site-header-wipe site-header-wipe-delay-2"
        />
      </div>
    </header>
  );
}
