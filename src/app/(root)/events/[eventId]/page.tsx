// "use client";
import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import React from "react";
import Image from "next/image";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { UpdateForm } from "@/components/UpdateForm";
interface paramsProps {
  params: { eventId: string };
}

const SingleEvent = async ({ params: { eventId } }: paramsProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(eventId);
  return (
    <div className='section-min-heght'>
      <h1>{event.title} </h1>
      <h1>{event._id} </h1>
      <h1>{event.description} </h1>
      <h1>{event.location} </h1>
      <h1>{formatDateTime(event.startDateTime).dateOnly} </h1>
      <h1>{formatDateTime(event.endDateTime).dateTime} </h1>
      <h1>{event.price} </h1>
      <h1>{event.url} </h1>
      <Image src={event.imageUrl} alt='eventImg' width={100} height={100} />
      <hr />
      <hr />
      <UpdateForm event={event} userId={userId} />
    </div>
  );
};

export default SingleEvent;
