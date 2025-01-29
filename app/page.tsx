import FormComponent from "@/components/FormComponent"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Registration Form</h1>
        <FormComponent />
      </div>
    </main>
  )
}

