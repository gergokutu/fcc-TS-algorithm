interface IRepParams {
	str: string;
	num: number;
}

const repeatStringNumTimes = ({ str, num }: IRepParams): string => {
	return num < 1 ? '' : str + repeatStringNumTimes({ str, num: num - 1 });
};

console.log(
	'Should be abcabcabc >',
	repeatStringNumTimes({ str: 'abc', num: 3 })
);

const withReplace = (params: IRepParams): string => {
	const { str, num } = params;

	return str.replace(str, match => {
		let result = '';
		for (let i = 0; i < num; i++) {
			result += match;
		}
		return result;
	});
};

console.log('Should be abcabcabc >', withReplace({ str: 'abc', num: 3 }));
