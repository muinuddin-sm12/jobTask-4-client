/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/services/contact";
// import { useRouter } from 'next/navigation';
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "sonner";
import { contactFromSchema } from "./ContactFormValidation";
interface IFormValues {
  name: string;
  email: string;
  message?: string;
}
const ContactForm = () => {
  // const router = useRouter();
  const form = useForm<IFormValues>({
    resolver: zodResolver(contactFromSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await createContact(data);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        reset();
        // router.push("/");
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <div className="px-6 md:px-12 lg:px-20 my-14 flex flex-col items-center justify-center">
      <h3 className="text-xl font-[600] mb-8">Please Fill-up this form.</h3>
      <div className="bg-sky-50 w-lg p-6 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-center w-full">
              <Button
                className="w-[120px] cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ImSpinner3 className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
