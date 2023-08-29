"use client";
import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Nav from "../../components/Nav";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const customId = "custom-id-yes";
  const status = (data) =>
    toast.info(data, {
      toastId: customId,
    });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = async (e) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      status("Success");
      setTimeout(() => {
        router.push("/profile");
      }, 500);
    } catch (error) {
      status(`failed ${error}`);
    }
  };
  console.log(auth?.currentUser?.email);

  return (
    <>
      <Nav />
      <div className="h-[90vh] w-[100%] flex items-center justify-center">
        <Card color="transparent" shadow={true} className="p-8">
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={signin}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <Input
                size="lg"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Checkbox
              required={true}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" type="submit" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
}
export default SignUp;
export const user = auth?.currentUser;
