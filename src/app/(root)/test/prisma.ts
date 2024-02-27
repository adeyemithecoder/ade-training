// 1. Install @clerk/nextjs by running `npm install @clerk/nextjs`.
// 2. Set up your Clerk Frontend API by adding it to your environment variables. Create a .env.local file in the root of your project and add the following line:
//    NEXT_PUBLIC_CLERK_FRONTEND_API=your_frontend_api_here
// 3. Wrap your application with ClerkProvider. Open or create the _app.js or _app.tsx file under the pages directory and modify it as follows:
//    import { ClerkProvider } from '@clerk/nextjs';
//    import { useRouter } from 'next/router';
//
//    const publicPages = ['/sign-in', '/sign-up', '/sign-out']; // Add paths that don't require user to be signed in
//
//    function MyApp({ Component, pageProps }) {
//      const { pathname } = useRouter();
//      const isPublicPage = publicPages.includes(pathname);
//
//      return (
//        <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API} navigate={(to) => useRouter().push(to)} signedInNavigate={(to) => useRouter().replace(to)} signOutNavigate={(to) => useRouter().push(to)} forceSignUp={false} >
//          {isPublicPage ? <Component {...pageProps} /> : <SignedIn><Component {...pageProps} /></SignedIn>}
//        </ClerkProvider>
//      );
//    }
//
//    export default MyApp;
// 4. Now you can use Clerk components like <SignedIn>, <SignedOut>, and <UserButton> in your application. For example, in any page:
//    import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
//
//    function HomePage() {
//      return (
//        <div>
//          <SignedIn>
//            <p>Welcome back! <UserButton /></p>
//          </SignedIn>
//          <SignedOut>
//            <p>Please <a href="/sign-in">sign in</a></p>
//          </SignedOut>
//        </div>
//      );
//    }
//
//    export default HomePage;
// 5. Start your Next.js application by running `npm run dev` and navigate to the pages where you used Clerk components to see them in action.
