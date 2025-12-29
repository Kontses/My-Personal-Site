import fs from 'node:fs';
import dayjs from 'dayjs';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const stats = fs.statSync('static/CV.pdf');
    const lastModified = dayjs(stats.mtime).format('YYYY-MM-DD');

    return {
        lastModified
    };
}
