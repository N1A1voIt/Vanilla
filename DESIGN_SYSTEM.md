# Editorial Design System - HRS Vanilla

## Quick Reference Guide

---

## Colors

### Primary Palette
```css
/* Backgrounds */
--cream: #f5f1e8;           /* Main background */
--white: #ffffff;           /* Card backgrounds */
--surface: #e8e4dc;         /* Secondary surfaces */

/* Text */
--charcoal: #2d2d2d;        /* Primary text, buttons */
--gray-dark: #6b6b6b;       /* Secondary text */
--gray-light: #9b9b9b;      /* Tertiary text */

/* Accents */
--gold: #c9a86f;            /* Decorative elements */
--gold-light: #d4af7a;      /* Hover states */

/* Borders */
--border-cream: #e8e4dc;    /* Light borders */
--border-dark: #4a4a4a;     /* Footer borders */
```

### Usage Rules
- **Never use pure black** (#000000) - always #2d2d2d
- **Never use pure white backgrounds** - always #f5f1e8
- **Gold is decorative only** - not for text or buttons
- **Charcoal for all CTAs** - no colored buttons

---

## Typography

### Font Families
```css
--font-serif: 'Playfair Display', serif;
--font-sans: 'Inter', sans-serif;
```

### Type Scale

| Element | Font | Size | Weight | Style | Color |
|---------|------|------|--------|-------|-------|
| Hero H1 | Playfair | 5xl-8xl | 400 | Italic | #2d2d2d |
| Page H1 | Playfair | 5xl-7xl | 400 | Italic | #2d2d2d |
| Section H2 | Playfair | 4xl-6xl | 400 | Italic | #2d2d2d |
| Card H3 | Playfair | 2xl-3xl | 400 | Italic | #2d2d2d |
| Body Text | Inter | sm-base | 400 | Normal | #6b6b6b |
| Label | Inter | xs-sm | 600 | Uppercase | #6b6b6b |
| Tiny Label | Inter | 10px | 600 | Uppercase | #6b6b6b |
| Button | Inter | sm-base | 500 | Normal | #ffffff |

### Special Typography

**Logo:**
```tsx
<div className="flex flex-col items-start">
  <div className="text-xs tracking-widest uppercase text-[#6b6b6b]">
    Madagascar
  </div>
  <div className="text-2xl font-serif italic text-[#2d2d2d]">
    HRS Vanilla
  </div>
</div>
```

**Section Header:**
```tsx
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#2d2d2d] mb-4">
  Title Here
</h2>
<p className="text-base text-[#6b6b6b]">
  Subtitle or description
</p>
```

---

## Layout Components

### Floating Photo Card

```tsx
<div className="relative w-[30%] rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-500 hover:scale-105 hover:z-20">
  <div className="bg-white p-3 shadow-2xl">
    <img className="w-full aspect-[3/4] object-cover" />
  </div>
</div>
```

**Variations:**
- Rotation: -8deg, -4deg, 0deg, +4deg, +6deg, +8deg
- Aspect ratios: 3:4 (portrait), 1:1 (square), 4:5
- White padding: p-3 or p-4
- Shadow: shadow-2xl (always)

### Circular Product Badge

```tsx
<div className="text-center group">
  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
    <img className="w-full h-full object-cover" />
  </div>
  <h3 className="text-sm md:text-base font-medium text-[#2d2d2d]">
    Product Name
  </h3>
</div>
```

### Rotated Photo Card (Split Layout)

```tsx
<div className="relative order-2 md:order-1">
  <div className="bg-white p-4 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
    <img className="w-full aspect-[4/5] object-cover" />
  </div>
  <VanillaLeaf className="absolute -bottom-4 -right-4 opacity-40" />
</div>
```

### Product Spec Card

```tsx
<div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
  {/* Photo */}
  <div className="relative h-64 overflow-hidden">
    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
  </div>

  {/* Content */}
  <div className="p-8">
    <h3 className="text-2xl md:text-3xl font-serif italic text-[#2d2d2d] mb-4">
      Product Name
    </h3>

    {/* Pricing Box */}
    <div className="mb-6 bg-[#f5f1e8] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6b6b6b] mb-3">
        Price by Size
      </p>
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-white px-3 py-2">
          <span className="text-sm font-medium text-[#6b6b6b]">14cm - 16cm</span>
          <span className="text-sm font-bold text-[#2d2d2d]">$120/kg</span>
        </div>
      </div>
    </div>

    {/* Specs */}
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <span className="h-px w-8 bg-[#c9a86f]" />
        <p className="font-semibold text-[#6b6b6b] tracking-widest uppercase text-[10px]">
          Specifications
        </p>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start text-[#6b6b6b]">
          <div className="mt-1 mr-3 bg-[#f5f1e8] rounded-full p-1">
            <Check className="text-[#c9a86f]" size={14} strokeWidth={2.5} />
          </div>
          <span className="leading-relaxed text-sm">Spec item</span>
        </li>
      </ul>
    </div>
  </div>
</div>
```

---

## Buttons

### Primary Button (Charcoal)

```tsx
<button className="inline-flex items-center justify-center px-8 py-4 bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
  Button Text
</button>
```

**Rules:**
- No border radius (square edges)
- Always charcoal background
- White text
- Shadow-lg → shadow-xl on hover
- No scale on hover (editorial restraint)
- Scale(0.98) on active/press

**Sizes:**
- Small: px-6 py-3 text-sm
- Medium: px-8 py-4 text-base
- Large: px-10 py-5 text-lg

---

## Decorative Elements

### VanillaLeaf Component

```tsx
<VanillaLeaf 
  className="absolute top-10 left-8 opacity-40 animate-float" 
  position="left" // or "right" to flip
/>
```

**Placement Guidelines:**
- Top corners of sections
- Near photo cards
- Bottom corners for balance
- Opacity: 25-40%
- Always with animation

### VanillaPod Component

```tsx
<VanillaPod 
  className="absolute top-32 right-12 opacity-30 animate-float-delayed" 
/>
```

**Placement Guidelines:**
- Opposite side from leaves
- Near CTAs or important content
- Opacity: 25-35%
- Use delayed animation for variety

### Decorative Line

```tsx
<span className="h-px w-8 bg-[#c9a86f]" />
```

Use before section labels or as separator.

---

## Spacing System

### Section Padding
```css
py-20 md:py-28    /* Standard sections */
py-20 md:py-32    /* Hero sections */
```

### Container
```css
max-w-6xl        /* Standard width */
mx-auto          /* Center */
px-4 sm:px-6 lg:px-8  /* Horizontal padding */
```

### Element Spacing
```css
mb-16            /* Section header to content */
mb-12            /* Large spacing */
mb-8             /* Medium spacing */
mb-6             /* Small spacing */
mb-4             /* Tight spacing */
mb-3             /* Very tight */

gap-12 md:gap-16 /* Grid gaps (large) */
gap-8 md:gap-10  /* Grid gaps (medium) */
```

---

## Shadows

```css
shadow-lg        /* Default cards */
shadow-xl        /* Important cards */
shadow-2xl       /* Photo cards, hover states */

hover:shadow-2xl /* Most hover transitions */
```

---

## Animations

### Floating (Decorative)

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

### Floating Delayed (Decorative)

```css
@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-2deg); }
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
  animation-delay: 1s;
}
```

### Fade In Up (Content)

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Usage in inline style: */
style={{
  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
}}
```

---

## Hover States

### Photo Cards
```css
hover:rotate-[-4deg]      /* Reduce rotation */
hover:scale-105           /* Slight grow */
hover:z-20                /* Come forward */
```

### Circular Badges
```css
hover:shadow-2xl          /* Increase shadow */
```

### Regular Cards
```css
hover:-translate-y-2      /* Lift */
hover:shadow-2xl          /* Increase shadow */
```

### Buttons
```css
hover:bg-[#1a1a1a]        /* Darken background */
hover:shadow-xl           /* Increase shadow */
active:scale-[0.98]       /* Press down */
```

---

## Responsive Breakpoints

```css
/* Mobile First */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
```

### Common Patterns

**Typography:**
```css
text-4xl md:text-5xl lg:text-6xl  /* Hero headlines */
text-2xl md:text-3xl              /* Section headlines */
text-sm md:text-base              /* Body text */
```

**Spacing:**
```css
py-20 md:py-28                    /* Section padding */
gap-8 md:gap-12                   /* Grid gaps */
mb-12 md:mb-16                    /* Section spacing */
```

**Layout:**
```css
grid-cols-1 md:grid-cols-2        /* Two columns */
grid-cols-2 md:grid-cols-4        /* Four columns */
grid-cols-1 md:grid-cols-3        /* Three columns */
```

---

## Section Backgrounds

### Pattern
Alternate between white and cream:

```tsx
<section className="bg-white">       {/* Section 1 */}
<section className="bg-[#f5f1e8]">   {/* Section 2 */}
<section className="bg-white">       {/* Section 3 */}
<section className="bg-[#f5f1e8]">   {/* Section 4 */}
```

---

## Icons

### From lucide-react

**Commonly Used:**
- `Check` - Checkmarks (size 14, stroke 2.5)
- `Mail` - Email icon (size 16)
- `Phone` - Phone icon (size 16)
- `ArrowRight` - Button icons (size 20)
- `Menu` - Mobile menu (size 24)
- `X` - Close menu (size 24)

**Colors:**
- Primary: `text-[#c9a86f]` (gold)
- Secondary: `text-[#6b6b6b]` (gray)

---

## Grid Patterns

### Features (Circular Badges)
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
  {/* 4 items on desktop, 2 on mobile */}
</div>
```

### Products
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
  {/* 3 items on desktop, 1 on mobile */}
</div>
```

### Product Specs
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
  {/* 2 items on desktop, 1 on mobile */}
</div>
```

---

## Do's and Don'ts

### ✅ Do
- Use italic Playfair for all headlines
- Rotate photo cards for organic feel
- Add white borders (padding) to photos
- Use charcoal for all buttons
- Alternate white/cream backgrounds
- Add decorative elements in corners
- Keep animations subtle
- Use circular badges for products
- Maintain warm color palette

### ❌ Don't
- Use bold Playfair (use italic instead)
- Use colored buttons (only charcoal)
- Use pure white backgrounds
- Use rounded corners on cards
- Use pure black (#000)
- Overuse decorations (2-3 per section max)
- Use dramatic gradients
- Mix warm and cool colors
- Use stock "AI gradient" aesthetics

---

## Common Mistakes to Avoid

1. **Forgetting italic on Playfair headlines**
   - ❌ `font-serif font-bold`
   - ✅ `font-serif italic`

2. **Using wrong background color**
   - ❌ `bg-white` (for page background)
   - ✅ `bg-[#f5f1e8]` (for page background)

3. **Rounding card corners**
   - ❌ `rounded-2xl` (for main cards)
   - ✅ No border radius (square edges)

4. **Colored buttons**
   - ❌ `bg-amber-600`
   - ✅ `bg-[#2d2d2d]`

5. **Missing white photo borders**
   - ❌ `<img />` directly
   - ✅ `<div className="bg-white p-3"><img /></div>`

6. **Not rotating photo cards**
   - ❌ `<div><img /></div>`
   - ✅ `<div className="rotate-[-8deg]"><img /></div>`

7. **Wrong decorative color**
   - ❌ `text-amber-600`
   - ✅ `text-[#c9a86f]`

---

## Quick Copy-Paste Components

### Section Header
```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#2d2d2d] mb-4">
    Section Title
  </h2>
  <p className="text-base text-[#6b6b6b] max-w-2xl mx-auto">
    Subtitle or description
  </p>
</div>
```

### CTA Button
```tsx
<Link
  to="/contact"
  className="inline-flex items-center justify-center px-8 py-4 bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
>
  Contact Us
  <ArrowRight className="ml-2" size={20} />
</Link>
```

### Decorative Corner
```tsx
<VanillaLeaf className="absolute top-10 left-8 opacity-40 animate-float" />
<VanillaPod className="absolute top-32 right-12 opacity-30 animate-float-delayed" />
```

---

*Last Updated: 2026-07-30*
*Design System: Editorial Sophistication*
*Framework: Tailwind CSS v4*
