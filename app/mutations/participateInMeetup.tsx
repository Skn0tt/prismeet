import db from "db"
import { Ctx } from "blitz"
import remindersQueue from "app/api/remindersQueue"

export default async function participateInMeetup(meetupId: number, ctx: Ctx) {
  ctx.session.$authorize()

  await db.meetup.update({
    where: {
      id: meetupId,
    },
    data: {
      participants: {
        connect: {
          id: ctx.session.userId,
        },
      },
    },
  })

  await remindersQueue.enqueue("vinyl@prisma.com", {
    delay: "5min",
  })
}
