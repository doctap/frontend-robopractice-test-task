export const dateStringNormalize = (date: string, time: string) => `${date} ${time.replace(/-/, ':')}`;

/**Вычисляет количество часов от начала и до конца промежутка времени.
 * Если `@param date1` не указан то вычисление будет производится в пределах суток
 * @param date2 конец отрезка времени по дате
 * @param timeEnd конец отрезка времени по часам/минутам
 * @param timeStart начало отрезка времени по часам/минутам
 * @param func нормализует строку в формат `2022-21-09 22:07`
 * @param date1 не обязательный параметр! начало отрезка времени по дате
 * @returns строку
 */
export const getPeriodOfTime = (
	date2: string,
	timeEnd: string,
	timeStart: string,
	func: (date: string, time: string) => string,
	date1?: string
) => {
	const milliseconds = Number(new Date(func(date2, timeEnd))) - Number(new Date(func(date1 ?? date2, timeStart)))
	const minutes = milliseconds / 1000 / 60
	const hours = Math.trunc(minutes / 60)
	return (`${hours < 10 ? '0' + hours : hours}:${(minutes - (hours * 60)) < 10 ? '0' + (minutes - (hours * 60)) : (minutes - (hours * 60))}`)
}
