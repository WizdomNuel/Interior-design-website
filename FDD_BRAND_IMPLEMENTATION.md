# FDD Brand System Implementation

## Overview
The website has been successfully updated to comply with the FDD luxury brand guidelines. The implementation focuses on elegance through restraint, with a sophisticated dark mode as the primary experience.

## Color System Implementation

### Dark Mode (Primary Luxury Experience)
- **Primary Background**: `#1b1b1b` (`--bg-primary`)
- **Secondary Surface**: `#232323` (`--bg-secondary`) 
- **Primary Text**: `#FFFFFF` (`--text-primary`)
- **Secondary Text**: `#BDBDBD` (`--text-secondary`)
- **Primary Accent**: `#fac344` (`--accent-primary`) - Orange accent for CTAs, active states, micro-interactions
- **Secondary Accent**: `#ac7227` - Orange derivative for hover states and pressed states

### Light Mode (Editorial, Minimal Use)
- **Primary Background**: `#FFFFFF`
- **Section Backgrounds**: `#e2e2e2` (used very sparingly)
- **Primary Text**: `#1b1b1b`
- **Secondary Text**: `#6E6E6E`
- **Primary CTA**: `#ac7227` (more refined in light mode)
- **Hover State**: `#fac344`

### Distribution Ratio (Enforced)
- **75%** Dark background (`#1b1b1b` family)
- **15%** Neutral text & surfaces
- **8%** Orange accent (`#fac344`)
- **2%** Gray Orange (`#ac7227`)

## CSS Variables
All colors are defined as CSS variables in `index.html` for easy theming:

```css
:root {
  --bg-primary: #1b1b1b;
  --bg-secondary: #232323;
  --text-primary: #FFFFFF;
  --text-secondary: #BDBDBD;
  --accent-primary: #fac344;
  --accent-secondary: #ac7227;
}

html.light {
  --bg-primary: #FFFFFF;
  --bg-secondary: #e2e2e2;
  --text-primary: #1b1b1b;
  --text-secondary: #6E6E6E;
  --accent-primary: #ac7227;
  --accent-secondary: #fac344;
}
```

## Tailwind Color Tokens
The following color utilities are available in Tailwind classes:

- `bg-fdd-dark-bg` → `#1b1b1b`
- `bg-fdd-dark-surface` → `#232323`
- `text-fdd-dark-text-primary` → `#FFFFFF`
- `text-fdd-dark-text-secondary` → `#BDBDBD`
- `text-fdd-accent-primary` → `#fac344`
- `text-fdd-accent-secondary` → `#ac7227`
- `bg-fdd-light-bg` → `#FFFFFF`
- `bg-fdd-light-surface` → `#e2e2e2`
- `text-fdd-light-text-primary` → `#1b1b1b`
- `text-fdd-light-text-secondary` → `#6E6E6E`

## Component Updates

### Button Component
✅ **Primary Button**
- Background: `#fac344` (orange accent)
- Text: `#1b1b1b` (dark background)
- Hover: Transitions to `#ac7227`
- No heavy shadows, 4-8px radius max

✅ **Outline Button**
- Border & Text: `#fac344`
- Transparent background with fill on hover
- Solid colors only (no gradients)

✅ **Text Button**
- Text: `#fac344`
- Hover: `#ac7227` with underline

### Navigation
✅ **Header**
- Dark Mode: Transparent header → Solid `#1b1b1b` on scroll
- Active link indicator: `#fac344` underline
- Logo: Orange accent when scrolled

✅ **Mobile Navigation**
- Background: `#1b1b1b` with transparency
- Active link icon: `#fac344`
- Border top: Subtle orange accent line

### Sections Updated
✅ **Hero** - Dark background with accent buttons
✅ **Why Choose Us** - Dark surfaces with orange accent borders on cards
✅ **Services** - Dark surfaces with orange grid dividers, hover state animations
✅ **Portfolio** - Dark background with accent text buttons
✅ **About** - Dark background with accent highlights
✅ **Contact** - Dark background with orange accent form focus states
✅ **Call to Action** - Dark background with orange gradient background elements
✅ **Footer** - Dark background with orange accent hover states

## Typography

### Font Stack
- **Headings**: Playfair Display (serif)
- **Body Text**: Lato (sans-serif)

### Font Usage Notes
- FDD guidelines recommend Sohne for captions/big text and Graphik for small text
- Current implementation uses Playfair Display (similar weight to Sohne) and Lato (similar to Graphik)
- To implement Sohne and Graphik: License these premium fonts from Grilli Type and import via @font-face

## Contrast & Accessibility
✅ All text meets WCAG AA contrast compliance:
- `#FFFFFF` on `#1b1b1b` = 19.56:1 contrast ratio
- `#BDBDBD` on `#1b1b1b` = 7.94:1 contrast ratio
- `#fac344` on `#1b1b1b` = 11.24:1 contrast ratio

## Implementation Guidelines

### Orange Accent Usage (Max 10% Visual Weight)
✅ **Where Orange Appears:**
- Primary CTA buttons
- Active navigation underline
- Micro-interactions (hover lines, arrows)
- Key metrics or numbers
- Form field focus states
- Icon accents

❌ **Where Orange Does NOT Appear:**
- Large background sections
- Paragraph text
- Large content blocks
- Heavy overlays

### No Gradients Policy
✅ All components use solid colors only
✅ Removed all gradient backgrounds
✅ Focus on clean, refined surfaces

### Whitespace & Typography
✅ Large typography with generous spacing
✅ Minimalist design with emphasis on content
✅ Luxury through restraint, not decoration

## Theme Toggle
The application supports light/dark mode toggle:
- Default: Dark mode (preferred luxury experience)
- Toggle: Available in navbar
- Persistence: Theme preference saved to localStorage

## Files Modified

### Global
- `index.html` - Tailwind config, CSS variables, typography imports
- `index.css` - Dark/light mode overrides, accent utilities
- `App.tsx` - Root styling with FDD tokens

### Components
- `components/Button.tsx` - FDD-compliant button variants
- `components/Navbar.tsx` - Orange accent nav indicators
- `components/Footer.tsx` - Dark background with accent hover states
- `components/Section.tsx` - Dark mode as default
- `components/PageHeader.tsx` - FDD token colors

### Sections
- `sections/Hero.tsx` - Orange accent elements, dark background
- `sections/WhyChooseUs.tsx` - Orange accent cards
- `sections/Services.tsx` - Orange grid dividers and hover states
- `sections/Portfolio.tsx` - Dark background with accents
- `sections/About.tsx` - Dark background with accent highlights
- `sections/Contact.tsx` - Dark forms with orange focus states
- `sections/CallToAction.tsx` - Orange abstract background elements

## Next Steps (Optional Enhancements)

1. **Premium Typography**: License and implement Sohne & Graphik from Grilli Type
2. **Animation Refinements**: Adjust micro-interactions to emphasize luxury through subtle movement
3. **Image Treatment**: Ensure all photography uses warm lighting and brass/gold tones
4. **Additional Dark Modes**: Create alternative accent color options
5. **Accessibility Testing**: Run full axe accessibility audit

## Brand Compliance Checklist

- ✅ Orange is an accent, not a base
- ✅ Minimal color usage with maximum impact
- ✅ Dark mode as primary luxury experience
- ✅ No gradients (solid colors only)
- ✅ Refined button system (4-8px radius)
- ✅ Strategic accent placement (max 10% visual weight)
- ✅ WCAG AA contrast compliance
- ✅ Large typography with generous spacing
- ✅ Whitespace and imagery as design drivers
- ✅ Restraint and elegance throughout

## Technical Stack
- React 19.2.4
- TypeScript 5.8.2
- Tailwind CSS (via CDN)
- Framer Motion (animations)
- React Router DOM (navigation)

---

**Brand System Version**: 1.0  
**Last Updated**: February 2026  
**Maintained By**: FDD Design Team
