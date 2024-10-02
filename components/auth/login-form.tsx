"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useForm } from "react-hook-form"; 
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const LoginForm = () => {
  const [formStatus, setFormStatus] = useState({ success: false, error: '' });
  
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      // Here you can handle the login logic, e.g., call an API
      // const response = await api.login(data);

      // If login is successful
      setFormStatus({ success: true, error: '' });
    } catch (error) {
      // Handle error case
      setFormStatus({ success: false, error: 'Login failed. Please try again.' });
    }
  };

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className="w-96 space-y-6">
        <h1 className="text-3xl font-bold text-center">Logo</h1>
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="example@domain.com"
                        type="email"
                      />
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
                      <Input 
                        {...field}
                        placeholder="••••••••"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Display error or success messages */}
            {formStatus.error && <FormError message={formStatus.error} />}
            {formStatus.success && <FormSuccess message="Login successful!" />}
            <Button
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
