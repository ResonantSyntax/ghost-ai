export default function GhostSVG({ size = 40, color = '#1c1c1c' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ghost body — dome top, straight sides, 3 scalloped bumps at bottom */}
      <path
        d={`
          M 10 55
          L 10 45
          Q 10 5 50 5
          Q 90 5 90 45
          L 90 55
          L 90 90
          Q 90 100 80 95
          Q 70 88 66 95
          Q 60 105 50 100
          Q 40 105 34 95
          Q 30 88 20 95
          Q 10 100 10 90
          Z
        `}
        fill={color}
      />
      {/* Left eye */}
      <ellipse cx="36" cy="50" rx="8" ry="9" fill="white" opacity="0.88" />
      {/* Right eye */}
      <ellipse cx="64" cy="50" rx="8" ry="9" fill="white" opacity="0.88" />
    </svg>
  )
}
