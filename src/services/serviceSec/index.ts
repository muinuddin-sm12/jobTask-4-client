/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IServiceSection } from "@/types/service";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createService = async (data: IServiceSection) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/service-section/create-service`,
      {
        method: "POST",
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("SERVICE");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getServices = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/service-section`,
      {
        next: {
          tags: ["SERVICE"],
        },
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateHeroSec = async (
  id: string,
  data: Partial<IServiceSection>
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/service-section/${id}`,
      {
        method: "PATCH",
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("SERVICE");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
