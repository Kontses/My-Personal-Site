import { sendTelemetryMessage } from '$lib/server/telemetry';
import type { PageServerLoad } from './$types';

// Απενεργοποιούμε το prerender ώστε η αρχική σελίδα να σερβίρεται δυναμικά
export const prerender = false;

export const load: PageServerLoad = async (event) => {
	// Στέλνουμε την ειδοποίηση τηλεμετρίας για την αρχική σελίδα
	await sendTelemetryMessage(event, 'Επίσκεψη Αρχικής (Home Page Visit)');
	
	return {};
};
