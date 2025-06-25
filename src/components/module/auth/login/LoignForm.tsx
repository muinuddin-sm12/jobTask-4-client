/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImSpinner3 } from "react-icons/im";
import { useUser } from "@/contaxt/UserContaxt";
import { getCurrentUser, loginUser } from "@/services/auth";

export default function LoginForm() {
  const form = useForm();
  const { setUser } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data)
    try {
      const res = await loginUser(data);
      const user = await getCurrentUser(); // this should be your API call
      setUser(user);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
          // window.location.href = redirect;
          // router.refresh();
        } else {
          router.push("/");
          router.refresh();
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex flex-col">
        <div className="flex items-center space-x-4 mb-6">
          <div>
            <h1 className="text-xl font-semibold">Login</h1>
            <p className="font-light text-sm text-gray-600">Welcome back!</p>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-5 cursor-pointer w-full"
          >
            {isSubmitting ? (
              <ImSpinner3 className="animate-spin text-center text-lg flex items-center justify-center" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Do not have any account ?{" "}
        <Link href="/register" className="text-[#ebd401] font-[600] underline">
          Register
        </Link>
      </p>
    </div>
  );
}
