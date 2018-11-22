export function shuffle (arr) {
	let _arr = arr.slice()
	let max= _arr.length-1;
	for (let i = 0; i < _arr.length; i++) {
		let j = getRandomInt(i, max)
		let t = _arr[i]
		_arr[i] = _arr[j]
		_arr[j] = t
	}
	  return _arr
}
function getRandomInt(min,max){
	return Math.floor(Math.random()*Math.abs(min-max+1)+min)
}

export function debounce (fn, delay) {
	let timer;
	return function(...args) {
		if(timer) {
			clearTimeout(timer);
		}
		timer=setTimeout(()=>{
			fn.apply(this, args)
		},delay)	
	}
	
}
export function formatTime(time) {
	let dateTimeStamp = new Date(time).getTime()
	let minute = 1000 * 60;
	let hour = minute * 60;
	let day = hour * 24;
	/* let halfamonth = day * 15; */
	let month = day * 30;
	let now = new Date().getTime();
	let diffValue = now - dateTimeStamp;
	let monthC = diffValue / month;
	let weekC = diffValue / (7 * day);
	let dayC = diffValue / day;
	let hourC = diffValue / hour;
	let minC = diffValue / minute;
	let result = ''
	if(monthC >= 1) {
		result= parseInt(monthC) + "个月前发布";
	}
	else if(weekC >= 1) {
		result= parseInt(weekC) + "周前发布";
	}
	/* if(weekC > 1) {
		
		result= `${time.split(" ")[0]} 发布`;
	}
	else if(weekC == 1) {
		result= parseInt(weekC) + "周前发布";
	} */
	else if(dayC >= 1) {
		//console.log(`${time.split(" ")[0]}发布`)
		result= parseInt(dayC) +"天前发布";
	}
	else if(hourC >= 1) {
		result= parseInt(hourC) +"小时前发布";
	}
	else if(minC >= 1) {
		result= parseInt(minC) +"分钟前发布";
	}
	else {
		result="刚刚发布";
		
	}
	return result;
}

//js创建唯一id
function S4() {
	return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
export function createId() {
	return "static" + guid();
}
