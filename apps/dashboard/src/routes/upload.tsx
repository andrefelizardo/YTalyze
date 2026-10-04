import { createFileRoute, redirect } from "@tanstack/react-router";
import { Upload } from "../pages/Upload";

export const Route = createFileRoute("/upload")({
  beforeLoad: () => {
    if (!localStorage.getItem("token")) {
      throw redirect({ to: "/" });
    }
  },
  component: Upload,
});
