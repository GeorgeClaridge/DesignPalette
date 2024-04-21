import { writable } from 'svelte/store';

export let TablePalette = writable([
	['Purple', '#F5F1FA', '#050307', '#7F46CA', '#B48EE6', '#9A62E4'],
	['Garden Gnome', '#fafdfb', '#08100a', '#66af74', '#bba9d2', '#ba7baa'],
	['Cotton Candy', '#fbfcfd', '#0C0D16', '#6374ab', '#ba9dca', '#bb89c0'],
	['Pottery Barn', '#f8f6f6', '#161110', '#97746f', '#b2c8bc', '#8da2ad'],
	['Summer Sun', '#fbf4f1', '#1c0f07', '#cb6b35', '#e0d386', '#d7da6c']
]);

export let ActiveColours = writable([]);
