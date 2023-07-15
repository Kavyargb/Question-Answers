// functions/api.js
const fs = require('fs');
const csv = require('fast-csv');

const csvFilePath = 'question_answers.csv';

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod === 'POST') {
      const { question, answer } = JSON.parse(event.body);

      const csvStream = csv.format({ headers: true });
      const writableStream = fs.createWriteStream(csvFilePath, { flags: 'a' });

      csvStream.pipe(writableStream);
      csvStream.write({ question, answer });
      csvStream.end();

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Question and answer saved successfully.' }),
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Not Found' }),
    };
  } catch (error) {
    console.error('Failed to save question and answer:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
