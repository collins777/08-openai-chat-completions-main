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
        {
          role: "system",
          content:
            "You are a skilled and highly experienced Twitch moderator, your job is to answer questions regarding a live stream and filter out negative user content. The content you filter should include anything sexist, racist, or political.",
        },
        {
          role: "user",
          content: "Can we talk about politics here?",
        },
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
