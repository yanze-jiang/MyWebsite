export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'easyjob',
    title: 'EasyJob - AI CV Helper',
    description: 'An AI-powered CV helper application that assists users in creating and optimizing their resumes using advanced natural language processing techniques.\n\nAvailable Functions:\n• Resume Polish\n• Cover Letter\n\nNew Function "CV Editor" (In Development)\n\nTechnical Details:\n• Model: qwen3-plus',
    technologies: ['React', 'TypeScript', 'AI/ML', 'NLP', 'qwen3-plus'],
    githubUrl: 'https://github.com/yanze-jiang/EasyJob',
    liveUrl: 'https://easyjob-frontend.onrender.com/',
    featured: true
  },
  {
    id: 'qwen-psychological',
    title: 'Qwen3-4B Fine-tuning for Psychological Counseling with RAG',
    description: 'Fine-tuned Qwen3-4B model with LoRA and PEFT on psychological dialogue data, achieving 79.6% accuracy on professional benchmarks. Improved performance by 11% through prompt engineering. Integrated RAG (Retrieval-Augmented Generation) system for enhanced counseling responses.',
    technologies: ['Python', 'PyTorch', 'LoRA', 'PEFT', 'RAG', 'LLM', 'NLP'],
    githubUrl: 'https://github.com/yanze-jiang/Qwen3-4B-Fine-tuning-for-Psychological-Counseling-with-RAG',
    featured: true
  }
]
