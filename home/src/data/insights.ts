/**
 * The five "rewind" insight blocks (the #heart section) — structural,
 * locale-invariant fields only. All copy (pill, tagline, heading, body,
 * stat figure/label, watermark) lives in src/i18n/ keyed by `theme`.
 * The per-block aside (glasscard) is structurally unique, so it is passed
 * via the component's slot in LandingPage.astro.
 */

export type Insight = {
	/** Stable id, also used as the section's theme class and the i18n key. */
	theme: 'b-cook' | 'b-night' | 'b-hole' | 'b-obsess' | 'b-shift';
	/** Optional count-up target; when set, the figure animates from 0. */
	count?: number;
	/** Optional inline style applied to `.i-num` (used by the taste-shift block). */
	numStyle?: string;
	/** `top` offset for the decorative seek-band. */
	seekTop: string;
};

export const insights: Insight[] = [
	{ theme: 'b-cook', count: 427, seekTop: '30%' },
	{ theme: 'b-night', seekTop: '62%' },
	{ theme: 'b-hole', count: 38, seekTop: '22%' },
	{ theme: 'b-obsess', count: 312, seekTop: '70%' },
	{
		theme: 'b-shift',
		numStyle: 'font-size:clamp(34px,4.8vw,52px);',
		seekTop: '34%',
	},
];
