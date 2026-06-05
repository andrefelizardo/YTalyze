/**
 * English (default) dictionary — every user-facing string on the landing page.
 * `pt-br.ts` mirrors this exact shape (typed as `Dict`), so a missing or extra
 * key fails the build. Keys ending in `Html` may contain inline HTML and are
 * rendered with `set:html`; per-locale line breaks (`<br />`) live here too.
 */

export const en = {
	meta: {
		title: 'YTalyze — Rewind your watch history',
		description:
			"Upload your watch history and get a wildly personal, screenshot-ready rewind of everything you've ever watched on YouTube.",
		/** Open Graph locale, e.g. en_US / pt_BR. */
		ogLocale: 'en_US',
	},

	a11y: {
		home: 'YTalyze home',
		themeToggle: 'Switch colour theme',
		menu: 'Menu',
	},

	/** Labels for the anchors defined in data/site.ts (keyed by `key`). */
	nav: {
		heart: 'Your rewind',
		how: 'How it works',
		share: 'Shareables',
		privacy: 'Privacy',
	},

	joinWaitlist: 'Join the waitlist',

	/** Copy for the waitlist modal (see WaitlistModal.astro). */
	waitlist: {
		closeLabel: 'Close waitlist dialog',
		badge: 'Waitlist · Launching soon',
		title: 'Join the waitlist',
		sub: "YTalyze isn't open yet. Leave your email and you'll be first to know the day your rewind is ready.",
		emailLabel: 'Email address',
		emailPlaceholder: 'you@example.com',
		invalidEmail: 'Please enter a valid email address.',
		submit: 'Join the waitlist',
		formError: "Something went wrong on our end. Your email wasn't saved — please try again.",
		fine: 'No account, no password — just one email when YTalyze opens. Unsubscribe anytime.',
		successTitle: "You're on the list!",
		/** `<b id="wlSuccessEmail">` is swapped for the submitted email by the modal script. */
		successHtml:
			'We\'ve saved <b id="wlSuccessEmail">your spot</b>. You\'ll get one email the moment your rewind is ready — nothing before then.',
		done: 'Done',
	},

	hero: {
		eyebrow: 'Rewind your watch history',
		h1Lead: 'Your watch history is a diary.',
		h1Em: "Let's read it back to you.",
		sub: "YTalyze turns ten years of YouTube into a personal, screenshot-ready rewind of everything you've ever watched.",
		readMore: 'Read more',
		note: ['Free to run', 'Your data stays yours', '90 seconds to set up'],
		card: {
			sample: 'Sample',
			kicker: 'Lifetime watch time',
			numHtml: '3,902<small>hrs</small>',
			desc: "That's 162 days of your life on YouTube.",
			year: 'Rewind 2026',
		},
	},

	marquee: [
		'Sample rewind',
		'3,902 hours watched',
		'14,326 videos',
		'38 rabbit holes',
		'Peak: 12:47 AM',
		'7 eras of taste',
		'312 videos, one channel',
	],

	/** CTA link under every insight block. */
	insightCta: 'Connect to see yours',

	/** Localized copy for the insight blocks, keyed by theme (see data/insights.ts). */
	insights: {
		'b-cook': {
			pill: 'Sample · 01',
			tagline: 'Watch time',
			heading: 'See where your hours actually went',
			bodyHtml:
				"YTalyze ranks every topic you've ever watched and surfaces the one that quietly ran your watch time. In this sample it's cooking — yours might be chess, carpentry or true crime.",
			statNumHtml: '0<small>hrs</small>',
			statLabel: 'on cooking in this sample — enough to graduate culinary school twice',
			watermark: '427',
		},
		'b-night': {
			pill: 'Sample · 02',
			tagline: 'Peak time',
			heading: 'Pinpoint when you actually press play',
			bodyHtml:
				"We chart every play across the clock and find the exact minute you reach for YouTube most. Here it's a certified night owl whose mornings never stood a chance — yours could be a 6 AM commute or a 2 PM slump.",
			statNumHtml: '12<small>:47 AM</small>',
			statLabel: 'your busiest minute in this sample',
			watermark: 'AM',
		},
		'b-hole': {
			pill: 'Sample · 03',
			tagline: 'Spirals',
			heading: 'Retrace your late-night rabbit holes',
			bodyHtml:
				'YTalyze detects every spiral you fell into and times how deep each one ran. One sample descent started at "how do they make pencils" and surfaced four hours later on deep-sea mining.',
			statNumHtml: '0',
			statLabel: 'rabbit holes counted across this sample history',
			watermark: '38',
		},
		'b-obsess': {
			pill: 'Sample · 04',
			tagline: 'Obsession',
			heading: "Meet the channel you can't quit",
			bodyHtml:
				"We find the one creator you keep coming back to — your comfort channel. In this preview it's <b>Cosmic&nbsp;Kitchen</b>, roughly one video every 28 hours. They'd have no idea you exist.",
			statNumHtml: '0<small>vids</small>',
			statLabel: 'from a single channel in this sample',
			watermark: '312',
		},
		'b-shift': {
			pill: 'Sample · 05',
			tagline: 'Evolution',
			heading: 'Watch your taste evolve over the years',
			bodyHtml:
				'YTalyze maps how your attention actually drifted, era by era. This sample went from rage-quitting boss fights to learning about tectonic plates — every stage of the shift, charted.',
			statNumHtml: 'Gaming → Docs',
			statLabel: 'the headline swing in this sample',
			watermark: '→',
		},
	},

	/** The per-insight glasscard asides rendered in LandingPage.astro. */
	heartAsides: {
		cook: {
			k: 'Where the hours went',
			v: 'Cooking & food',
			rows: [
				{ label: 'Cooking', value: '427h' },
				{ label: 'Tech', value: '248h' },
				{ label: 'Music', value: '183h' },
				{ label: 'Gaming', value: '124h' },
			],
		},
		night: {
			k: 'When you watch · 12a → 11a',
			afterMidnight: 'After midnight',
			beforeNine: 'Before 9 AM',
		},
	},

	howItWorks: {
		ey: 'How it works',
		headingHtml: 'Three taps. Ninety seconds.<br />Then it gets personal.',
		note: 'No spreadsheets, no API keys, no setup wizard. Sign in, drop your file, watch it unfold.',
		steps: [
			{
				title: 'Sign in with Google',
				body: 'One tap with the account you already binge on. Read-only and revocable — nothing gets posted, ever.',
				ftag: '~ 5 seconds',
			},
			{
				title: 'Drop your history',
				body: 'Export your watch history from Google Takeout and drag the file in. We parse it the second it lands.',
				ftag: '~ 60 seconds',
			},
			{
				title: 'Get your rewind',
				body: 'Out comes a full-screen, swipeable rewind — and a stack of cards already sized for your Stories.',
				ftag: 'instant',
			},
		],
	},

	shareGallery: {
		ey: 'Built to be posted',
		headingHtml: 'Every insight comes out<br />Story-shaped.',
		note: 'These are sample cards — yours generate from your own history. 9:16, bold, and ready to screenshot the second they load.',
		stories: [
			{
				k: 'Total watch time',
				numHtml: '3,902<small>h</small>',
				d: '163 days of your life, pressed play. No regrets (some regrets).',
			},
			{
				k: 'Peak watch time',
				numHtml: '12:47<small>AM</small>',
				d: 'Certified night owl. The mornings never stood a chance.',
			},
			{
				k: 'Your obsession',
				numHtml: '312<small>vids</small>',
				d: 'One channel. 312 videos. A relationship, honestly.',
			},
			{
				k: 'Hours on cooking',
				numHtml: '427<small>h</small>',
				d: "You could've gone to culinary school. You made toast.",
			},
			{
				k: 'Rabbit holes',
				numHtml: '38',
				d: 'Thirty-eight descents into the unknown. We counted them all.',
			},
		],
		hint: 'Drag to browse the set',
		chips: ['Save all cards', 'Post to Stories', 'Make your own'],
	},

	trust: {
		ey: 'Your data, your call',
		heading: "It's a decade of you in one file. We treat it that way.",
		lead: 'YTalyze reads your history to build your rewind — then gets out of the way. No selling, no training, no fine print surprises.',
		items: [
			{
				title: 'Processed for you, never on you',
				body: 'Your history powers your cards and nothing else. Never sold, never used to train models, never shared.',
			},
			{
				title: 'Read-only Google access',
				body: "We request the minimum scope through Google OAuth. We can't post, delete, or touch a thing on your account.",
			},
			{
				title: 'Delete everything, instantly',
				body: 'One button wipes your upload and every insight we derived from it. No tickets, no waiting, no "are you sure" maze.',
			},
		],
	},

	statement: {
		ey: 'The takeaway',
		headingHtml: 'So — who does your<br />history say you are?',
		body: "There's a whole person hiding in that watch history — every late night, every obsession, every era you quietly grew out of.",
	},

	finalCta: {
		heading: 'Ready to see yours?',
		body: 'Get started and let YTalyze play your watch history back to you. Free, private, and ninety seconds from your first insight.',
		backToTop: 'Back to top',
		note: ['Free to run', 'No card required', 'Delete anytime'],
	},

	footer: {
		tagline: 'Rewind your watch history. One displaced frame, a whole history of you.',
		columns: {
			product: 'Product',
			company: 'Company',
			legal: 'Legal',
		},
		links: {
			about: 'About',
			blog: 'Blog',
			contact: 'Contact',
			privacyPolicy: 'Privacy policy',
			terms: 'Terms',
			dataSecurity: 'Data & security',
		},
		copyright: '© 2026 YTalyze · Not affiliated with YouTube or Google',
		madeFor: 'Made for the curious',
	},
};
