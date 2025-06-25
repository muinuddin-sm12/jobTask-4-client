/* eslint-disable @typescript-eslint/no-explicit-any */
import { IContact } from "@/types/contact";

export const createContact = async (data: Partial<IContact>) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/contacts/create-contact`,
      {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
          },
        body: JSON.stringify(data),
      }
    );
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllContacts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts`, {
      method: "GET",
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
