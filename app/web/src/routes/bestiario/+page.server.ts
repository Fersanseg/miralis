import { Utils } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { ID } from '$env/static/private';

export const load: PageServerLoad = async ({ locals, setHeaders }) => {
	try {
		const creatures = await locals.pb
			.collection('creatures')
			.getFullList(200, {
				sort: 'name'
			})
			.then((result) => {
				return result.map((item) => {
					return {
						...item,
						rarity: Utils.capitalizeFirstLetter(item.rarity),
						size: Utils.capitalizeFirstLetter(item.size),
						traits: Utils.sanitizeBarString(item.traits)
					};
				});
			});

		return {
			list: Utils.serializeNonPOJOs(creatures),
			isAdmin: locals.user && locals.user.id === ID ? true : false
		};
	} catch (err) {
		console.error('Error fetching creature list: ', err);
		throw error(500, 'Error al recuperar criaturas');
	}
};
