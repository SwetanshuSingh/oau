"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Test() {
  const handleClick = async () => {
    // const { data, error } = await authClient.signUp.email({
    //   name: "Swetanshu Singh",
    //   email: "swetanshusingh17@gmail.com",
    //   password: "swetanshu1singh7",
    // });

    // console.log("Data", data);
    // console.log("Error", error);
  };

  return (
    <main className="w-full h-screen font-sans flex justify-center items-center bg-black text-white">
      <Button onClick={handleClick}>Sign Up</Button>
    </main>
  );
}
