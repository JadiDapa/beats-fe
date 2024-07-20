import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { TailSpin } from "react-loader-spinner";
import { RegisterAccount } from "@/api/useAccounts";
import { Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().min(1, "Email is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const Register = () => {
  const { register, isLoading } = RegisterAccount();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await register({
      email: values.email,
      username: values.username,
      password: values.password,
    });

    if (result) {
      toast.success("Account Successfully Registered!");
      navigate("/login");
    } else {
      toast.error("Something Went Wrong!");
    }
  }

  return (
    <section
      id="login"
      className="overflow-hiddens relative max-h-screen w-full"
    >
      <img
        src="/images/login-bg.jpg"
        className="w-full object-cover object-center"
        alt=""
      />
      <div className="absolute left-0 top-0 z-10 h-full w-full" />
      <div className="absolute left-12 top-24 z-10 h-full w-full text-9xl font-black text-white">
        BEATS
      </div>
      <div className="absolute left-[70%] top-[55%] z-10 h-full w-full text-5xl font-black text-white">
        EMBRACE THE
        <br /> <span className="text-primary">VOICES</span>
      </div>
      <div className="absolute left-1/2 top-1/2 z-20 flex w-96 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-6 rounded-xl bg-background px-8 py-12 shadow-xl">
        <figure className="w-20 space-y-2">
          <img
            src="/images/logo.png"
            className="object-cover object-center"
            alt=""
          />
          <div className="text-center text-2xl font-bold text-primary">
            BEATS
          </div>
        </figure>
        <div className="space-y-1 text-center">
          <h1 className="text-3xl font-bold text-primary">Welcome To Beats</h1>
          <div className="text-sm">Make an account to explore further!</div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <Mail
                    size={20}
                    className="absolute left-3 top-3 text-slate-800"
                  />
                  <FormControl>
                    <Input
                      className="w-full ps-10"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-start" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="relative">
                  <User
                    size={20}
                    className="absolute left-3 top-3 text-slate-800"
                  />
                  <FormControl>
                    <Input
                      className="w-full ps-10"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-start" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-3 text-slate-800"
                  />
                  <FormControl>
                    <Input
                      className="w-full ps-10"
                      placeholder="Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-start" />
                </FormItem>
              )}
            />

            <Button
              disabled={isLoading}
              className="mt-6 flex w-full items-center gap-3"
            >
              {isLoading ? (
                <>
                  Submitting
                  <TailSpin
                    visible={true}
                    color="#ffffff"
                    ariaLabel="tail-spin-loading"
                    radius="0.2"
                    width={24}
                    height={24}
                    strokeWidth={5}
                  />
                </>
              ) : (
                "Register"
              )}
            </Button>
            <div className="text-center text-sm">
              Already have an accout?{" "}
              <Link
                to="/login"
                className="text-primary transition hover:opacity-70"
              >
                Login
              </Link>{" "}
              Now!
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Register;
