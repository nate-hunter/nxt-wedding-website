type ClassNameBuilderArgs = {
  [key: string]: string | boolean | number;
};

/** Builds an element's 'className' */
export function cN(initialClassName: string, args: ClassNameBuilderArgs, prefix?: string) {
  let className = initialClassName;
  const nonAppliedValues = new Set(['default', 'normal', false, 0]);
  const withPrefix = prefix ? `${prefix}-` : '';
  for (const [styleProperty, styleValue] of Object.entries(args)) {
    if (nonAppliedValues.has(styleValue)) continue;
    if (typeof styleValue === 'boolean') {
      className = `${className} ${withPrefix}${styleProperty}`.trim();
      continue;
    }
    className = `${className} ${withPrefix}${styleValue}-${styleProperty}`.trim();
  }
  return className;
}
