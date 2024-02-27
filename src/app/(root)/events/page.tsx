import DeleteDialog from "@/components/DeleteDialog";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { allEvent, deleteEvent } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Event = async ({ searchParams }: SearchParamProps) => {
  const q = (searchParams?.q as string) || "";
  const itemPerPage = 2;
  const limit = 2;
  const page = Number(searchParams?.page) || 1;

  const { events, count } = await allEvent({ q, page, itemPerPage, limit });

  return (
    <div className='section-min-heght text-skin-white bg-skin-dark-light'>
      <Search />
      <ul className='bg-skin-main   text-skin-white'>
        {events.map((event) => {
          return (
            <li
              key={event._id}
              className='flex my-3 items-center justify-between'
            >
              <h1>{event.title} </h1>
              <h1>{event.description} </h1>
              <h1>{event.location} </h1>
              <h1>{formatDateTime(event.startDateTime).dateOnly} </h1>
              <h1>{formatDateTime(event.startDateTime).timeOnly} </h1>
              <h1>{event.price} </h1>
              <h1>{event.url.substring(0, 25)}.... </h1>
              <Button asChild variant={"secondary"}>
                <Link href={`/events/${event._id}`}>View</Link>
              </Button>
              <DeleteDialog eventId={`${event._id}`} />
              <Image
                src={event.imageUrl}
                alt='eventImg'
                width={100}
                height={100}
              />
            </li>
          );
        })}
      </ul>

      <Pagination count={count} />
    </div>
  );
};

export default Event;
