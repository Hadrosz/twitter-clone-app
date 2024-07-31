import FormSignUp from "@/components/FormSignUp";
import { Toaster, toast } from "sonner";

export default function Page() {
  return (
    <main className="flex items-center flex-col justify-center border-x-[1px]  border-x-slate-200">
      <FormSignUp />
    </main>
  );
}
