import { BlitzPage, useParam, useQuery, invoke } from "blitz"
import getMeetup from "app/queries/getMeetup"
import { Suspense } from "react"
import participateInMeetup from "app/mutations/participateInMeetup"

const MeetupDetails = () => {
  const meetupId = useParam("meetupId", "number")!
  const [meetup] = useQuery(getMeetup, meetupId)
  return (
    <main>
      <h1 className="bg-red-500">Hello World</h1>
      <p>Id: {meetupId}</p>
      <p>Subject: {meetup.subject}</p>
      <p>Date: {meetup.date.toISOString()}</p>

      <button
        onClick={async () => {
          await invoke(participateInMeetup, meetupId)
          window.alert("Success! Looking forward to see you there! :)")
        }}
      >
        Participate!
      </button>
    </main>
  )
}

const MeetupDetailsPage: BlitzPage = () => {
  return (
    <Suspense fallback="Loading...">
      <MeetupDetails />
    </Suspense>
  )
}
export default MeetupDetailsPage
