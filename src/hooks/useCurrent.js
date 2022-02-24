import { writable } from "svelte/store"

export const useCurrent = (initState) => {
	const { subscribe, update } = writable(initState)
	const onCurrent = () => update(prev => prev = subscribe)
	return { current: { subscribe } , onCurrent }
}