import { NextResponse } from "next/server";
import templatesData from "@/data/templates.json";

export async function GET() {
  return NextResponse.json(templatesData);
}

export async function POST(request: Request) {
  try {
    const { name, description, prompt, parameters } = await request.json();

    // Validate required fields
    if (!name || !prompt) {
      return NextResponse.json(
        { error: "Name and prompt are required" },
        { status: 400 }
      );
    }

    // Create new template
    const newTemplate = {
      id: Date.now().toString(),
      name,
      description: description || "",
      prompt,
      parameters: {
        temperature: parameters?.temperature || 0.7,
        maxTokens: parameters?.maxTokens || 1500,
      },
      createdAt: new Date().toISOString(),
    };

    // In a real app, this would save to a database
    console.log("Template saved:", newTemplate);

    return NextResponse.json({
      success: true,
      template: newTemplate,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
