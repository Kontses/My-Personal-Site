import fs from 'node:fs';
import path from 'node:path';
import { sendTelemetryMessage } from '$lib/server/telemetry';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const url = event.url;
	const action = url.searchParams.get('action') || 'unknown';
	const actionText = action === 'preview' ? 'Προβολή CV (Preview)' : 'Λήψη CV (Download)';

	// Κλήση της κοινής συνάρτησης τηλεμετρίας
	await sendTelemetryMessage(event, actionText);

	// Ανάγνωση και επιστροφή του αρχείου PDF
	try {
		const filePath = path.resolve('static/CV.pdf');
		const fileBuffer = fs.readFileSync(filePath);

		const headers: HeadersInit = {
			'Content-Type': 'application/pdf'
		};

		// Αν πρόκειται για download, εξαναγκάζουμε τη λήψη με Content-Disposition header
		if (action === 'download') {
			headers['Content-Disposition'] = 'attachment; filename="CV.pdf"';
		}

		return new Response(fileBuffer, { headers });
	} catch (err) {
		console.error('[CV Telemetry] Σφάλμα ανάγνωσης αρχείου CV.pdf:', err);
		return new Response('Το αρχείο δεν βρέθηκε.', { status: 404 });
	}
};
