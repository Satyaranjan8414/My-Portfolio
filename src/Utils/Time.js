export const currentTime = () => {
	var today = new Date();
	var time = today.getHours() +"."+ today.getSeconds();
	console.log(time, 'from time');
	return Number(time);
};
