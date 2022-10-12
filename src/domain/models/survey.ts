export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAwnswerModel[]
  date: Date
}

export type SurveyAwnswerModel = {
  image?: string
  answer: string
}
