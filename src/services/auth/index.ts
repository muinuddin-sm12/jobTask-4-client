/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
      {
        method: "POST",
        body: data,
      }
    );
    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
    }
    return result;
  } catch (err: any) {
    return Error(err);
  }
};
export const loginUser = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
    }
    return result;
  } catch (err: any) {
    return Error(err);
  }
};
export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get('accessToken')?.value;
    let decodedData = null;
    if(accessToken){
        decodedData = (await jwtDecode(accessToken)) as any;
        return decodedData;
    }else{
        return null;
    }
}

export const logOut = async () => {
    (await cookies()).delete('accessToken');
}