import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const prompt = `${SYSTEM_PROMPT}
  
  User: I have ${ingredientsString}. Please give me a recipe you'd recommend I make!
  Assistant:
  `;

  try {
    const response = await hf.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: prompt,
      parameters: {
        max_new_tokens: 1024,
        temperature: 0.7,
      },
    });

    // Per HF textGeneration, la risposta è in response.generated_text
    return response.generated_text;
  } catch (err) {
    console.error(err);
  }
}

export async function getRecipeMock(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  // Simula latenza
  await new Promise((r) => setTimeout(r, 300));

  return `# 🍳 Ricetta Improvvisata

  Hai questi ingredienti: **${ingredientsString}**
  
  ## 🥘 Frittata Express
  
  ### Ingredienti
  - 3 uova
  - ${ingredientsString}
  - Olio d'oliva
  - Sale e pepe
  - Formaggio grattugiato (opzionale)
  
  ### Preparazione
  1. Scalda una padella antiaderente con un filo d'olio.
  2. Taglia a pezzetti gli ingredienti e falli rosolare per alcuni minuti.
  3. Sbatti le uova con sale, pepe e formaggio.
  4. Versa le uova nella padella e cuoci a fuoco medio.
  5. Quando i bordi iniziano a compattarsi, abbassa la fiamma e copri per 5 minuti.
  6. Servi la frittata calda e gustala!
  
  ---
  
  Ricetta generata alle ${new Date().toLocaleString()}
  `;
}
