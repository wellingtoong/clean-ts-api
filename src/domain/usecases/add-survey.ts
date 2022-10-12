import { SurveyAwnswerModel } from '@/domain/models/survey'

export interface AddSurveyModel {
  question: string
  answers: SurveyAwnswerModel[]
  date: Date
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
