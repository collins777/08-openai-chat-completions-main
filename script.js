// The apiKey variable is loaded from apikey.js

async function main() {
  // Send a POST request to the OpenAI API
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST", // We are POST-ing data to the API
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
      Authorization: `Bearer ${apiKey}`, // Include the API key for authorization
    },
    // Send model details and system message
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "user", content: "Tell me fun fact about gaming computers" },
      ],
    }),
  });
  // Parse and store the response data
  const result = await response.json();
  // Log only the AI's text response to the console
  const aiMessage = result.choices[0].message.content;
  console.log(aiMessage);
}

// Call the main function
main();
