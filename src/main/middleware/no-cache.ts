import { Request, Response, NextFunction } from 'express'

export const noCache = (req: Request, res: Response, next: NextFunction): void => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('pragma', 'no-cache')
  res.set('Expires', '0')
  res.set('Surrogate-Control', 'no-store')
  next()
}