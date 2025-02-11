import { type SVGIconProps } from '@/app/_ui/components/Icons';
import { COLOR_SUNSET_GOLD } from '@/styles/styles.constants';

type GinkoIconProps = Partial<SVGIconProps>;

export function GinkoIcon({ size = '4rem', color = COLOR_SUNSET_GOLD, ...props }: GinkoIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M36.668 29.0328C36.5597 29.8249 36.6481 30.1538 35.9656 30.4036C36.1619 31.8486 35.8457 32.5543 35.6148 33.0281L37.5612 34.0054C38.0652 32.7594 38.2607 32.0578 37.9929 30.7753C38.1067 29.9634 37.6983 29.6079 36.668 29.0328Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M26.0809 10.5735C26.1309 10.5235 26.1324 10.4449 26.0843 10.3978C26.0362 10.3507 25.9566 10.3531 25.9066 10.4031L26.0809 10.5735ZM25.9066 10.4031C25.8737 10.436 25.8601 10.475 25.8544 10.5052C25.8486 10.5356 25.849 10.5664 25.8516 10.5945C25.8569 10.6508 25.8737 10.7171 25.8973 10.7897C25.945 10.936 26.0288 11.1314 26.1416 11.3674C26.3679 11.8407 26.7189 12.4936 27.1556 13.2778C28.027 14.8429 29.2541 16.9561 30.5215 19.2191C31.7917 21.4872 33.1092 23.9177 34.1745 26.1404C35.2413 28.3662 36.0498 30.3727 36.3092 31.7962L36.5566 31.7405C36.291 30.2828 35.4697 28.2513 34.4026 26.025C33.334 23.7955 32.0136 21.3598 30.7428 19.0906C29.4692 16.8164 28.2521 14.7211 27.3771 13.1498C26.9406 12.3657 26.5927 11.7183 26.3698 11.2522C26.2581 11.0185 26.1797 10.8343 26.1369 10.703C26.1153 10.6367 26.1047 10.5896 26.1019 10.5594C26.1005 10.5443 26.1015 10.5386 26.1013 10.5394C26.1012 10.5399 26.0982 10.5562 26.0809 10.5735L25.9066 10.4031Z"
        fill={color}
      />
      <path
        d="M16.9105 5.96738C21.8613 9.21909 23.6017 11.1648 24.6745 14.8758M12.5879 11.1212C28.6702 18.0049 30.8707 23.95 36.8517 32.5177"
        stroke={color}
        strokeWidth="0.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.4864 10.4891C43.71 17.3477 41.2097 22.6643 37.5759 32.8842C41.3499 21.1534 42.2746 15.0843 49.4134 7.4298M42.4894 3.99585C38.36 15.7405 38.2559 22.3264 37.441 33.8936M37.441 33.8936C37.5612 22.7898 37.9952 16.6465 36.2259 5.11511M37.441 33.8936C36.5727 22.8274 35.8483 16.6253 31.8821 5.57253M37.441 33.8936C36.6312 31.4146 36.9849 30.6507 34.2774 26.1641C33.5321 24.8858 32.4064 23.4537 29.0803 19.6248C28.6911 19.1768 28.3394 18.6934 28.0575 18.1702C25.7907 13.9635 24.8255 9.82546 22 7M37.441 33.8936C30.0251 23.2649 26.1427 17.1223 10.6639 11.8813M37.441 33.8936C28.093 25.2182 23.9473 19.1596 9.30015 16.2591"
        stroke={color}
        strokeWidth="0.25"
        strokeLinecap="round"
      />
      <path
        d="M58.4852 13.4852C47.8868 17.717 43.5156 22.463 37.7302 33.7132M37.7302 33.7132C41.0718 21.3342 47.3537 17.0567 55.5675 11.9183M37.7302 33.7132C39.8606 23.2294 42.4145 17.6565 50.8244 8.56659M37.7302 33.7132C38.5103 28.4158 39.6022 24.2258 42.1318 18.258C43.9683 10.3774 44.7306 8.49822 47.7434 6.37283M37.7302 33.7132C38.5273 22.6624 39.99 16.4822 44.9887 5.9937M37.7302 33.7132C37.6396 19.8258 38.4877 5.16825 40.3047 2.79832M37.7302 33.7132C37.3295 23.076 36.6391 17.0728 33.874 6.24705M37.7302 33.7132C35.3395 27.9871 31.722 16.6189 28.4932 10.9879M37.7302 33.7132C37.9035 31.7685 28.204 20.4916 25.5 16.5M37.7302 33.7132C25.6451 20.8288 19.2843 15.4695 9.81883 14.3625M37.7302 33.7132C24.9451 23.7983 17.4915 17.4551 8.44813 17.8212M37.7302 33.7132C27.6051 26.4508 23.5085 20.6761 6.94213 20.3502M15.2153 7.97066C20.6043 11.3832 24.0642 13.3589 25.5 16.5M25.5 16.5C20.9754 14.9025 17.8097 12.5884 13.7498 10.1969"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M59.7066 15.2443L59 14.5L58.9851 13.9849C59.0595 14.3993 56.9539 15.7511 55.6693 16.4608C56.9465 15.8273 58.9769 14.8778 59.7066 15.2443Z"
        fill={color}
      />
      <path
        d="M37.7234 32.7945C43.2093 23.9939 48.5212 19.8908 55.6693 16.4608M55.6693 16.4608C56.9465 15.8273 58.9769 14.8778 59.7066 15.2443L59 14.5L58.9851 13.9849C59.0595 14.3993 56.9539 15.7511 55.6693 16.4608Z"
        stroke={color}
        strokeWidth="0.25"
        strokeLinecap="round"
      />
      <path
        d="M39.9321 30.8335C38.1024 32.0681 36.8771 32.3483 34.0076 31.4664L36.8184 33.7399L39.9321 30.8335Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M29.8069 5.60432C34.4163 15.4217 36.0208 21.2663 37.5474 32.1668C37.0645 30.5252 36.1394 27.7394 35.2874 25.2237C34.109 21.7444 33.5928 17.9987 32.2875 14.5695C31.455 12.3821 30.3477 10.3946 29.4928 9.48943"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
      />
      <path
        d="M41.2126 49.412C40.8517 47.9128 40.5299 46.5823 40.2417 45.3306C40.0293 44.5398 39.8505 43.7221 39.7018 42.8719C39.1541 40.2214 38.756 37.6593 38.4465 34.1809C38.656 33.666 38.8686 33.1859 39.0877 32.7325C39.0918 32.434 39.0971 32.1319 39.1035 31.8263C38.646 32.6762 38.1974 33.5762 37.7508 34.5315C37.2003 33.8586 36.651 33.2226 36.0998 32.6215L35.2818 33.0408C35.4711 33.3371 35.6295 33.6416 35.751 33.9581C36.086 34.4472 36.4282 35.1102 36.7936 35.9626C38.034 37.8818 38.871 39.7009 39.1396 41.4921C39.8389 43.6687 40.2565 46.2713 41.2126 49.412Z"
        fill={color}
      />
      <path
        d="M37.7508 34.5315C38.1974 33.5762 38.646 32.6762 39.1035 31.8263C39.1087 31.5775 39.1147 31.3264 39.1215 31.0728L36.0998 32.6215C36.651 33.2226 37.2003 33.8586 37.7508 34.5315Z"
        fill={color}
      />
      <path
        d="M50.6407 59.629C46.723 56.9353 44.1576 54.1346 41.2126 49.412C40.2565 46.2713 39.8389 43.6687 39.1396 41.4921C40.59 46.8881 39.0543 52.7291 54.8189 62.5794C55.1927 62.813 55.5762 63.0488 55.9697 63.2869C55.6289 63.0532 55.2814 62.8204 54.9322 62.5888C53.401 61.5733 51.8353 60.5803 50.6407 59.629Z"
        fill={color}
      />
      <path
        d="M35.751 33.9581C35.6295 33.6416 35.4711 33.3371 35.2818 33.0408L34.9157 32.5236C35.8104 33.4247 36.2511 35.1234 36.7936 35.9626C36.4282 35.1102 36.086 34.4472 35.751 33.9581Z"
        fill={color}
      />
      <path
        d="M38.4465 34.1809C38.756 37.6593 39.1541 40.2214 39.7018 42.8719C39.1904 39.9488 39.0345 36.6424 39.0877 32.7325C38.8686 33.1859 38.656 33.666 38.4465 34.1809Z"
        fill={color}
      />
      <path
        d="M55.9697 63.2869C55.5762 63.0488 55.1927 62.813 54.8189 62.5794L54.7806 62.4742C54.8865 62.581 54.9692 62.6864 55.0308 62.803C55.1934 63.1108 54.9707 63.761 55.288 63.9104V63.9104C55.3823 63.9548 55.5388 63.9419 55.6451 63.9411C55.9229 63.9388 56.0132 63.8061 56.1512 63.664C56.3388 63.4708 56.687 63.3519 56.73 63.0921V63.0921C56.7762 62.8135 56.4357 62.6433 56.1587 62.5975C55.7556 62.5308 55.2989 62.5695 54.9855 62.4319L55.5373 62.6388L54.9322 62.5888C55.2814 62.8204 55.6289 63.0532 55.9697 63.2869Z"
        fill={color}
      />
      <path
        d="M56.0237 62.8832C55.8774 62.8027 55.1286 62.5114 54.9855 62.4319M41.2126 49.412C40.8517 47.9128 40.5299 46.5823 40.2417 45.3306M41.2126 49.412C40.2565 46.2713 39.8389 43.6687 39.1396 41.4921M41.2126 49.412C44.1576 54.1346 46.723 56.9353 50.6407 59.629M60.2637 16.5932C60.7778 17.031 60.9031 17.2803 60.6288 17.746C60.6288 17.746 60.2801 18.4126 58.8861 19.1329C57.492 19.8532 47.2458 22.8601 44.3695 25.7915C41.909 28.2991 40.3845 30.0488 39.0877 32.7325M60.2637 16.5932C60.3259 15.6356 59.9847 14.9837 58.8379 14.6383C58.9849 13.4853 58.6687 12.9914 58.4389 12.7683C57.8543 12.2006 57.4302 12.1158 56.4796 11.892C55.7377 11.7684 55.4257 11.6203 55.0068 11.2599C54.1401 10.5203 53.4831 10.1836 52.5017 9.80835C52.2708 9.72002 52.1553 9.67586 52.0723 9.62225C51.9822 9.56411 51.945 9.53183 51.8749 9.45138C51.8103 9.37718 51.7323 9.23603 51.5763 8.95373C51.186 8.24744 50.6558 7.8509 49.5609 7.33985C48.6069 6.36051 47.6233 5.9226 46.4186 5.8331C45.3958 5.75711 44.8844 5.71912 44.6566 5.64415C44.3483 5.54268 44.3546 5.54599 44.0994 5.35155C43.9109 5.2079 43.6195 4.83722 43.0366 4.09588C42.3511 3.22408 41.5909 2.82369 40.3025 2.67322C39.9799 2.63554 39.8185 2.6167 39.5729 2.6476C39.3897 2.67066 39.1099 2.75208 38.9408 2.83152C38.7142 2.93802 38.5556 3.06414 38.2383 3.31637C36.4345 4.7502 34.9828 6.08923 33.9011 6.0455C30.3449 4.85121 29.4575 4.90992 29.1167 5.95554C29.0958 6.01973 29.0853 6.05183 29.0603 6.20392C29.0455 6.2935 29.0317 6.5208 29.0355 6.61058C29.0421 6.76301 29.0597 6.8501 29.095 7.02426C29.4403 8.7281 29.8129 9.91754 28.7316 10.8115C28.6859 10.8493 28.663 10.8682 28.5902 10.9112C28.5482 10.9361 28.4325 10.989 28.3864 11.0045C28.3067 11.0312 28.2728 11.0368 28.2051 11.048C26.4111 11.3447 25.629 9.98841 25.2883 9.31386C24.6924 8.13407 24.3628 7.46803 23.1058 7.19437C21.6084 6.85119 20.9119 6.57714 19.9319 6.16041C19.7693 6.0913 19.6881 6.05674 19.6002 6.02893C19.5267 6.00564 19.4378 5.98355 19.3614 5.9696C19.2702 5.95295 19.192 5.94611 19.0355 5.93242C16.98 5.75265 16.1506 5.98837 15.4787 6.97218C15.1955 7.58089 14.6464 8.11411 14.0519 9.00754C13.9958 9.09198 13.9677 9.13419 13.9416 9.18426C13.9163 9.23285 13.9001 9.27034 13.8821 9.32174C13.8636 9.3747 13.8453 9.45375 13.8088 9.61186C13.5681 10.6539 13.0189 11.1227 11.5005 11.4359C11.3164 11.4739 11.2243 11.4929 11.1531 11.5129C11.0893 11.5308 11.0278 11.5512 10.9657 11.5751C10.8964 11.6018 10.8448 11.6259 10.7415 11.6741C9.43614 12.284 9.17026 12.726 9.41341 13.5128C9.78848 14.9971 9.69578 15.6906 9.13026 16.5325C9.10332 16.5726 9.08986 16.5927 9.0589 16.6342C9.03331 16.6686 9.00055 16.7097 8.97275 16.7424C8.93912 16.782 8.89338 16.8308 8.80189 16.9284C8.26491 17.5011 8.20559 17.7695 8.13753 18.2041C7.87573 19.1782 7.53074 19.6884 6.40179 20.51C4.74967 21.9051 5.40887 23.4348 9.50323 23.5219C19.072 23.7326 22.8589 24.8698 31.4535 29.2143C32.9837 30.5611 34.4388 31.7207 35.2818 33.0408M60.2637 16.5932C48.5712 20.206 43.4406 23.7685 39.1035 31.8263M5.69949 21.8807C20.793 22.7132 28.6059 24.4476 36.0998 32.6215M40.2417 45.3306C40.0293 44.5398 39.8505 43.7221 39.7018 42.8719M40.2417 45.3306C40.0469 44.4843 39.8675 43.6741 39.7018 42.8719M40.2417 45.3306C41.7085 50.7899 44.78 54.9616 50.6407 59.629M39.7018 42.8719C39.1541 40.2214 38.756 37.6593 38.4465 34.1809C38.656 33.666 38.8686 33.1859 39.0877 32.7325M39.7018 42.8719C39.1904 39.9488 39.0345 36.6424 39.0877 32.7325M39.0877 32.7325C39.0918 32.434 39.0971 32.1319 39.1035 31.8263M39.1035 31.8263C38.646 32.6762 38.1974 33.5762 37.7508 34.5315C37.2003 33.8586 36.651 33.2226 36.0998 32.6215M39.1035 31.8263C39.1087 31.5775 39.1147 31.3264 39.1215 31.0728L36.0998 32.6215M36.0998 32.6215L35.2818 33.0408M35.2818 33.0408C35.4711 33.3371 35.6295 33.6416 35.751 33.9581C36.086 34.4472 36.4282 35.1102 36.7936 35.9626M35.2818 33.0408L34.9157 32.5236C35.8104 33.4247 36.2511 35.1234 36.7936 35.9626M36.7936 35.9626C38.034 37.8818 38.871 39.7009 39.1396 41.4921M36.7936 35.9626C37.369 37.3052 38.3869 39.1493 39.1396 41.4921M39.1396 41.4921C40.59 46.8881 39.0543 52.7291 54.8189 62.5794M50.6407 59.629C51.8353 60.5803 53.401 61.5733 54.9322 62.5888M50.6407 59.629C52.0794 60.6182 53.0963 61.3817 54.9855 62.4319M54.8189 62.5794C55.1927 62.813 55.5762 63.0488 55.9697 63.2869C55.6289 63.0532 55.2814 62.8204 54.9322 62.5888M54.8189 62.5794L54.7806 62.4742C54.8865 62.581 54.9692 62.6864 55.0308 62.803C55.1934 63.1108 54.9707 63.761 55.288 63.9104V63.9104C55.3823 63.9548 55.5388 63.9419 55.6451 63.9411C55.9229 63.9388 56.0132 63.8061 56.1512 63.664C56.3388 63.4708 56.687 63.3519 56.73 63.0921V63.0921C56.7762 62.8135 56.4357 62.6433 56.1587 62.5975C55.7556 62.5308 55.2989 62.5695 54.9855 62.4319M54.8189 62.5794L54.9322 62.5888M54.9855 62.4319L55.5373 62.6388L54.9322 62.5888"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
