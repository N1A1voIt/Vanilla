interface VanillaPodProps {
  className?: string;
}

export function VanillaPod({ className = '' }: VanillaPodProps) {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 15C30 15 35 12 40 15C45 18 48 25 48 35C48 45 46 55 42 60C38 65 32 67 28 65C24 63 22 58 22 50C22 42 25 25 30 15Z"
        stroke="#c9a86f"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M32 20L32 58"
        stroke="#c9a86f"
        strokeWidth="1"
        opacity="0.2"
        strokeDasharray="2 3"
      />
      <circle cx="32" cy="30" r="1" fill="#c9a86f" opacity="0.4" />
      <circle cx="32" cy="40" r="1" fill="#c9a86f" opacity="0.4" />
      <circle cx="32" cy="50" r="1" fill="#c9a86f" opacity="0.4" />
    </svg>
  );
}
