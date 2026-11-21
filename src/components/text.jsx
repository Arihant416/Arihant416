import { Fragment } from 'react';

// Keep number ranges like "2–3" or "60–70%" on one line (invisible word joiner after the dash).
export const keepRanges = (text) => text.replace(/(\d)–(\d)/g, '$1–\u2060$2');

// Renders **key figures** in bold. The data uses ** as the only markup.
export const rich = (text) => keepRanges(text).split('**').map((part, index) => (
  index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>
));

// Outcomes are strings, or { text, placement } when they are shown elsewhere on the page.
export const outcomeText = (outcome) => (typeof outcome === 'string' ? outcome : outcome.text);
