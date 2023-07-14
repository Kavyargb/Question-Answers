// functions/api.js
const csvWriter = require('csv-writer').createObjectCsvWriter;
const writer = csvWriter({
  path: 'question_answers.csv',
  header: [
    { id: 'question', title: 'Question' },
    { id: 'answer', title: 'Answer' },
  ],
  append: true,
});

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod === 'POST') {
      const { question, answer } = JSON.parse(event.body);

      await writer.writeRecords([{ question, answer }]);

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
