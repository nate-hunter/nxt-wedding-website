# Styles

## Color Pallette:

```css
--color-sunset-gold-hsl: hsl(37, 68%, 71%);
--color-sunset-gold-hex: #e8c184;
--color-buttery-yellow: hsl(52, 97%, 85%);
--color-buttery-yellow: #fef4b5;
--color-sage-green: hsl(98, 12%, 59%);
--color-sage-green: #93a38a;
--color-ocean-midnight: hsl(249, 14%, 18%);
--color-ocean-midnight: #2a2835;
```

## Color Schemes:

```css
.sunset-gold {
  /* PRIMARY */
  color: #e8c184;
  color: hsla(37, 68%, 71%, 1);
  /* COMPLIMENTARY */
  color: #e8c184;
  color: #84abe8;
  /* ANALOGOUS */
  color: #e88f84;
  color: #e8c184;
  color: #dde884;
  /* SPLIT COMPLEMENTARY */
  color: #8f84e8;
  color: #e8c184;
  color: #84dde8;
  /* TRIADIC */
  color: #c184e8;
  color: #e8c184;
  color: #84e8c1;
  /* TETRADIC */
  color: #e884ab;
  color: #e8c184;
  color: #84e8c1;
  color: #84abe8;
  /* MONOCHROMATIC */
  color: #dca144;
  color: #e0ab59;
  color: #e4b66f;
  color: #e8c184;
  color: #eccc99;
  color: #f0d7af;
  color: #f4e1c4;
}

.buttery-yellow {
  /* PRIMARY */
  color: #fef4b5;
  color: hsl(52, 97%, 85%);
  /* COMPLIMENTARY */
  color: #fef4b5;
  color: #b5bffe;
  /* ANALOGOUS */
  color: #fed0b5;
  color: #fef4b5;
  color: #e4feb5;
  /* SPLIT COMPLEMENTARY */
  color: #d0b5fe;
  color: #fef4b5;
  color: #b5e4fe;
  /* TRIADIC */
  color: #f4b5fe;
  color: #fef4b5;
  color: #b5fef4;
  /* TETRADIC */
  color: #feb5bf;
  color: #fef4b5;
  color: #b5fef4;
  color: #b5bffe;
  /* MONOCHROMATIC */
  color: #fde96a;
  color: #fded83;
  color: #fef09c;
  color: #fef4b5;
  color: #fef8ce;
  color: #fffbe7;
}

/* .sage-green {} */

/* .ocean-midnight {} */
```

## Thoughts / Questions:

Alternate primary colors for light / dark mode? E.g:

- Light:
  - `--color-sunset-gold: hsla(37, 68%, 71%, 1);`
- Dark:
  - `--color-buttery-yellow: hsla(52, 97%, 85%, 1);`

Use "ocean midnight" for "default"?

- Previous: `--color-default: hsla(218, 76%, 15%, 0.09);`
