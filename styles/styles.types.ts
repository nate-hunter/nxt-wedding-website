export type StyleVariantSemantic =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';
export type StyleVariantApp = 'sunset' | 'buttery' | 'sage' | 'midnight';
export type StyleVariant = StyleVariantSemantic & StyleVariantApp;

export type StyleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
