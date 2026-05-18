# Country Page Implementation Plan

## Goal

Add a country detail page and connect every `View Full Country Page` button to it. The page should keep the existing navbar/footer, use static country data already present in the code, and visually follow the supplied root-level reference images:

- `countery-page.png` as the full-page target.
- `country-header.png` as the hero/header target.
- `country-body.png` and `country-body2.png` as the body-section targets.

## Implementation Steps

1. Move the covered-country dataset into a reusable module so both the map and country page read from the same static source.
2. Add a country slug helper and route such as `/country/saudi-arabia`.
3. Update the map detail panel CTA so `View Full Country Page` navigates to the selected country page.
4. Build a new `CountryPage` component:
   - Hero section uses the supplied root image treatment and preserves the natural image color at the top.
   - Shared `AppHeader` remains outside the route, so the navbar is kept.
   - Country name, stocks/company count, market-cap figure, ticker strip, conviction cards, intelligence rows, research reports, and macro indicators are populated from static country-aware data.
5. Add responsive CSS for desktop and mobile so the image-led header and tables do not overlap or break.
6. Run a production build and, if possible, open the local app to verify navigation and layout.

## Assumptions

- The countries are the ones already defined in the existing map coverage data: Egypt, Saudi Arabia, Kuwait, Qatar, UAE, and Oman.
- All country pages can share the supplied Saudi skyline/header visual because no separate country-specific image assets were provided.
- The top hero image should not receive a brand-color tint over the top area; text readability will be handled with subtle shadows and layout spacing.
