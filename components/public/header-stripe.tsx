export function HeaderStripe() {
  return (
    <svg
      aria-hidden="true"
      className="header-stripes-svg"
      viewBox="0 0 1600 18"
      preserveAspectRatio="none"
    >
      <rect width="1600" height="18" fill="#ffffff" />
      <path
        d="M0 0H1600V5H390L368 18H0V0Z"
        fill="#f5c319"
      />
      <path
        d="M0 7H1600V11H340L360 7H0Z"
        fill="#0f4c97"
      />
    </svg>
  );
}
