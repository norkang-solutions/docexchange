"use server";

import { ROUTES } from "@/app/_constants/routes";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    redirect(ROUTES.PROFILE);
}
