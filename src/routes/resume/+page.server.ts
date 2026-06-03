import fs from 'node:fs';
import dayjs from 'dayjs';

// Ενεργοποιούμε το prerender ώστε η ημερομηνία τροποποίησης του CV να διαβάζεται κατά το build time (όταν το αρχείο υπάρχει τοπικά)
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Ανάγνωση των στοιχείων του αρχείου κατά το build time
	const stats = fs.statSync('static/CV.pdf');
	const lastModified = dayjs(stats.mtime).format('YYYY-MM-DD');

	return {
		lastModified
	};
}
