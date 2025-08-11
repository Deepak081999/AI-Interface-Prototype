import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { model, prompt, parameters } = await request.json();

    // Validate required fields
    if (!model || !prompt) {
      return NextResponse.json(
        { error: "Model and prompt are required" },
        { status: 400 }
      );
    }

    // Simulate API processing time
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000)
    );

    // Mock responses based on different scenarios
    const mockResponses = [
      {
        content: `Based on your prompt "${prompt.substring(0, 50)}${
          prompt.length > 50 ? "..." : ""
        }", here's a comprehensive response:\n\n**Analysis:**\nYour request has been processed using the ${
          model.name
        } model with ${
          parameters.temperature
        } temperature setting.\n\n**Key Points:**\n• Detailed response generation\n• Context-aware processing\n• Optimized for your specific parameters\n• Structured output formatting\n\n**Conclusion:**\nThis response demonstrates the full capabilities of the AI interface, including proper formatting, structured content, and interactive features like copy and download functionality.`,
        tokens: Math.floor(Math.random() * 300) + 100,
        finishReason: "stop",
      },
      {
        content: `Thank you for your query! Let me provide a detailed response:\n\n## Understanding Your Request\n\nYour prompt focuses on "${prompt
          .split(" ")
          .slice(0, 5)
          .join(" ")}"${
          prompt.split(" ").length > 5 ? "..." : ""
        }.\n\n## Detailed Analysis\n\n1. **Context Processing**: The ${
          model.name
        } model has analyzed your input with a temperature of ${
          parameters.temperature
        }\n2. **Content Generation**: Utilizing ${
          parameters.maxTokens
        } token limit for optimal response length\n3. **Quality Assurance**: Ensuring coherent and relevant output\n\n## Implementation Notes\n\n- Response generated with advanced language modeling\n- Optimized for clarity and usefulness\n- Includes proper formatting and structure\n- Supports interactive features (copy/download)\n\nWould you like me to elaborate on any specific aspect of this response?`,
        tokens: Math.floor(Math.random() * 250) + 150,
        finishReason: "stop",
      },
      {
        content: `I'll help you with that! Here's my response to your prompt:\n\n### Executive Summary\n\nYour request has been processed successfully using the ${
          model.name
        } model. The response incorporates your specified parameters (temperature: ${
          parameters.temperature
        }, max tokens: ${
          parameters.maxTokens
        }) for optimal results.\n\n### Detailed Response\n\n**Primary Analysis:**\n- Input processing completed\n- Context understanding verified\n- Response optimization applied\n- Quality checks passed\n\n**Technical Details:**\n- Model: ${
          model.name
        } (${model.provider})\n- Processing time: ~${(
          Math.random() * 3 +
          1
        ).toFixed(
          1
        )}s\n- Response quality: High\n- Relevance score: 95%\n\n**Next Steps:**\nYou can copy this response to your clipboard or download it as a JSON file for further use. The interface supports both light and dark themes for optimal viewing experience.\n\nIs there anything specific you'd like me to clarify or expand upon?`,
        tokens: Math.floor(Math.random() * 200) + 120,
        finishReason: "stop",
      },
    ];

    // Select random response
    const response =
      mockResponses[Math.floor(Math.random() * mockResponses.length)];

    // Add some randomization based on temperature
    if (parameters.temperature > 0.8) {
      response.content +=
        "\n\n*Note: High temperature setting enabled creative and varied response generation.*";
    } else if (parameters.temperature < 0.3) {
      response.content +=
        "\n\n*Note: Low temperature setting ensured focused and consistent response generation.*";
    }

    return NextResponse.json({
      success: true,
      response: {
        content: response.content,
        metadata: {
          model: model.name,
          provider: model.provider,
          tokens: response.tokens,
          temperature: parameters.temperature,
          maxTokens: parameters.maxTokens,
          finishReason: response.finishReason,
          timestamp: new Date().toISOString(),
        },
      },
    });
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
