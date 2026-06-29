import Link from "next/link";

type SiteHeaderProps = {
  isContactPage?: boolean;
};

export function SiteHeader({ isContactPage = false }: SiteHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 shadow-[0_10px_30px_rgba(21,85,159,0.08)]">
      <div className="site-header-frame">
        <img
          src="/ranger-header-fill-only-crisp.svg"
          alt="Ranger Auto"
          className="site-header-art"
        />

        <div className="site-header-overlay">
          <div className="shell">
            <div className="site-header-overlay-row">
              <Link href="/" className="site-header-brand-link">
                <span className="sr-only">Ranger Auto home</span>
              </Link>

              {isContactPage ? (
                <Link href="/" className="header-nav-button">
                  Back Home
                </Link>
              ) : (
                <nav className="hidden items-center gap-10 lg:flex">
                  <Link href="#services" className="header-nav-link">
                    Services
                  </Link>
                  <Link href="#about" className="header-nav-link">
                    About
                  </Link>
                  <Link href="/contact" className="header-nav-button">
                    Contact
                  </Link>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
