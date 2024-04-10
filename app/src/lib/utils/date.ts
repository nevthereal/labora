import dayjs, { type Dayjs } from 'dayjs';
import { writable } from 'svelte/store';

export const date = writable<Dayjs>(dayjs());

export const offset = writable<number>(0);

export const setOffset = (newOffset: number) => {
	if (newOffset === 0) {
		offset.set(0);
	}
	offset.update((o) => (o += newOffset));
};
