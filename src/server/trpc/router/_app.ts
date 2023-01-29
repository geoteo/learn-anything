import { router } from "../utils"
import test from "./test"

export const appRouter = router({
  test,
})
export type IAppRouter = typeof appRouter
