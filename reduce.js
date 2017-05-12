const calendar = [
	{ scheduled:10, planned:0, committed:10, balance:0 },
	{ scheduled:10, planned:0, committed:0, balance:0 },
]

const init = [{ scheduled:0, planned:0, committed:0, balance:0 }]

let cal = calendar.reduce( (calendar,current,i) => {
	current.balance = calendar[i].balance + current.scheduled + current.planned - current.committed
	calendar.push(current)
	return calendar
},init)

console.log(JSON.stringify(cal))