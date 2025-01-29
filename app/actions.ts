"use server"

import { db } from "@/lib/db"
import { registrations } from "@/lib/schema"

export async function submitForm(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string
    const role = formData.get("role") as string
    const customRole = formData.get("customRole") as string | null

    const finalRole = role === "other" ? customRole : role

    await db.insert(registrations).values({
      email,
      role: finalRole,
    })

    return { success: true }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { error: "An error occurred while submitting the form. Please try again." }
  }
}

