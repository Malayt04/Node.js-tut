//npm - global command, come with node 
//npm --version 

//local dependency: use it only in this particular project 
//npm i <packagename>

//global dependency: use it in any project 

//npm install -g<packagename>

//sudo npm install -g <package name>(mac)


//package.json: manifest file(stores inportant information about the project)
//mannual approach(create package.json in the root,create the prop etc)
//npm init -y;

const _=require('lodash');

const items=[1,[2,[3,[4]]]];
const newItems=_.flattenDeep(items);
console.log(newItems);
