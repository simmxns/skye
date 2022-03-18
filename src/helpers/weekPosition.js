const currentDay = { 
	sunday: 0,  
	monday: 307,
	tuesday: 617,
	wednesday: 927,
	thursday: 1237,
	friday: 1547,
	saturday: 1855
} 

export const setScrollIndex = (indexPos, container) => container.scrollLeft = currentDay[indexPos]
export const setDaysIndex = (indexPos, container) => currentDay[indexPos] = container.scrollLeft