/**
 * Brazilian Portuguese dictionary. Typed as `Dict` (the shape of en.ts) so a
 * missing or extra key fails the build. Brand names ("YTalyze") and product
 * proper nouns stay untranslated; line breaks (`<br />`) are repositioned for
 * Portuguese phrasing where needed.
 */

import type { Dict } from './ui';

export const ptBr: Dict = {
	meta: {
		title: 'YTalyze — A retrospectiva do seu histórico do YouTube',
		description:
			'Envie seu histórico do YouTube e receba uma retrospectiva incrivelmente pessoal, pronta para print, de tudo o que você já assistiu.',
		ogLocale: 'pt_BR',
	},

	a11y: {
		home: 'Página inicial do YTalyze',
		themeToggle: 'Alternar tema de cores',
		menu: 'Menu',
	},

	nav: {
		heart: 'Sua retrospectiva',
		how: 'Como funciona',
		share: 'Compartilháveis',
		privacy: 'Privacidade',
	},

	getStarted: 'Começar agora',

	hero: {
		eyebrow: 'Reveja seu histórico do YouTube',
		h1Lead: 'Seu histórico do YouTube é um diário.',
		h1Em: 'Vamos ler ele de volta pra você.',
		sub: 'O YTalyze transforma dez anos de YouTube em uma retrospectiva pessoal, pronta para print, de tudo o que você já assistiu.',
		readMore: 'Saiba mais',
		note: ['Grátis', 'Seus dados continuam seus', 'Pronto em 90 segundos'],
		card: {
			sample: 'Amostra',
			kicker: 'Tempo total assistido',
			numHtml: '3.902<small>h</small>',
			desc: 'São 162 dias da sua vida no YouTube.',
			year: 'Retrospectiva 2026',
		},
	},

	marquee: [
		'Retrospectiva de amostra',
		'3.902 horas assistidas',
		'14.326 vídeos',
		'38 espirais sem fim',
		'Pico: 00:47',
		'7 eras de gosto',
		'312 vídeos, um só canal',
	],

	insightCta: 'Conecte para ver a sua',

	insights: {
		'b-cook': {
			pill: 'Amostra · 01',
			tagline: 'Tempo assistido',
			heading: 'Veja para onde suas horas realmente foram',
			bodyHtml:
				'O YTalyze classifica todos os temas que você já assistiu e revela aquele que, sem você perceber, dominou seu tempo de tela. Nesta amostra é culinária — o seu pode ser xadrez, marcenaria ou true crime.',
			statNumHtml: '0<small>h</small>',
			statLabel: 'em culinária nesta amostra — o bastante para se formar duas vezes em gastronomia',
			watermark: '427',
		},
		'b-night': {
			pill: 'Amostra · 02',
			tagline: 'Horário de pico',
			heading: 'Descubra quando você realmente dá o play',
			bodyHtml:
				'Mapeamos cada play ao longo do dia e encontramos o minuto exato em que você mais abre o YouTube. Aqui é uma coruja noturna certificada, cujas manhãs nunca tiveram chance — o seu pode ser o trajeto das 6h ou a moleza das 14h.',
			statNumHtml: '00<small>:47</small>',
			statLabel: 'seu minuto mais movimentado nesta amostra',
			watermark: 'AM',
		},
		'b-hole': {
			pill: 'Amostra · 03',
			tagline: 'Espirais',
			heading: 'Refaça suas espirais de madrugada',
			bodyHtml:
				'O YTalyze detecta cada espiral em que você caiu e mede a profundidade de cada uma. Uma descida desta amostra começou em "como se fabricam lápis" e só emergiu quatro horas depois, em mineração em águas profundas.',
			statNumHtml: '0',
			statLabel: 'espirais contadas neste histórico de amostra',
			watermark: '38',
		},
		'b-obsess': {
			pill: 'Amostra · 04',
			tagline: 'Obsessão',
			heading: 'Conheça o canal que você não consegue largar',
			bodyHtml:
				'Encontramos o criador ao qual você sempre volta — seu canal de conforto. Nesta prévia é o <b>Cosmic&nbsp;Kitchen</b>, mais ou menos um vídeo a cada 28 horas. Eles nem imaginam que você existe.',
			statNumHtml: '0<small>vídeos</small>',
			statLabel: 'de um único canal nesta amostra',
			watermark: '312',
		},
		'b-shift': {
			pill: 'Amostra · 05',
			tagline: 'Evolução',
			heading: 'Veja seu gosto evoluir ao longo dos anos',
			bodyHtml:
				'O YTalyze mapeia como sua atenção realmente migrou, era por era. Esta amostra foi de largar boss fights no meio para aprender sobre placas tectônicas — cada etapa da virada, em um gráfico.',
			statNumHtml: 'Games → Docs',
			statLabel: 'a grande virada desta amostra',
			watermark: '→',
		},
	},

	heartAsides: {
		cook: {
			k: 'Para onde as horas foram',
			v: 'Culinária & comida',
			rows: [
				{ label: 'Culinária', value: '427h' },
				{ label: 'Tecnologia', value: '248h' },
				{ label: 'Música', value: '183h' },
				{ label: 'Games', value: '124h' },
			],
		},
		night: {
			k: 'Quando você assiste · 0h → 11h',
			afterMidnight: 'Depois da meia-noite',
			beforeNine: 'Antes das 9h',
		},
	},

	howItWorks: {
		ey: 'Como funciona',
		headingHtml: 'Três toques. Noventa segundos.<br />Depois, fica pessoal.',
		note: 'Sem planilhas, sem chaves de API, sem assistente de configuração. Entre, solte seu arquivo e veja acontecer.',
		steps: [
			{
				title: 'Entre com o Google',
				body: 'Um toque com a conta que você já usa para maratonar. Somente leitura e revogável — nada é publicado, nunca.',
				ftag: '~ 5 segundos',
			},
			{
				title: 'Solte seu histórico',
				body: 'Exporte seu histórico pelo Google Takeout e arraste o arquivo aqui. Processamos no segundo em que ele chega.',
				ftag: '~ 60 segundos',
			},
			{
				title: 'Receba sua retrospectiva',
				body: 'Sai uma retrospectiva em tela cheia, deslizável — e uma pilha de cards já no tamanho dos seus Stories.',
				ftag: 'instantâneo',
			},
		],
	},

	shareGallery: {
		ey: 'Feito para ser postado',
		headingHtml: 'Cada insight já sai<br />no formato de Story.',
		note: 'Estes são cards de amostra — os seus são gerados do seu próprio histórico. 9:16, chamativos e prontos para print assim que carregam.',
		stories: [
			{
				k: 'Tempo total assistido',
				numHtml: '3.902<small>h</small>',
				d: '163 dias da sua vida no play. Sem arrependimentos (alguns arrependimentos).',
			},
			{
				k: 'Horário de pico',
				numHtml: '00<small>:47</small>',
				d: 'Coruja noturna certificada. As manhãs nunca tiveram chance.',
			},
			{
				k: 'Sua obsessão',
				numHtml: '312<small>vídeos</small>',
				d: 'Um canal. 312 vídeos. Um relacionamento, sinceramente.',
			},
			{
				k: 'Horas em culinária',
				numHtml: '427<small>h</small>',
				d: 'Você podia ter feito gastronomia. Você fez torrada.',
			},
			{
				k: 'Espirais',
				numHtml: '38',
				d: 'Trinta e oito mergulhos no desconhecido. Contamos todos.',
			},
		],
		hint: 'Arraste para ver os cards',
		chips: ['Salvar todos os cards', 'Postar nos Stories', 'Fazer o seu'],
	},

	trust: {
		ey: 'Seus dados, suas regras',
		heading: 'É uma década de você em um arquivo. Tratamos como tal.',
		lead: 'O YTalyze lê seu histórico para montar sua retrospectiva — e depois sai do caminho. Sem vender, sem treinar modelos, sem surpresas em letras miúdas.',
		items: [
			{
				title: 'Processado para você, nunca contra você',
				body: 'Seu histórico alimenta seus cards e nada mais. Nunca vendido, nunca usado para treinar modelos, nunca compartilhado.',
			},
			{
				title: 'Acesso somente leitura ao Google',
				body: 'Pedimos o escopo mínimo via Google OAuth. Não conseguimos postar, apagar nem tocar em nada na sua conta.',
			},
			{
				title: 'Apague tudo, na hora',
				body: 'Um botão apaga seu upload e todos os insights derivados dele. Sem tickets, sem espera, sem labirinto de "tem certeza?".',
			},
		],
	},

	statement: {
		ey: 'A conclusão',
		headingHtml: 'E aí — quem o seu histórico<br />diz que você é?',
		body: 'Existe uma pessoa inteira escondida nesse histórico — cada madrugada, cada obsessão, cada era que você superou sem perceber.',
	},

	finalCta: {
		heading: 'Pronto para ver a sua?',
		body: 'Comece agora e deixe o YTalyze tocar seu histórico de volta para você. Grátis, privado e a noventa segundos do seu primeiro insight.',
		backToTop: 'Voltar ao topo',
		note: ['Grátis', 'Sem cartão de crédito', 'Apague quando quiser'],
	},

	footer: {
		tagline: 'Reveja seu histórico do YouTube. Um frame fora do lugar, uma história inteira sobre você.',
		columns: {
			product: 'Produto',
			company: 'Empresa',
			legal: 'Legal',
		},
		links: {
			about: 'Sobre',
			blog: 'Blog',
			contact: 'Contato',
			privacyPolicy: 'Política de privacidade',
			terms: 'Termos',
			dataSecurity: 'Dados & segurança',
		},
		copyright: '© 2026 YTalyze · Sem afiliação com o YouTube ou o Google',
		madeFor: 'Feito para os curiosos',
	},
};
