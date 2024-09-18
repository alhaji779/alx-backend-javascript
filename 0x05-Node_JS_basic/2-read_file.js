/**
 * function to 
 * load database
 * synchronously
 */
const fs = require('fs');
const path = require('path');

const countStudents = (filePath) => {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(filePath, 'utf8');

        // Split the data into rows
        const lines = data.split('\n').filter(line => line.trim() !== '');

        // If the file is empty, log and return
        if (lines.length <= 1) {
            console.log('Number of students: 0');
            return;
        }

        // Remove the header row
        const students = lines.slice(1);

        // Log the total number of students
        console.log(`Number of students: ${students.length}`);

        // Initialize an object to store students by field
        const fields = {};

        // Iterate over each student and categorize them by field
        students.forEach(student => {
            const [firstname, lastname, age, field] = student.split(',');

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        // Log the number of students in each field and the list of names
        for (const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;
