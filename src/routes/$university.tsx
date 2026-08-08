import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";
import { universities } from "../data/universities";

export const Route = createFileRoute("/$university")({
  beforeLoad: ({ params }) => {
    if (!universities.some((u) => u.slug === params.university)) throw notFound();
  },
  component: () => <Outlet />,
});
