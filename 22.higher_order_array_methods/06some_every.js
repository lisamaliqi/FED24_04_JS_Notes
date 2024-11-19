/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * .every() <--
 * .some() <--
 */

const students = [
	{
		name: "Johan",
		points: 1337,
	},
	{
		name: "Pernilla",
		points: -3,
	},
	{
		name: "Alicia",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
	{
		name: "Elliot",
		points: 42,
	},
];

/**
 * Array.every()
 *
 * Checks if **every** item in the array passes the condition
 */

// Are all students godkända?
const are_all_students_godkanda = students.every((student) => {
	return student.points >= 40;
});
console.log("Are all students godkända?", are_all_students_godkanda);

/**
 * Array.some()
 *
 * Checks if **some** items in the array passes the condition
 */

// Are some students godkända?
const are_some_students_godkanda = students.some((student) => {
	return student.points >= 40;
});
console.log("Are some students godkända?", are_some_students_godkanda);
