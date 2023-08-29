"use client";
import Nav from "@/components/Nav";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/config/firebase";
import { BsEye, BsEyeSlash } from "react-icons/bs";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Success", {
        toastId: "customId",
      });
      console.log(auth?.currentUser);
    } catch (error) {
      toast.error("Login Error!", {
        toastId: "customId",
      });
    }
  };
  const [view, setView] = useState(false);
  return (
    <>
      <Nav />
      <div className="h-[90vh] w-[100%] flex items-center justify-center">
        <Card color="transparent" className="p-5" shadow={true}>
          <Typography
            variant="h4"
            className="flex justify-center"
            color="blue-gray"
          >
            Log In
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={login}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <Input
                type={view ? "text" : "password"}
                size="lg"
                label="Password"
                required
                icon={
                  view ? (
                    <BsEye
                      className="cursor-pointer"
                      onClick={() => setView(!view)}
                    />
                  ) : (
                    <BsEyeSlash
                      className="cursor-pointer"
                      onClick={() => setView(!view)}
                    />
                  )
                }
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Button className="mt-6" type="submit" fullWidth>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Create an account?{" "}
              <a href="/signup" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
}
export default Login;
