export interface SurveyModel {
  id: string
  question: string
  answers: SurveyAwnswerModel[]
  date: Date
}

export interface SurveyAwnswerModel {
  image?: string
  answer: string
}
