export interface Education {
  school?: string
  schools?: Array<{ name: string; location?: string; uppercase?: boolean }>
  location?: string
  degree: string
  period: string
  major?: string
  cgpa?: string
  coursework?: string[]
  honor?: string
  scholarship?: string
  currentlyWorkingOn?: string
}

export interface WorkExperience {
  company: string
  position: string
  period: string
  description: string[]
  technologies?: string[]
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone?: string
  location?: string
  bio: string
  avatar?: string
}

export interface CVData {
  personal: PersonalInfo
  education: Education[]
  experience: WorkExperience[]
}

export const cvData: CVData = {
  personal: {
    name: 'JIANG, Yanze Robert (江彥澤)',
    title: 'Data Science & Computer Science Student',
    email: 'robertyanzejiang@outlook.com',
    phone: '5950 4201',
    location: 'Hong Kong',
    bio: 'Bachelor of Science student at The Chinese University of Hong Kong, majoring in Interdisciplinary Data Analytics & Computer Science and Engineering. Focused on research and applications in machine learning, large language models, and financial technology. Experienced in translating theoretical concepts into practical applications.'
  },
  education: [
    {
      schools: [
        {
          name: 'The Chinese University Of Hong Kong',
          location: 'Hong Kong, China',
          uppercase: false
        },
        {
          name: 'The Chinese University Of Hong Kong, Shenzhen',
          location: 'Shenzhen, China',
          uppercase: false
        }
      ],
      degree: 'Bachelor of Engineering',
      period: 'Sep 2023 - Jul 2027',
      major: 'Interdisciplinary Data Analytics & Computer Science and Engineering Collaborative Double Major Program by CUHK and CUHK-Shenzhen',
      cgpa: '3.83/4.00',
      coursework: [
        'Data Structure',
        'Optimization',
        'Machine Learning',
        'Database Management',
        'Regression',
        'Time Series',
        'Financial Management',
        'Portfolio Management'
      ],
      honor: 'Dean\'s List 2023-24, 2024-25',
      scholarship: 'Full Tuition Scholarship (4 years) | Top 0.5% in Gaokao',
      currentlyWorkingOn: 'Algorithm Design, Computer Organization, Natural Language Processing'
    }
  ],
  experience: []
}
