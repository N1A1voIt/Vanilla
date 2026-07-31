interface VanillaLeafProps {
  className?: string;
  position?: 'left' | 'right';
}

export function VanillaLeaf({ className = '', position = 'left' }: VanillaLeafProps) {
  return (
    <svg
      className={className}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: position === 'right' ? 'scaleX(-1)' : 'none',
      }}
    >
      <path
        d="M20 60C20 60 30 40 45 35C60 30 70 35 75 45C80 55 78 70 70 80C62 90 50 95 40 90C30 85 20 75 20 60Z"
        stroke="#c9a86f"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M25 65C25 65 32 50 42 48C52 46 58 50 60 58"
        stroke="#c9a86f"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <circle cx="35" cy="55" r="2" fill="#c9a86f" opacity="0.2" />
      <circle cx="50" cy="50" r="1.5" fill="#c9a86f" opacity="0.25" />
      <circle cx="60" cy="65" r="2.5" fill="#c9a86f" opacity="0.15" />
    </svg>
  );
}
