import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API with direct API key for testing
const apiKey = 'AIzaSyAK5mtuku8WOk7IaH6uVQSy_7mcQBOucCQ';
console.log('Using API Key:', `${apiKey.slice(0, 4)}...${apiKey.slice(-4)}`);

const genAI = new GoogleGenerativeAI(apiKey);

// Cache for storing translations
const translationCache = new Map<string, string>();

// Generate a cache key for the content and language
function getCacheKey(content: string, language: string): string {
  return `${content}-${language}`;
}

export async function translateContent(content: string, targetLanguage: string): Promise<string> {
  try {
    // Check cache first
    const cacheKey = getCacheKey(content, targetLanguage);
    const cachedTranslation = translationCache.get(cacheKey);
    
    if (cachedTranslation) {
      console.log('Using cached translation for:', targetLanguage);
      return cachedTranslation;
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    console.log('Using Gemini 2.0 Flash model');

    const prompt = `Translate the following text to ${targetLanguage}. Maintain the original formatting and structure, including any HTML tags or markdown. Only return the translated text without any additional explanations:

${content}`;

    console.log('Sending translation request for language:', targetLanguage);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translatedText = response.text();
    
    // Store in cache
    translationCache.set(cacheKey, translatedText);
    console.log('Translation cached for:', targetLanguage);
    
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Failed to translate content');
  }
} 