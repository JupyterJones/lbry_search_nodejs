#!/usr/local/bin/node

const shell = require('shelljs')
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

readline.question('Search for what ? ', topic => {
   console.log(`Search for: ${topic}!`);
   shell.exec(`lbrynet claim search --text=${topic} >>${topic}.txt`);
   console.log(`\n`,`The search results are in: ${topic}.txt`);

setTimeout(function() {
   const readLastLines = require('read-last-lines');
   readLastLines.read(`${topic}.txt`, 5)
   .then((lines) => console.log('\n',lines));
   }, 3000);

readline.close();
});



