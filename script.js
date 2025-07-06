// Store your OpenAI API key
const apiKey = 'your-api-key';

async function main() {
  // Send a POST request to the OpenAI API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', // We are POST-ing data to the API
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      'Authorization': `Bearer ${apiKey}` // Include the API key for authorization
    },
    // Send model details and system message
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: '' }]
    })
  });
  // Parse and store the response data
  const result = await response.json();
  // Log result to the console
  console.log(result);
};

// Call the main function
