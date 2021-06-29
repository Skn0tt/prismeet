import { AuthorizationError, NotFoundError } from "blitz"
import db from "db"

export default async function getMeetup(id: number) {
  const meetup = await db.meetup.findUnique({ where: { id: id } })
  if (!meetup) {
    throw new AuthorizationError()
    throw new NotFoundError()
  }

  return meetup
}
