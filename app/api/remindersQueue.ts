import { Queue } from "quirrel/blitz"

export default Queue("api/remindersQueue", async (email: string) => {
  console.log("send an email to " + email)
})
