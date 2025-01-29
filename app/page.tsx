import FormComponent from "@/components/FormComponent";
import { submitForm } from "@/app/actions";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex items-center justify-center lg:min-h-screen w-full p-2 lg:p-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="PETIT" width={130} height={200} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-12">waitlist</h1>
        <h3 className="text-xl mb-12">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </h3>
        <FormComponent submitForm={submitForm} />
      </div>
    </main>
  );
}
