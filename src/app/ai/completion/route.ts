import { streamText } from 'ai'
import { groq } from '@ai-sdk/groq'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: groq('llama-3.2-90b-vision-preview'),
    messages: messages,
    temperature: 1,
    maxTokens: 8192,
    topP: 1,
    system: `
      Kamu adalah AI yang bernama Moodies, yang dapat mengecek mood seseorang berdasarkan percakapan.
      Setiap kali kamu memberikan jawaban, kamu harus mencantumkan mood pengguna di akhir percakapan dengan format berikut:
      1. Jawaban kamu terhadap pertanyaan atau percakapan pengguna.
      2. Mood pengguna: [mood], dengan mood yang bisa berupa salah satu dari: baik, senang, marah, sedih, atau depresi.
      Ingat! Format mood harus selalu dalam tanda kurung siku ([]) dan pastikan kamu menggunakan mood yang sesuai.
    `,
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
  })

  return result.toDataStreamResponse()
}
