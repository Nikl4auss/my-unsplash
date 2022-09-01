import * as trpcExpress from '@trpc/server/adapters/express'
import * as trpc from '@trpc/server'
import { AppRouter, appRouter } from './trpc'
import express from 'express'
import cors from 'cors'
const app = express()

const createContext = ({
  req,
  res
}: trpcExpress.CreateExpressContextOptions) => ({})

type Context = trpc.inferAsyncReturnType<typeof createContext>

app.use(cors())
app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext
}))

app.listen(3000)

