export type SurveyResultModel = {
  surveyId: string
  question: string
  answers: SurveyResultAwnswerModel[]
  date: Date
}

type SurveyResultAwnswerModel = {
  image?: string
  answer: string
  count: number
  percent: number
}
