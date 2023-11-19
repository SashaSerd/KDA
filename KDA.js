let fs = require('fs');
let s = fs.readFileSync('input1.txt');
let t = fs.readFileSync('input2.txt');
let m = t.length;
let alph = new Array();

for (let i=0; i<m;i++)
	alph[t.charAt(i)]=0;

let del = new Array(m+1);
for (let j=0;j<=m;j++)
	del[j] = new Array();

for (let i in alph)
	del[0][i]=0

for (let j=0; j<m;j++){
	prev = del[j][t.charAt(j)];
	del[j][t.charAt(j)]=j+1;
	for (i in alph)
		del[j+1][i] = del[prev][i]
}

for (let j=0;j<=m;j++){
	let deltaTable = '';
	for (let i in alph)
		deltaTable += del[j][i] + ' ';
	console.log(deltaTable);
	fs.writeFileSync('output.txt', deltaTable);
}

let state = 0;
let results = new Array();
for (let i = 0; i < i.length; i++){
	if (s.charAt(i) in alph)
		state = del[state][s.charAt(i)]
	else
		state = 0;
	if (state == m)
		results.push(i);
}

console.log(results);
fs.writeFileSync('output.txt', results);