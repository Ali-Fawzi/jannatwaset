import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useFetchers, useNavigation, useRouteError,
} from "@remix-run/react";
import styles from "./app.css?url";
import {PageLayout} from "~/components/ui/PageLayout";
import {defer, LinksFunction} from "@remix-run/node";
import React, {useMemo} from "react";
import NProgress from 'nprogress';
import {NotFound} from "~/components/NotFound";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];
export async function loader() {
    const deferredData = loadDeferredData();

    return defer({assetsUrl: process.env.BASE_URL, ...deferredData});
}
function loadDeferredData() {
    const articlesPromise = fetch(`${process.env.BASE_URL}/api/Artical?pageNumber=1&pageSize=3`)
        .then(res => res.json())
        .catch((error) => {
            console.error(error);
            return null;
        })

    return {
        articles: articlesPromise,
    };
}
export function Layout({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
  const fetchers = useFetchers();

    const state = useMemo<'idle' | 'loading'>(
      function getGlobalState() {
          const states = [
              navigation.state,
              ...fetchers.map((fetcher) => fetcher.state),
          ];
          if (states.every((state) => state === 'idle')) return 'idle';
          return 'loading';
      },
      [fetchers, navigation.state],
  );

  React.useEffect(() => {
      if (state === 'loading') NProgress.start();
      if (state === 'idle') NProgress.done();
  }, [state]);

  return (
  <html lang="ar" dir="RTL">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
    <PageLayout>
        {children}
    </PageLayout>
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
);
}
export default function App() {
  return <Outlet />;
}
export function ErrorBoundary() {
  const routeError = useRouteError();
  const isRouteError = isRouteErrorResponse(routeError);


  return isRouteError ? (
      <>
          {routeError.status === 404 ? (
              <NotFound />
          ) : (
              <p className='text-center text-rose-500 text-lg'>حدث خطأ</p>

          )}
      </>
  ) : (
      <p className='text-center text-rose-500 text-lg'>حدث خطأ</p>
  )
}