import { Suspense } from "react";
import type { ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function App(): ReactElement {
  const routing = useRoutes(routes);
  return <Suspense fallback={<Skeleton count={20} />}>{routing}</Suspense>;
}
