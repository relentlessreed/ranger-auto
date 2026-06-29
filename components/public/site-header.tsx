import Link from "next/link";

type SiteHeaderProps = {
  isContactPage?: boolean;
};

export function SiteHeader({ isContactPage = false }: SiteHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 shadow-[0_10px_30px_rgba(21,85,159,0.08)]">
      <div className="site-header-scene">
        <div className="site-header-layer site-header-layer-background" aria-hidden="true">
          <img
            src="/white-background-with-transparent-right-bottom-for-animation.svg"
            alt=""
            className="site-header-scene-art site-header-wipe"
          />
        </div>

        <div className="site-header-layer site-header-layer-logo" aria-hidden="true">
          <img
            src="/ranger-auto-logo-for-animation.svg"
            alt=""
            className="site-header-scene-art site-header-scene-art-logo site-header-wipe site-header-wipe-delay-1"
          />
        </div>

        <div className="site-header-layer site-header-layer-stripes" aria-hidden="true">
          <img
            src="/yellow-and-blue-stripes-for-animation.svg"
            alt=""
            className="site-header-scene-art site-header-wipe site-header-wipe-delay-3"
          />
        </div>

        <div className="site-header-tagline-slot" aria-hidden="true">
          <img
            src="/buy-sell-repair-cropped.svg"
            alt=""
            className="site-header-tagline-art site-header-wipe site-header-wipe-delay-2"
          />
        </div>

        <div className="site-header-brand-slot" aria-hidden="true">
          <img
            src="/ranger-auto-logo-cropped.svg"
            alt=""
            className="site-header-brand-art site-header-wipe site-header-wipe-delay-1"
          />
        </div>

        <div className="site-header-ui shell">
          <div className="site-header-ui-row">
            <Link href="/" className="site-header-brand-link">
              <span className="sr-only">Ranger Auto home</span>
            </Link>

            {isContactPage ? (
              <Link href="/" className="header-nav-link site-header-nav-entry">
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
                <Link href="/contact" className="header-nav-link site-header-nav-entry">
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
