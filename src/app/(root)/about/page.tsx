"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import { createUser } from "@/lib/actions/user.actions";
interface allValues {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}
const About = () => {
  const [values, setValues] = useState<allValues>({
    clerkId: "",
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    photo: "",
  });
  const clerkId = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const photo = useRef<HTMLInputElement>(null);
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ln = lastName.current!.value;
    const cl = clerkId.current!.value;
    const us = username.current!.value;
    const fn = firstName.current!.value;
    const Pt = photo.current!.value;
    const Em = email.current!.value;
    console.log(lastName);
    console.log(clerkId);
    setValues({
      lastName: ln,
      firstName: fn,
      clerkId: cl,
      photo: Pt,
      email: Em,
      username: us,
    });
    const user = {
      lastName: ln,
      firstName: fn,
      clerkId: cl,
      photo: Pt,
      email: Em,
      username: us,
    };
    const result = await createUser(user);
  };
  return (
    <main className='flex items-center justify-center flex-col section-min-heght bg-slate-500'>
      <h1>welcom to home About</h1>
      <form onSubmit={handlesubmit} className='flex flex-col'>
        <input
          type='text'
          placeholder='firstName'
          name='firstName'
          required
          ref={firstName}
        />
        <input
          type='text'
          placeholder='clerkId'
          name='clerkId'
          required
          ref={clerkId}
        />
        <input
          type='text'
          placeholder='lastName'
          name='lastName'
          required
          ref={lastName}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          required
          ref={email}
        />
        <input
          type='text'
          placeholder='username'
          name='username'
          required
          ref={username}
        />
        <input
          type='text'
          placeholder='photo'
          name='photo'
          required
          ref={photo}
        />
        <button>Submit</button>
      </form>
      <section className='bg-yellow-400 flex flex-col'>
        <h1> test{values.clerkId} </h1>
        <h1>test{values.email} </h1>
        <h1>test{values.username} </h1>
      </section>
    </main>
  );
};

export default About;
