import { json } from '@sveltejs/kit';

export async function PUT({ request, locals }) {
	try {
		const req = await request.json();
		const id = req.record.id;
		const hidden = req.hidden;

		const pbUpdate = await locals.pb.collection('creatures').update(id, { hidden: hidden });
		return json(pbUpdate);
	} catch (err) {
		console.error('Error trying to update the hidden status of a monster', err);
	}
}
