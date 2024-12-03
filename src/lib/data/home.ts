import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Vassilis';

export const lastName = 'Kontses';

export const description =
	'is a graduand of the Department of Computer Engineering and Electronic Systems of the International Hellenic University, with parallel studies of classical saxophone music. Since he was a young boy he has excelled in mathematical competitions and he has also been involved in team sports from childhood until he reached the professional league. With his mathematical spirit, teamwork and harmony of his musical studies, he looks forward to using his potential dynamically in the technology industry.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub,
		link: 'https://github.com/Kontses' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/kontses/'
	},
	{
		platform: Platform.Email,
		link: 'libys97@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'sass', 'svelte', 'ts', 'java', 'c#', 'c++', 'lua', 'unix');