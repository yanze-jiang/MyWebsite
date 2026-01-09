export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number // 1-5 或百分比
  icon?: string
}

export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'C++', level: 4 },
      { name: 'Java', level: 4 },
    ]
  },
  {
    category: 'Data Analysis & Modeling',
    skills: [
      { name: 'STATA', level: 5 },
      { name: 'MATLAB', level: 4 },
      { name: 'R', level: 4 },
      { name: 'SQL', level: 4 },
    ]
  },
  {
    category: 'Machine Learning & AI',
    skills: [
      { name: 'Machine Learning', level: 5 },
      { name: 'Deep Learning', level: 4 },
      { name: 'LLM (Transformer, LoRA)', level: 4 },
      { name: 'RAG Systems', level: 4 },
    ]
  },
  {
    category: 'Development & Deployment',
    skills: [
      { name: 'Full-stack Development', level: 4 },
      { name: 'Linux Command-line', level: 4 },
      { name: 'Git/GitHub', level: 5 },
      { name: 'Cloud Platforms (Vercel, AutoDL)', level: 4 },
    ]
  },
  {
    category: 'Financial Tools',
    skills: [
      { name: 'Wind', level: 5 },
      { name: 'CSMAR', level: 5 },
      { name: 'iFind', level: 4 },
      { name: 'Excel', level: 5 },
    ]
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Mandarin (Native)', level: 5 },
      { name: 'English (Fluent)', level: 5 },
      { name: 'Cantonese (Elementary)', level: 2 },
    ]
  }
]
