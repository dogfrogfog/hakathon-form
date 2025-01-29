"use server";

import { db } from "@/lib/db";
import { registrations } from "@/lib/schema";

export async function submitForm(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const role = formData.get("role");
    const customRole = formData.get("customRole");

    const finalRole = (role === "other" ? customRole : role) as string;

    await db.insert(registrations).values({
      email,
      role: finalRole,
    });

    return { success: true };
  } catch (error) {
    const errorMessage = new Error(error as string).message;

    if (errorMessage.includes("registrations_email_unique")) {
      return {
        error: "You are already on the waitlist!",
      };
    }

    return {
      error: "An error occurred while submitting the form. Please try again.",
    };
  }
}
