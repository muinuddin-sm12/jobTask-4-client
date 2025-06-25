/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createHeroSec = async (data: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/hero-section/create-hero-section`,
      {
        method: "POST",
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        body: data,
      }
    );
    revalidateTag("HERO");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getHeroSec = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/hero-section`,
      {
        next: {
          tags: ["MEAL"],
        },
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateHeroSec = async (id: string, data: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/hero-section/${id}`,
      {
        method: "PATCH",
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        body: data,
      }
    );
    revalidateTag("HERO");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
