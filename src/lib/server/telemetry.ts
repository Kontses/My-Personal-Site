import { env } from '$env/dynamic/private';
import type { RequestEvent } from '@sveltejs/kit';

// Βοηθητικές συναρτήσεις για την ανάλυση του User Agent
function getOS(ua: string): string {
	if (ua.includes('Windows')) return 'Windows';
	if (ua.includes('Macintosh') || ua.includes('Mac OS')) return 'macOS';
	if (ua.includes('Android')) return 'Android';
	if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
	if (ua.includes('Linux')) return 'Linux';
	return 'Unknown OS';
}

function getBrowser(ua: string): string {
	if (ua.includes('Firefox')) return 'Firefox';
	if (ua.includes('Chrome') && !ua.includes('Chromium') && !ua.includes('Edg')) return 'Chrome';
	if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
	if (ua.includes('Edg')) return 'Edge';
	return 'Unknown Browser';
}

// Φιλτράρισμα bots
function isBot(ua: string): boolean {
	const botKeywords = [
		'bot',
		'crawler',
		'spider',
		'lighthouse',
		'googlebot',
		'bingbot',
		'yandex',
		'baidu',
		'duckduckbot',
		'facebot',
		'ia_archiver',
		'monitoring',
		'slurp',
		'screaming',
		'semrush'
	];
	const lowerUa = ua.toLowerCase();
	return botKeywords.some((keyword) => lowerUa.includes(keyword));
}

export async function sendTelemetryMessage(event: RequestEvent, actionText: string) {
	// Λήψη IP διεύθυνσης
	let ip = '127.0.0.1';
	try {
		ip = event.getClientAddress();
	} catch (err) {
		// Αγνόηση σφάλματος τοπικά στο localhost
	}

	// Στο Vercel, η IP βρίσκεται στο header x-forwarded-for
	const xForwardedFor = event.request.headers.get('x-forwarded-for');
	if (xForwardedFor) {
		ip = xForwardedFor.split(',')[0].trim();
	}

	// Λήψη στοιχείων τοποθεσίας από τα Vercel Headers
	const country = event.request.headers.get('x-vercel-ip-country') || 'Unknown';
	const region = event.request.headers.get('x-vercel-ip-country-region') || 'Unknown';
	const city = event.request.headers.get('x-vercel-ip-city') || 'Unknown';

	// Λήψη User-Agent και Referer
	const userAgent = event.request.headers.get('user-agent') || 'Unknown';
	const referer = event.request.headers.get('referer') || 'Direct';

	const os = getOS(userAgent);
	const browser = getBrowser(userAgent);
	const isVisitorBot = isBot(userAgent);

	// Καταγραφή στην κονσόλα του server
	console.log(
		`[Telemetry] Action: ${actionText}, IP: ${ip}, Location: ${city}, ${region}, ${country}, OS: ${os}, Browser: ${browser}, Referer: ${referer}, Bot: ${isVisitorBot}`
	);

	// Αν ο επισκέπτης είναι Bot, σταματάμε εδώ για αποφυγή spam/rate limit
	if (isVisitorBot) {
		console.log(`[Telemetry] Blocked notification for Bot: ${browser}`);
		return;
	}

	const phone = env.WHATSAPP_PHONE;
	const apiKey = env.WHATSAPP_API_KEY;

	if (phone && apiKey) {
		try {
			let emoji = '👀';
			if (actionText.toLowerCase().includes('download')) {
				emoji = '📥';
			} else if (actionText.toLowerCase().includes('home') || actionText.toLowerCase().includes('αρχική')) {
				emoji = '🏠';
			}

			// Διαμόρφωση μηνύματος
			const message =
				`[CV Telemetry] ${emoji}\n` +
				`• Ενέργεια: ${actionText}\n` +
				`• Τοποθεσία: ${city}, ${region}, ${country}\n` +
				`• IP: ${ip}\n` +
				`• Λειτουργικό: ${os} (${browser})\n` +
				`• Προέλευση: ${referer}`;

			const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(message)}&apikey=${encodeURIComponent(apiKey)}`;

			const response = await event.fetch(callMeBotUrl);
			if (!response.ok) {
				const errorText = await response.text();
				console.error('[Telemetry] CallMeBot API Response Error:', errorText);
			}
		} catch (err) {
			console.error('[Telemetry] Σφάλμα κατά την αποστολή στο WhatsApp:', err);
		}
	}
}
