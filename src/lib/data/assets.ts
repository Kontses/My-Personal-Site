import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';
import { unix } from 'dayjs';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	//languages
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetes.svg'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Jest: a('jest.png'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg'),
	unix: a('shell_unix_code.png'),
	Wordpress: a('wordpress.png'),
	XML: a('xml.png'),
	MDX: a('mdx.png'),
	csharp: a('c-sharp.svg'),
	json: a('jason.png'),
	dotnet: a('dotnet.png'),
	xamarin: a('xamarin.png'),
	unreal: a('unreal.jpg'),
	lua: a('Lua.png'),
	core: a('core.png'),
	blender: a('blender.png'),
	juce: a('juce.png'),
	unity: a('unity.jpg'),
	vuforia: a('vuforia.png'),
	kali: a('kali.png'),
	threejs: a('threejs.png'),
	socketio: a('Socket-io.png'),


	//icons
	ConservatoryOfStavroupolis: a('ConservatoryOfStavroupolis.jpg'),
	IHU: a('international-hellenic-university-logo.jpg'),
	MusicSchoolOfKaterini: a('music-school-of-katerini.png'),
	Traxis: a('traxis_engineering_logo.jpg'),
	Artsound: a('artsound.jpg'),
	Site: a('home.png'),
	kchc: a('KCHC.jpg'),
	eme: a('eme.png'),
	kagouro: a('kagouro.jpg')
	
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
