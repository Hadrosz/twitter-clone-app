import FormLogIn from "@/components/FormLogin";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";

export default function LogInPage() {
  return (
    <main className="flex items-center flex-col justify-center border-x-[1px]  border-x-slate-200">
      <FormLogIn />
      <Toaster position="bottom-right" richColors />;
    </main>
  );
}
