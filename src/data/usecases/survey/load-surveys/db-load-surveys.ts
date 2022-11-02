import { LoadSurveysRepository, SurveyModel, LoadSurveys } from './db-load-surveys-protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (
    private readonly loadServeysRepository: LoadSurveysRepository
  ) {}

  async load (accountId: string): Promise<SurveyModel[]> {
    const surveys = await this.loadServeysRepository.loadAll(accountId)
    return surveys
  }
}
