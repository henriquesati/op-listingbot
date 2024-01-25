export const getEpochTimestamp = (): number => {
	// use a timestamp if it is given, else use the current time
	let date = new Date();
	return Math.floor(date.getTime() / 1000);
};