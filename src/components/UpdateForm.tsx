"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IEvent } from "@/lib/models/event.model";
import { updateFormSchema } from "@/lib/validator";
import { updateEvent } from "@/lib/actions/event.actions";
import { UpdateEventParams } from "@/types";
import { redirect, useRouter } from "next/navigation";
import { Slider } from "@/components/ui/slider";

export function UpdateForm({ userId, event }: UpdateEventParams) {
  const router = useRouter();
  const initialValues = {
    ...event,
    startDateTime: new Date(event.startDateTime),
  };
  const form = useForm<z.infer<typeof updateFormSchema>>({
    resolver: zodResolver(updateFormSchema),
    defaultValues: initialValues,
  });
  async function onSubmit(values: z.infer<typeof updateFormSchema>) {
    try {
      const updatedEvent = await updateEvent({
        userId,
        event: { ...event, ...values, _id: event._id },
      });
      alert("updated successfully");
    } catch (err) {
      console.log(err);
      alert("updated failed");
    }
    router.push("/events");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='limit'
          defaultValue={20}
          render={({ field }) => (
            <FormItem className=''>
              <FormLabel>Limit:</FormLabel>
              <FormControl>
                <>
                  <div>
                    <Slider
                      className='bg-blue-400 text-blue-700'
                      onValueChange={field.onChange}
                      defaultValue={[field.value]}
                      max={100}
                      step={10}
                    />
                    <span>{field.value}</span>
                  </div>
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>
          {" "}
          {form.formState.isSubmitting ? "Updating..." : "Update Event"}{" "}
        </Button>
      </form>
    </Form>
  );
}
