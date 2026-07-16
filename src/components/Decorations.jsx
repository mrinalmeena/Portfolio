import React from 'react';

/* ── Butterfly Doodle ───────────────────────────────────── */
export function Butterfly({ className = '' }) {
  return (
    <svg
      className={`${className}`}
      width="60"
      height="50"
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left wing */}
      <path
        d="M30 25 C20 10, 5 5, 8 20 C10 30, 20 28, 30 25Z"
        fill="#F4C7B8"
        opacity="0.7"
        stroke="#7A2E2E"
        strokeWidth="0.8"
      />
      <path
        d="M30 25 C22 30, 10 40, 15 35 C20 30, 25 28, 30 25Z"
        fill="#F8DDD0"
        opacity="0.6"
        stroke="#7A2E2E"
        strokeWidth="0.8"
      />
      {/* Right wing */}
      <path
        d="M30 25 C40 10, 55 5, 52 20 C50 30, 40 28, 30 25Z"
        fill="#F4C7B8"
        opacity="0.7"
        stroke="#7A2E2E"
        strokeWidth="0.8"
      />
      <path
        d="M30 25 C38 30, 50 40, 45 35 C40 30, 35 28, 30 25Z"
        fill="#F8DDD0"
        opacity="0.6"
        stroke="#7A2E2E"
        strokeWidth="0.8"
      />
      {/* Body */}
      <line x1="30" y1="15" x2="30" y2="38" stroke="#7A2E2E" strokeWidth="1.2" strokeLinecap="round" />
      {/* Antennae */}
      <path d="M30 15 C27 8, 24 6, 22 4" stroke="#7A2E2E" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M30 15 C33 8, 36 6, 38 4" stroke="#7A2E2E" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <circle cx="22" cy="4" r="1.2" fill="#7A2E2E" />
      <circle cx="38" cy="4" r="1.2" fill="#7A2E2E" />
    </svg>
  );
}

/* ── Watercolor Blob ────────────────────────────────────── */
export function WatercolorBlob({ className = '', color = '#F4C7B8', size = 200 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="watercolor-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>
      <path
        d="M100 20 C140 15, 180 50, 175 90 C170 130, 150 170, 110 180 C70 190, 25 165, 20 120 C15 75, 60 25, 100 20Z"
        fill={color}
        opacity="0.35"
        filter="url(#watercolor-blur)"
      />
      <path
        d="M105 35 C135 30, 165 60, 160 95 C155 130, 135 155, 105 162 C75 169, 40 148, 38 115 C36 82, 75 40, 105 35Z"
        fill={color}
        opacity="0.25"
      />
    </svg>
  );
}

/* ── Hanging Plant ──────────────────────────────────────── */
export function HangingPlant({ className = '' }) {
  return (
    <svg
      className={className}
      width="100"
      height="160"
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hanging string */}
      <path d="M50 0 L50 40" stroke="#8B7355" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Pot */}
      <path d="M32 40 L38 75 L62 75 L68 40 Z" fill="#C4956A" stroke="#A07850" strokeWidth="1" />
      <rect x="30" y="36" width="40" height="6" rx="2" fill="#B8845A" />
      {/* Leaves cascading down */}
      <path d="M50 60 C35 70, 20 85, 15 110" stroke="#4B6B3F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M15 110 C10 100, 5 95, 8 85" fill="#5A7E4D" opacity="0.8" />
      <ellipse cx="15" cy="108" rx="8" ry="5" fill="#4B6B3F" transform="rotate(-30 15 108)" opacity="0.9" />
      <ellipse cx="22" cy="95" rx="7" ry="4" fill="#5A7E4D" transform="rotate(-15 22 95)" opacity="0.8" />
      <ellipse cx="30" cy="82" rx="7" ry="4" fill="#6B8F5A" transform="rotate(-5 30 82)" opacity="0.7" />

      <path d="M50 60 C60 75, 70 90, 75 120" stroke="#4B6B3F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="75" cy="118" rx="8" ry="5" fill="#4B6B3F" transform="rotate(25 75 118)" opacity="0.9" />
      <ellipse cx="68" cy="102" rx="7" ry="4" fill="#5A7E4D" transform="rotate(10 68 102)" opacity="0.8" />
      <ellipse cx="60" cy="88" rx="6" ry="4" fill="#6B8F5A" transform="rotate(5 60 88)" opacity="0.7" />

      {/* Center leaves */}
      <path d="M50 55 C45 65, 42 80, 45 100" stroke="#5A7E4D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="45" cy="98" rx="6" ry="4" fill="#4B6B3F" transform="rotate(-10 45 98)" opacity="0.85" />

      <path d="M50 55 C55 65, 58 80, 55 95" stroke="#5A7E4D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="55" cy="93" rx="6" ry="4" fill="#5A7E4D" transform="rotate(10 55 93)" opacity="0.85" />

      {/* Small drip leaves */}
      <ellipse cx="20" cy="115" rx="5" ry="3" fill="#4B6B3F" transform="rotate(-40 20 115)" opacity="0.6" />
      <ellipse cx="72" cy="125" rx="5" ry="3" fill="#4B6B3F" transform="rotate(35 72 125)" opacity="0.6" />
    </svg>
  );
}

/* ── Wavy Line Doodle ───────────────────────────────────── */
export function WavyLine({ className = '' }) {
  return (
    <svg
      className={className}
      width="150"
      height="30"
      viewBox="0 0 150 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 15 C15 5, 25 25, 35 15 C45 5, 55 25, 65 15 C75 5, 85 25, 95 15 C105 5, 115 25, 125 15 C135 5, 145 25, 145 15"
        stroke="#F4C7B8"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/* ── Grass Silhouette ───────────────────────────────────── */
export function GrassSilhouette({ className = '' }) {
  return (
    <svg
      className={`w-full ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background grass layer */}
      <path
        d="M0 120 L0 80 C10 75, 15 40, 20 65 C25 45, 30 30, 35 60 C40 35, 45 50, 50 55
           C55 25, 60 45, 65 50 C70 30, 75 20, 80 55 C85 35, 90 50, 95 45
           C100 20, 105 40, 110 50 C115 30, 120 45, 125 55 C130 25, 135 40, 140 50
           C145 30, 150 20, 155 55 C160 35, 165 50, 170 45 C175 25, 180 40, 185 55
           C190 30, 195 45, 200 50 C205 20, 210 40, 215 55 C220 30, 225 45, 230 50
           C235 25, 240 40, 245 55 C250 30, 255 20, 260 50 C265 35, 270 45, 275 55
           C280 25, 285 40, 290 50 C295 30, 300 45, 305 55 C310 20, 315 35, 320 50
           C325 30, 330 45, 335 55 C340 25, 345 40, 350 50 C355 30, 360 20, 365 55
           C370 35, 375 50, 380 45 C385 25, 390 40, 395 55 C400 30, 405 45, 410 50
           C415 20, 420 40, 430 55 C440 30, 450 45, 460 50 C470 25, 480 40, 490 55
           C500 30, 510 20, 520 50 C530 35, 540 45, 550 55 C560 25, 570 40, 580 50
           C590 30, 600 45, 610 55 C620 20, 630 35, 640 50 C650 30, 660 45, 670 55
           C680 25, 690 40, 700 50 C710 30, 720 20, 730 55 C740 35, 750 50, 760 45
           C770 25, 780 40, 790 55 C800 30, 810 45, 820 50 C830 20, 840 40, 850 55
           C860 30, 870 45, 880 50 C890 25, 900 40, 910 55 C920 30, 930 20, 940 50
           C950 35, 960 45, 970 55 C980 25, 990 40, 1000 50 C1010 30, 1020 45, 1030 55
           C1040 20, 1050 35, 1060 50 C1070 30, 1080 45, 1090 55 C1100 25, 1110 40, 1120 50
           C1130 30, 1140 20, 1150 55 C1160 35, 1170 50, 1180 45 C1190 25, 1200 40, 1210 55
           C1220 30, 1230 45, 1240 50 C1250 20, 1260 40, 1270 55 C1280 30, 1290 45, 1300 50
           C1310 25, 1320 40, 1330 55 C1340 30, 1350 20, 1360 50 C1370 35, 1380 45, 1390 55
           C1400 25, 1410 40, 1420 50 C1430 35, 1435 45, 1440 55 L1440 120 Z"
        fill="#3A5A2E"
      />
      {/* Foreground grass layer - slightly lighter, taller blades */}
      <path
        d="M0 120 L0 90 C8 85, 12 50, 18 75 C22 55, 28 40, 32 70 C38 50, 42 60, 48 65
           C52 35, 58 55, 62 60 C68 40, 72 30, 78 65 C82 45, 88 60, 92 55
           C98 30, 102 50, 108 60 C112 40, 118 55, 122 65 C128 35, 132 50, 138 60
           C142 40, 148 30, 152 65 C158 45, 162 60, 168 55 C172 35, 178 50, 182 65
           C188 40, 192 55, 198 60 C202 30, 208 50, 212 65 C218 40, 222 55, 228 60
           C232 35, 238 50, 242 65 C248 40, 252 30, 258 60 C262 45, 268 55, 272 65
           C278 35, 282 50, 288 60 C292 40, 298 55, 302 65 C308 30, 312 45, 318 60
           C322 40, 328 55, 332 65 C338 35, 342 50, 348 60 C352 40, 358 30, 362 65
           C368 45, 372 60, 378 55 C382 35, 388 50, 392 65 C398 40, 402 55, 408 60
           C418 30, 428 50, 438 65 C448 40, 458 55, 468 60 C478 35, 488 50, 498 65
           C508 40, 518 30, 528 60 C538 45, 548 55, 558 65 C568 35, 578 50, 588 60
           C598 40, 608 55, 618 65 C628 30, 638 45, 648 60 C658 40, 668 55, 678 65
           C688 35, 698 50, 708 60 C718 40, 728 30, 738 65 C748 45, 758 60, 768 55
           C778 35, 788 50, 798 65 C808 40, 818 55, 828 60 C838 30, 848 50, 858 65
           C868 40, 878 55, 888 60 C898 35, 908 50, 918 65 C928 40, 938 30, 948 60
           C958 45, 968 55, 978 65 C988 35, 998 50, 1008 60 C1018 40, 1028 55, 1038 65
           C1048 30, 1058 45, 1068 60 C1078 40, 1088 55, 1098 65 C1108 35, 1118 50, 1128 60
           C1138 40, 1148 30, 1158 65 C1168 45, 1178 60, 1188 55 C1198 35, 1208 50, 1218 65
           C1228 40, 1238 55, 1248 60 C1258 30, 1268 50, 1278 65 C1288 40, 1298 55, 1308 60
           C1318 35, 1328 50, 1338 65 C1348 40, 1358 30, 1368 60 C1378 45, 1388 55, 1398 65
           C1408 35, 1418 50, 1428 60 C1435 45, 1438 55, 1440 65 L1440 120 Z"
        fill="#4B6B3F"
      />
    </svg>
  );
}
