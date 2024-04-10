import dayjs, { type Dayjs } from 'dayjs';
import { writable } from 'svelte/store';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const date = writable<Dayjs>(dayjs());

export const setOffset = (operation: 'add' | 'subtract' | 'reset', unit?: 'month' | 'week') => {
	if (operation === 'add') {
		date.update((date) => {
			return date.add(1, unit);
		});
	} else if (operation === 'subtract') {
		date.update((date) => {
			return date.subtract(1, unit);
		});
	} else if (operation === 'reset') {
		date.set(dayjs());
	}
};

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const weekDays = [
	{ short: 'M', long: 'Mon' },
	{ short: 'T', long: 'Tue' },
	{ short: 'W', long: 'Wed' },
	{ short: 'T', long: 'Thu' },
	{ short: 'F', long: 'Fri' },
	{ short: 'S', long: 'Sat' },
	{ short: 'S', long: 'Sun' }
];

export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
