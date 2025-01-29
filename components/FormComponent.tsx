"use client";

import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

const roles = ["developer", "hr", "investor", "business person", "other"];

export default function FormComponent({ submitForm }: { submitForm: any }) {
  const [role, setRole] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const { pending } = useFormStatus();
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await submitForm(formData);

        if (result.error) {
          setMessage(result.error);
          setIsSuccess(false);
        } else {
          setMessage("Form submitted successfully!");
          setIsSuccess(result.success);
        }
      } catch {
        setMessage(
          "An error occurred while submitting the form. Please try again."
        );
        setIsSuccess(false);
      }
    });
  };

  if (isSuccess === true) {
    return (
      <p className="text-base text-green-600 text-center" role="alert">
        {message}
      </p>
    );
  }

  if (isSuccess === false) {
    return (
      <p className="text-base text-red-600 text-center" role="alert">
        {message}
      </p>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-base font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="handle@example.com"
          className="p-2 text-lg mt-1 block w-full placeholder:text-lg placeholder:text-gray-500 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="role"
          className="block text-base font-medium text-gray-700"
        >
          Role
        </label>
        <select
          id="role"
          name="role"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={cn(
            "bg-white text-lg text-black relative mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-50",
            {
              "text-gray-500": !role,
            }
          )}
        >
          <option className="p-2 text-lg" value="">
            Select a role
          </option>
          {roles.map((r) => (
            <option className="p-2 text-lg" key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      {role === "other" && (
        <div>
          <label
            htmlFor="customRole"
            className="block text-base font-medium text-gray-700"
          >
            Custom Role
          </label>
          <input
            type="text"
            id="customRole"
            name="customRole"
            required
            placeholder="quality assurance"
            className="mt-1 p-2 text-lg placeholder:text-lg placeholder:text-gray-500 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          />
        </div>
      )}
      <button
        type="submit"
        disabled={pending || isPending}
        className="mt-12 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
      >
        {pending || isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
