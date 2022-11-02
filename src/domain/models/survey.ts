export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAwnswerModel[]
  date: Date
  didAnswer?: boolean
}

type SurveyAwnswerModel = {
  image?: string
  answer: string
}
