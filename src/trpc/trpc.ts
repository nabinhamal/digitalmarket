
import { ExpressContext } from '@/server'
import { TRPCError, initTRPC } from '@trpc/server'


const t = initTRPC.context<ExpressContext>().create()
const middleware = t.middleware


export const router = t.router
export const publicProcedure = t.procedure
