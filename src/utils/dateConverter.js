export const dateConverter = (dateString, localeLanguage, dateOptions) => {
	const inDateFormat = new Date(dateString)
	return inDateFormat.toLocaleString(localeLanguage, dateOptions)
}