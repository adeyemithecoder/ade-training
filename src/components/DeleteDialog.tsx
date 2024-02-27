"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteEvent } from "@/lib/actions/event.actions";
import { useTransition } from "react";
import { Button } from "./ui/button";

const DeleteDialog = ({ eventId }: { eventId: string }) => {
  let [isPending, startTransition] = useTransition();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={"destructive"}>Delete</Button>{" "}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            event and remove anything concern with this event.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className=' mx-auto'>
          <AlertDialogCancel className='mx-8'>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className='mx-8'
            onClick={() =>
              startTransition(async () => {
                await deleteEvent({ eventId });
              })
            }
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
