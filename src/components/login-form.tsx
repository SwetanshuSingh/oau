"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/login";
import Loader from "./icons/loader-icon";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function userLogin(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsLoading(true);

    const formData = new FormData(evt.currentTarget);

    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const { email, password } = rawFormData;
    if (!email || !password) {
      toast({
        title: "Invalid Credentials",
        description: "Email and Password cannot be empty!",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    if (typeof email !== "string" || typeof password !== "string") {
      console.log("Error here");
      toast({
        title: "Invalid Credentials",
        description: "Email and Password should be valid!",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    const response = await login(email, password);
    if (response.status !== "success") {
      toast({
        title: "An error occurred!",
        description: response.message,
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    router.push("/dashboard");
    setIsLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#191B1D] text-white/80 border border-[#313234]">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(evt) => userLogin(evt)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  className="bg-[#252728] outline-none border border-[#313234]"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  className="bg-[#252728] outline-none border border-[#313234]"
                  name="password"
                  id="password"
                  type="password"
                  required
                />
              </Field>
              <Field>
                <Button
                  disabled={isLoading}
                  className="bg-[#3D3C3F] border border-[#313234] flex justify-center items-center"
                  type="submit"
                >
                  {isLoading ? <Loader /> : "Sign In"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

`
bg-primary=#17191A
bg-secondary=#191B1D
border=#313234

`;
