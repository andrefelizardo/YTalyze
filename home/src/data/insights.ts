/**
 * The five "rewind" insight blocks (the #heart section).
 * Each entry drives one <InsightSection>. The per-block aside (glasscard) is
 * structurally unique, so it is passed via the component's `aside` slot in
 * index.astro — only the main-column copy lives here.
 */

export type Insight = {
	/** Stable id, also used as the section's theme class: b-cook | b-night | … */
	theme: 'b-cook' | 'b-night' | 'b-hole' | 'b-obsess' | 'b-shift';
	/** Pill text inside the tagline, e.g. "Sample · 01". */
	pill: string;
	/** Tagline label after the pill, e.g. "Watch time". */
	tagline: string;
	heading: string;
	/** Supporting paragraph — may contain inline HTML (e.g. <b>…</b>, &nbsp;). */
	body: string;
	/** Inner HTML of the big `.i-num` figure (e.g. "0<small>hrs</small>"). */
	statNum: string;
	/** Optional count-up target; when set, the figure animates from 0. */
	count?: number;
	/** Optional inline style applied to `.i-num` (used by the taste-shift block). */
	numStyle?: string;
	/** The smaller supporting label beside the figure. */
	statLabel: string;
	/** Big translucent number/glyph behind the block. */
	watermark: string;
	/** `top` offset for the decorative seek-band. */
	seekTop: string;
};

export const insights: Insight[] = [
	{
		theme: 'b-cook',
		pill: 'Sample · 01',
		tagline: 'Watch time',
		heading: 'See where your hours actually went',
		body: "YTalyze ranks every topic you've ever watched and surfaces the one that quietly ran your watch time. In this sample it's cooking — yours might be chess, carpentry or true crime.",
		statNum: '0<small>hrs</small>',
		count: 427,
		statLabel: 'on cooking in this sample — enough to graduate culinary school twice',
		watermark: '427',
		seekTop: '30%',
	},
	{
		theme: 'b-night',
		pill: 'Sample · 02',
		tagline: 'Peak time',
		heading: 'Pinpoint when you actually press play',
		body: "We chart every play across the clock and find the exact minute you reach for YouTube most. Here it's a certified night owl whose mornings never stood a chance — yours could be a 6 AM commute or a 2 PM slump.",
		statNum: '12<small>:47 AM</small>',
		statLabel: 'your busiest minute in this sample',
		watermark: 'AM',
		seekTop: '62%',
	},
	{
		theme: 'b-hole',
		pill: 'Sample · 03',
		tagline: 'Spirals',
		heading: 'Retrace your late-night rabbit holes',
		body: 'YTalyze detects every spiral you fell into and times how deep each one ran. One sample descent started at "how do they make pencils" and surfaced four hours later on deep-sea mining.',
		statNum: '0',
		count: 38,
		statLabel: 'rabbit holes counted across this sample history',
		watermark: '38',
		seekTop: '22%',
	},
	{
		theme: 'b-obsess',
		pill: 'Sample · 04',
		tagline: 'Obsession',
		heading: "Meet the channel you can't quit",
		body: 'We find the one creator you keep coming back to — your comfort channel. In this preview it\'s <b>Cosmic&nbsp;Kitchen</b>, roughly one video every 28 hours. They\'d have no idea you exist.',
		statNum: '0<small>vids</small>',
		count: 312,
		statLabel: 'from a single channel in this sample',
		watermark: '312',
		seekTop: '70%',
	},
	{
		theme: 'b-shift',
		pill: 'Sample · 05',
		tagline: 'Evolution',
		heading: 'Watch your taste evolve over the years',
		body: 'YTalyze maps how your attention actually drifted, era by era. This sample went from rage-quitting boss fights to learning about tectonic plates — every stage of the shift, charted.',
		statNum: 'Gaming → Docs',
		numStyle: 'font-size:clamp(34px,4.8vw,52px);',
		statLabel: 'the headline swing in this sample',
		watermark: '→',
		seekTop: '34%',
	},
];
