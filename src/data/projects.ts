export interface Project {
  id: string
  title: string
  summary: string
  description: string
  impact?: string[]
  role?: string
  period?: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'ai-image-detection',
    title: 'AI Image Detection - Causal FIND',
    summary: 'A computer vision project for detecting AI-generated images using Tiny-GenImage training data and MNW testing.',
    description: 'Built an AI-generated image detection pipeline for the DDA4210 course project, including unified baselines and a causal FIND model for real/fake image classification.',
    impact: [
      'Implemented ResNet18 and frozen CLIP baselines for controlled comparison.',
      'Developed a Causal FIND model with a frozen CLIP vision backbone, causal masking head, and adversarial/counterfactual training objectives.',
      'Prepared training, validation, and MNW evaluation workflows with ROC reporting and TPR@target-FPR utilities.'
    ],
    role: 'Project manager',
    period: 'Spring 2026',
    technologies: ['Python', 'PyTorch', 'CLIP', 'Transformers', 'Computer Vision', 'scikit-learn', 'Hugging Face'],
    githubUrl: 'https://github.com/yanze-jiang/AI-Image-Detection',
    featured: true
  },
  {
    id: 'qwen-psychological',
    title: 'Qwen3-4B Fine-tuning for Psychological Counseling with RAG',
    summary: 'Fine-tuned Qwen3-4B with LoRA and PEFT, then extended responses with retrieval-augmented generation.',
    description: 'Adapted Qwen3-4B on psychological dialogue data and built a RAG pipeline to ground counseling-style responses in retrieved context.',
    impact: [
      'Reached 79.6% accuracy on professional benchmark evaluation.',
      'Improved performance by 11% through prompt engineering.',
      'Combined model fine-tuning with retrieval to improve response relevance.'
    ],
    role: 'LLM fine-tuning and RAG developer',
    period: '2026',
    technologies: ['Python', 'PyTorch', 'LoRA', 'PEFT', 'RAG', 'LLM', 'NLP'],
    githubUrl: 'https://github.com/yanze-jiang/Qwen3-4B-Fine-tuning-for-Psychological-Counseling-with-RAG',
    featured: true
  },
  {
    id: 'easyjob',
    title: 'EasyJob - AI CV Helper',
    summary: 'An AI-powered resume assistant for CV editing, project polishing, and cover letter drafting.',
    description: 'Built a full-stack AI application that helps users improve resume materials with structured LLM workflows. The product supported CV editing, project bullet polishing, and cover letter generation through qwen3-plus.',
    impact: [
      'Designed the user-facing workflow for resume optimization tasks.',
      'Integrated LLM API calls into a React and TypeScript frontend experience.',
      'Identified and documented API exposure risk, then discontinued the live deployment responsibly.'
    ],
    role: 'Full-stack developer',
    period: 'Winter 2025-2026',
    technologies: ['React', 'TypeScript', 'AI/ML', 'NLP', 'qwen3-plus'],
    githubUrl: 'https://github.com/yanze-jiang/EasyJob',
    liveUrl: 'https://easyjob-frontend.onrender.com/',
    featured: true
  }
]
