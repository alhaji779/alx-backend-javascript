export default function hasvaluesFromArray(set, array) {
	return array.every(val => set.has(val));
}
