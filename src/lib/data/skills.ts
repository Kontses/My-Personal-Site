import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import { unix } from 'dayjs';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Operating Systems', slug: 'op' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color: 'red',
		description:
			'Java is a class-based object-oriented programming language that is used a lot for creating desktop software and android applications.<br>It is the main language we learned and used at university, so I have a good knowledge of its syntax and its application on several university projects.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: 'C\u0023 is a modern, innovative, open-source, cross-platform object-oriented programming language where it was created by Microsoft through the .NET platform.<br>I met C\u0023 in the creation of the KCHC App, an android application using the Xamarin platform, and also on a Unity AR demo project.\n With the experience I gained I could use it to develop web apps, desktop apps, mobile apps, games and much more.',
		logo: Assets.csharp,
		name: 'C\u0023',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c++',
		color: 'blue',
		description: 'C++ is a general purpose object-oriented programming language, enabling you to create modular and reusable code, that was developed as an extension of C.<br><br>In JUCE Frammework i write an audio plugin using only C++.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Javascript is a lightweight interpreted programming language with first-class functions, dynamic typing, prototype-based object-orientation, and first-class variables, that can be used for creating interactive effects and animations on the web.<br><br> I used it a lot for creating websites, along with it and the website you are currently surfing on.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Typescript is a statically typed programming language that builds on JavaScript, giving you better tooling around types, static type checking, and more.<br><br> I used it a lot for creating websites, along with it and the website you are currently surfing on.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML is the standard markup language for creating web pages and web applications. Defines the content and structure of web content, and is probably the most basic and first web technology to learn<br><br> I used it a lot for creating websites, of course along with it and the website you are currently surfing on.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS is a stylesheet language that describes how HTML elements should be displayed or XML. CSS is a core language of the open web and is standardized across web browsers.<br><br>Of course and I used it a lot for creating websites, along with it and the SUPER website you are currently surfing on.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass is a stylesheet language that is interpreted or compiled into Cascading Style Sheets (CSS). It is a preprocessor that is used to create, maintain and maintainable CSS code.<br><br>I used it a lot for creating websites, along with it and the SUPER FC\*KNG website you are currently surfing on.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Svelte is a free and open-source front end component framework or language is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance.<br><br>I used it a lot for creating websites, along with it and the SUPER FC\*KNG BEAUTIFULL website you are currently surfing on.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'wordpress',
		color: 'blue',
		description:
			'WordPress is free and open source software used to create websites, blogs or applications. It is written in PHP and MySQL. It is often used as a content management system. It has many features, including an architecture for additional functionality, and a template system.<br><br>I learned to use wordpress when I worked for the Artsound & Lights e-shop in my internship, in which we had equipped it with the appropriate plugins for e-commerce and other automated actions.',
		logo: Assets.Wordpress,
		name: 'Wordpress',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'xml',
		color: 'blue',
		description:
			'XML is a markup language that contains a set of rules for encoding text electronically. It was designed with an emphasis on simplicity, generality and usefulness on the Internet. It is a text data format, with strong Unicode support for all the world\'s languages.<br><br>I used XML a lot in the Artsound & Lights e-shop, I received several files with tables that recorded all the products of the shop and their information, both from this shop and from all the suppliers of the company. I made an interface for comparisons between them, and I was working out their items as needed, for example comparing prices during a discount period.',
		logo: Assets.XML,
		name: 'XML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'unix',
		color: 'white',
		description: 'Unix is a family of multitasking, multi-user computer operating systems. The Unix kernel is the core component of the Unix operating system, responsible for managing the system\'s resources and facilitating communication between hardware and software components. It acts as a bridge between applications and the hardware, ensuring efficient and smooth operation of the system.<br><br>My first experience with unix commands was through university when we were taught the capabilities of the kernel. Later, in my job as IT Support Engineer for Metro in Thessaloniki, we used Linux computer systems and all software maintenance was done with unix commands, for example installing newer versions of software or saving log files and searching them using wildcards.',
		logo: Assets.unix,
		name: 'Unix',
		category: 'op'
	}),
	defineSkill({
		slug: 'kali',
		color: 'blue',
		description: 'Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering.',
		logo: Assets.kali,
		name: 'Kali Linux',
		category: 'op'
	}),
	defineSkill({
		slug: 'json',
		color: 'white',
		description: 'JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is primarily used to transmit data between a server and a web application, serving as an alternative to XML.<br><br>I used JSON on an Android application via .NET to add data.',
		logo: Assets.json,
		name: 'JSON',
		category: 'markup-style'
	}),
	defineSkill({
		slug: '.NET',
		color: 'white',
		description: '.NET is a free, cross-platform, open-source developer platform for building many kinds of applications. It can run programs written in multiple languages, with C# being the most popular. It relies on a high-performance runtime that is used in production by many high-scale apps<br><br>In .NET the main project I have been working on is a music android application for recording the alternative music scene of my city Katerini. It is in co-development with a colleague and contains everything from information about the artists, to a music player for playing audio and connecting an API to update the concerts.',
		logo: Assets.dotnet,
		name: '.NET',
		category: 'framework'
	}),
	defineSkill({
		slug: 'xamarin',
		color: 'blue',
		description: 'Xamarin provides software development tools that allow a user to develop applications for Android, iOS and Windows using C# language. Xamarin is built on the .NET Framework. It allows one to create apps that easily run across multiple platforms.<br><br>In .NET I use Xamarin to create a music android application for recording the alternative music scene of my city Katerini. It is in co-development with a colleague and contains everything from information about the artists, to a music player for playing audio and connecting an API to update the concerts.',
		logo: Assets.xamarin,
		name: 'Xamarin',
		category: 'library'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'black',
		description: 'Unreal Engine is a 3D computer graphics game engine developed by Epic Games. Initially developed for PC first-person shooters, it has since been used in a variety of genres of games and has been adopted by other industries, most notably the film and television industry. Unreal Engine is written in C++ and features a high degree of portability, supporting a wide range of desktop, mobiles, console, and virtual reality platforms.<br><br>It is used in the indie game Dank Souls, which I have created with Core and I use a lot of assets and libraries from Unreal Engine.',
		logo: Assets.unreal,
		name: 'Unreal Engine',
		category: 'soft'
	}),
	defineSkill({
		slug: 'lua',
		color: 'white',
		description: 'Lua is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.<br><br>It is used in the indie game Dank Souls, which I have created with Core to run all the script code.',
		logo: Assets.lua,
		name: 'Lua',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'blender',
		color: 'orange',
		description: 'Blender is a free and open-source 3D computer graphics software tool. It is used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.<br><br>I\'ve used it for modeling objects, rigging and animation on a fanmade animation project.',
		logo: Assets.blender,
		name: 'Blender',
		category: 'soft'
	}),
	defineSkill({
		slug: 'juce',
		color: 'green',
		description: 'JUCE is an open-source cross-platform C++ application framework for desktop and mobile applications, including VST, VST3, AU, AUv3, LV2 and AAX audio plug-ins.<br><br>I have used to create a reverb plugin which processes the sound and gives the effect of space. Ideal for sound engineers, music studios, artists and games.',
		logo: Assets.juce,
		name: 'Juce',
		category: 'framework'
	}),
	defineSkill({
		slug: 'unity',
		color: 'white',
		description: 'Unity is a cross-platform game engine, has since been gradually extended to support a variety of desktop, mobile, console, augmented reality, and virtual reality platforms. It is particularly popular for iOS and Android mobile game development, is considered easy to use for beginner developers, and is popular for indie game development.<br><br>I have used Unity to create an augmented reality (AR) application, along with the use of the Vuforia library. When the camera identified a specific target, 3D graphics were displayed on the screen.',
		logo: Assets.unity,
		name: 'Unity',
		category: 'soft'
	}),
	defineSkill({
		slug: 'vuforia',
		color: 'green',
		description: 'Vuforia Engine is the most widely used platform for AR development, with support for the majority of phones, tablets, and eyewear. Developers can easily add advanced computer vision functionality to Android, iOS, and UWP apps, to create AR experiences that realistically interact with objects and the environment.<br><br>I used it to create an augmented reality (AR) application in Unity. When the camera identified a specific target, 3D graphics were displayed on the screen.',
		logo: Assets.vuforia,
		name: 'Vuforia',
		category: 'library'
	}),
	defineSkill({
		slug: 'Photoshop',
		color: 'blue',
		description: 'Adobe Photoshop is the industry-leading digital image editing and design application that offers the tools to create anything you can imagine.<br><br>I hae a great skill and I used it to edit and create a lot of images all this years that I deal with the image and graphics.',
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'soft'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
