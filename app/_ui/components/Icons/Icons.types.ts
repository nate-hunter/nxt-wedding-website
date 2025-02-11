import { SVGProps } from 'react';

import { type StyleVariant, type StyleSize } from '@/styles/styles.types';

export type SVGIconProps = SVGProps<SVGSVGElement> & {
  size: StyleSize | number | string;
  color: StyleVariant | string;
};
