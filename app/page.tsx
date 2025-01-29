import FormComponent from "@/components/FormComponent";
import { submitForm } from "@/app/actions";

export default function Home() {
  return (
    <main className="flex items-center justify-center lg:min-h-screen w-full p-2 lg:p-6 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-12">PETIT waitlist</h1>
        <h3 className="text-xl mb-12">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </h3>
        <FormComponent submitForm={submitForm} />
      </div>
    </main>
  );
}
