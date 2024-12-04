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
		description: 'Svelte is a free and open-source front end component framework or language is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance.<br><br> I used it a lot for creating websites, along with it and the SUPER FC\*KNG BEAUTIFULL website you are currently surfing on.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'wordpress',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Wordpress,
		name: 'Wordpress',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'xml',
		color: 'black',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.XML,
		name: 'XML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'unix',
		color: 'white',
		description: 'asdasdasdasd',
		logo: Assets.unix,
		name: 'Unix',
		category: 'op'
	}),
	defineSkill({
		slug: 'json',
		color: 'white',
		description: 'asdasdasdasd',
		logo: Assets.json,
		name: 'JSON',
		category: 'markup-style'
	}),
	defineSkill({
		slug: '.NET',
		color: 'putple',
		description: 'asdasdasdasd',
		logo: Assets.dotnet,
		name: '.NET',
		category: 'framework'
	}),
	defineSkill({
		slug: 'xamarin',
		color: 'blue',
		description: 'asdasdasdasd',
		logo: Assets.xamarin,
		name: 'Xamarin',
		category: 'library'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'black',
		description: 'asdasdasdasd',
		logo: Assets.unreal,
		name: 'Unreal Engine',
		category: 'soft'
	}),
	defineSkill({
		slug: 'lua',
		color: 'purple',
		description: 'asdasdasdasd',
		logo: Assets.lua,
		name: 'Lua',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'blender',
		color: 'orange',
		description: 'asdasdasdasd',
		logo: Assets.blender,
		name: 'Blender',
		category: 'soft'
	}),
	defineSkill({
		slug: 'juce',
		color: 'green',
		description: 'asdasdasdasd',
		logo: Assets.juce,
		name: 'Juce',
		category: 'framework'
	}),
	defineSkill({
		slug: 'unity',
		color: 'white',
		description: 'asdasdasdasd',
		logo: Assets.unity,
		name: 'Unity',
		category: 'soft'
	}),
	defineSkill({
		slug: 'vuforia',
		color: 'green',
		description: 'asdasdasdasd',
		logo: Assets.vuforia,
		name: 'Vuforia',
		category: 'library'
	}),
	defineSkill({
		slug: 'Photoshop',
		color: 'blue',
		description: 'asdasdasdasd',
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
