import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { sendTelemetryMessage } from '$lib/server/telemetry';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const url = event.url;
	const action = url.searchParams.get('action') || 'unknown';
	const actionText = action === 'preview' ? 'Προβολή CV (Preview)' : 'Λήψη CV (Download)';

	// Κλήση της κοινής συνάρτησης τηλεμετρίας
	await sendTelemetryMessage(event, actionText);

	// Ανακατεύθυνση στο πραγματικό στατικό αρχείο PDF, αποφεύγοντας το fs.readFileSync
	throw redirect(307, `${base}/CV.pdf`);
};
