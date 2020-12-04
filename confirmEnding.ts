// Check if a string (first argument, str) ends with the given target string (second argument, target).

interface confirmEndingParams {
	str: string;
	target: string;
}

// V1
const confirmEnding = (params: confirmEndingParams): boolean => {
	const myRegex = new RegExp(`${params.target}$`);
	return myRegex.test(params.str);
};

// V2
// const confirmEnding = (params: confirmEndingParams): boolean => {
//   const { str, target } = params;
//   const endString = str.slice(str.length - target.length);
//   return endString === target;
// }

// V3
// const confirmEnding = (params: confirmEndingParams): boolean => {
//   const { str, target } = params;
//   let endString = '';
//   for (let i = str.length - target.length; i < str.length; i++) {
//     endString += str[i];
//   }
//   console.log("I am end", endString);
//   return endString === target;
// }

//V4
// const confirmEnding = (params: confirmEndingParams): boolean => {
//   const { str, target } = params;
//   let index = -1;
//   for (let i = str.length - target.length; i < str.length; i++) {
//     if (str[i] !== target[++index]) return false;
//   }
//   return true;
// }

//V5
// const confirmEnding = (params: confirmEndingParams): boolean => {
//   const { str, target } = params;
//   let index = 0;
//   let i = str.length - target.length;
//   while (i < str.length) {
//     if (str[i] !== target[index++]) return false;
//     i++;
//   }
//   return true;
// }

console.log(
	'Should return true >',
	confirmEnding({ str: 'Banstian', target: 'ion' })
);
