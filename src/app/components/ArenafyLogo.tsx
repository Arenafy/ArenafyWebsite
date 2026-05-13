interface ArenafyLogoProps {
  className?: string;
  color?: string;
}

export function ArenafyLogo({ className = '', color = 'currentColor' }: ArenafyLogoProps) {
  return (
    <svg
      viewBox="0 0 1400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon - Layered geometric shape */}
      <g transform="translate(0, 20)">
        {/* Top hexagon outline */}
        <path
          d="M80 30 L180 30 L230 120 L180 210 L80 210 L30 120 Z"
          stroke={color}
          strokeWidth="24"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Middle hexagon outline */}
        <path
          d="M75 75 L185 75 L235 120 L185 165 L75 165 L25 120 Z"
          stroke={color}
          strokeWidth="24"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>

      {/* Text "ARENAFY" */}
      <g fill={color} transform="translate(300, 0)">
        {/* A */}
        <path d="M40 220 L40 200 L80 80 L120 80 L160 200 L160 220 L130 220 L130 180 L70 180 L70 220 Z M80 150 L120 150 L100 100 Z" />

        {/* R */}
        <path d="M200 220 L200 80 L280 80 Q320 80 320 120 Q320 145 290 155 L330 220 L295 220 L260 160 L230 160 L230 220 Z M230 135 L280 135 Q290 135 290 120 Q290 105 280 105 L230 105 Z" />

        {/* E */}
        <path d="M370 220 L370 80 L460 80 L460 105 L400 105 L400 135 L450 135 L450 160 L400 160 L400 195 L460 195 L460 220 Z" />

        {/* N */}
        <path d="M500 220 L500 80 L530 80 L580 180 L580 80 L610 80 L610 220 L580 220 L530 120 L530 220 Z" />

        {/* A */}
        <path d="M660 220 L660 200 L700 80 L740 80 L780 200 L780 220 L750 220 L750 180 L690 180 L690 220 Z M700 150 L740 150 L720 100 Z" />

        {/* F */}
        <path d="M820 220 L820 80 L910 80 L910 105 L850 105 L850 135 L900 135 L900 160 L850 160 L850 220 Z" />

        {/* Y */}
        <path d="M950 220 L950 160 L920 80 L955 80 L975 135 L995 80 L1030 80 L1000 160 L1000 220 Z" />
      </g>
    </svg>
  );
}
