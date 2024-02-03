
import { TRPCError, initTRPC } from '@trpc/server'
import { PayloadRequest } from 'payload/types'

const t = initTRPC.context().create()
const middleware = t.middleware


export const router = t.router
export const publicProcedure = t.procedure
