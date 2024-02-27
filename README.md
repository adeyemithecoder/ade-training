{
steps to use clerk in your next.js app
step 1 npm install @clerk/nextjs
step 2 login to clerk website
step 3 Add application
step 4 Give it a name and select how you want your user to sign-in by clicking email and google or facebook e.t.c then create app
step 5 it redict you to your home page then copy your env file to next app
step 6 Then Click continue in dec
step 7 Goto your main layout wrap the html with ClerkProvider
step 8 Copy the middleware file from documentaion then paste to your own middleware file
step 9 Edit Your middleware the way you want as below is for example
export default authMiddleware({
publicRoutes: [
'/',
'/test',
'/test/:id',
'/api/webhook/clerk',
],
ignoredRoutes: [
'/api/webhook/clerk',
'/api/webhook/stripe',
'/api/uploadthing'
]
});
step 10 SignedIn is a component from next/clerk that u can see after sign-out
and SignedOut is a component from next/clerk that u can see after sign-in

<div className="flex w-32 justify-end gap-3">
<SignedIn>
<UserButton afterSignOutUrl="/" />

<Link href="/sign-in">
Login
</Link>
</SignedIn>
<SignedOut>
<Link href="/sign-in">
Login
</Link>
</SignedOut>
</div>

step 11
create (auth)/sign-in/sign-in.tsx and /sign-up/[[...sign-up]]/sign-up.tsx
import { SignIn } from "@clerk/nextjs"; in sign-in page
import { SignUp } from "@clerk/nextjs";in sign-up page

steps 12 update your env as follow

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZmlybS1nZWxkaW5nLTQ4LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_C2E70AOhlB42AbSov4gZfuQlHSguzKpimNUIQwaUQ7
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

step 13 create layout file inside auth folder to customize sign-in and sign-out as fpllow
const Layout = ({ children }: { children: React.ReactNode }) => {
return (

<div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
{children}
</div>
)
}
export default Layout
 
Step 14 provide clerk id in your user model which connection between clerk user and database user
  clerkId: { type: String, required: true, unique: true },

Step 15 we need webhook which is event trigger that is when something happen trigger event,
then make a request and process that event.

Step 16 on your clerk dashboard enable webhhoks, Then click webhhok and add endpoint
Then Goto session Click edit under customize User token Then paste below code
{
"userId": "{{user.public_metadata.userId}}"
}
Step 17 npm i svix to start webhook or go here https://clerk.com/docs/users/sync-data
Step 18 create this path api/webhook/clerk/route.ts then paste your svix file
Step 19 Then Start Edit your svix file, clear console.log in line 54 & 54 And Start
your work by Do something base on specific event trigger
Step 20 host your app to any hosting platform you like

step 21 Then add endpoint like this https://clerktest-sigma.vercel.app/api/webhook/clerk
and copy your sign-in Secret, paste to your env file as below
WEBHOOK_SECRET=whsec_8rL1u74KnlX+5kP0XOoojUrydfx8GNfd
Step 22 Turn on specific event like all event under user

steps to use shadcn-ui goto it website
shadcn-ui@latest add sheet
npx shadcn-ui@latest add alert-dialog
npx shadcn-ui@latest add checkbox textarea
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
To use shadcn form Go to
https://ui.shadcn.com/docs/components/form

steps to use uploadthing
Go to https://uploadthing.com/dashboard
npm i uploadthing @uploadthing/react
login and create app
Goto api key and copy your secret

STEPS TO USE PRISMA

STEP 1 npm i prisma -D npm i @prisma/client
STEP 2 npx prisma init
STEP 3 Go and edit schema-prisma file and env file
STEP 4 Write your model
STEP 5 npx prisma db pull
STEP 6 npx prisma migrate dev --name init
STEP 7
STEP 8 npx prisma generate
STEP 9 npx prisma studio

Note on Prisma model relationship
one to one relationship
user must only have one id that is profile will reference to
Then have profile Profile? in the model
also profile will have
user User @relation(fields: [userId], references: [id])

one to many relationship

model User {
id Int @id @default(autoincrement()) This indicate primary key of this model
email String @unique This indicate it most be unique to all users
name String @map("firstName") Change this name to firstname in our DB
role Role? @default(USER) it means role is optional or default value USER from enum
profileId? Int @unique
profile Profile? @relation(fields: [profileId], references: [id])
posts Post[] It means each user can have multiple post
@@map("users") We use This to change User model to users in our DB
@@unique([name, role]) to make name, role unique in this model
@@id([name, role]) to make name, role id of this model
@@index([id,email]) It is used when you wanted to sort by id,email
}

model Post {
id Int @id @default(autoincrement())
createdAt DateTime @default(now()) Autogenerate createdAt date
updatedAt DateTime @updatedAt Autogenerate updatedAt date
title String
likeNum Int @default(0)
published Boolean @default(false)
author User? @relation(fields: [authorId], references: [id] , onDelete:Cascade ) It should be deleted when user deletet
authorId Int?  
 catgories Category[] user can have multiple Category Exampe of many to many relationship
}

model Profile {
id Int @id @default(autoincrement())
bio String

<!-- userId Int @unique It is the unique id of this model -->

user User? with It is optional
}

model Category{
id Int @id @default(autoincrement())
name String
posts Post[] Example of many to many relationshop where post can belong to many categories
}

enum Role { we use it to define a default value
USER
ADMIN
}

homepage
Courses Page:
Registration/Login Page:
Course Detail Page:
Registration Form:
Dashboard (For Registered Users):
About Us Page:
Contact Us Page:
Certificates Page:
Privacy Policy and Terms of Service Pages:

Additionally, you'll need:

A user authentication system to manage user accounts.
Payment gateway integration for accepting course fees.
Responsive design to ensure usability across different devices.
SEO optimization to improve visibility on search engines.
Regular updates and maintenance to keep the website secure and up-to-date.
Once the website is set up, ensure that your courses are well-structured, engaging, and regularly updated to provide value to your students. Offering valid certificates upon course completion adds credibility to your platform and motivates students to enroll in your courses.