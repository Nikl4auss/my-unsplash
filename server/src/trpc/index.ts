import * as trpc from '@trpc/server'

export const appRouter = trpc
  .router()
  .query('hello', {
    resolve() {
      return "Hello World"
    }
  })


export type AppRouter = typeof appRouter
