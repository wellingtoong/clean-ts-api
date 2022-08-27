export interface AddSurveyModel {
  question: string
  answers: SurveyAwnswer[]
}

export interface SurveyAwnswer {
  image?: string
  answer: string
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
