import EventForm from "@/components/EventForm";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  console.log(userId);
  return (
    <div className='flex flex-col bg-yellow-400 mt-11 mx-auto max-w-[1140px] section-min-heght'>
      <EventForm userId={userId} type='Create' />
    </div>
  );
};

export default page;
