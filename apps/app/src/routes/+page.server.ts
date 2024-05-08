import { db } from '$lib/server/db/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const tasks = await db.query.tasks.findMany();

	return {
		tasks
	};
};
