export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAwnswerModel[]
  date: Date
}

type SurveyAwnswerModel = {
  image?: string
  answer: string
}
