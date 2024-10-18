"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Facebook, Twitter, Github } from "lucide-react"
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"
import Logo from "@/components/Logo"

import { Montserrat } from "next/font/google";
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import { login } from "./actions"

import Error from "@/components/Error"
import { Loader } from "@/components/Loader"
import { useState } from "react"

const montserratFont = Montserrat({
    weight: ["100", "200", "400", "600"],
    subsets: ["latin"],
});

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Initialize the router

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.set('email', email);
    formData.set('password', password);

    const response = await login(formData);  // Call the server-side action

    if (response.error) {
      // Handle error by setting the error state
      setError(response.error);

    } else if (response.success) {
      // Handle success (e.g., redirect to dashboard)
      router.push("/dashboard");  // Redirect to dashboard
    }

    setLoading(false);
  };

  return (
    <div className={`${montserratFont.className} bg-[--second] min-h-screen flex flex-col md:flex-row`}>
      <div className="md:w-2/5 p-8 flex flex-col items-center justify-center">
        <Logo />
        <p className="text-[--foreground] text-center text-lg mt-5">
          Discover the power of personalized health insights and seamless tracking with HealthMate.
        </p>
      </div>
      <div className="bg-white md:w-3/5 p-8 flex flex-col justify-center md:rounded-l-[80px]">
        <h2 className="text-3xl w-full text-center font-bold mb-4">LOGIN</h2>
        <div className="max-w-md w-full mx-auto">
          <Tabs defaultValue="patient" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="patient">Patient</TabsTrigger>
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            <TabsContent value="patient">
                  {error ? <Error errorMessage={error} /> : null}
              <div className="mt-6 space-y-6">
                <form className="space-y-4" onSubmit={handleLogin}>
                  <Input type="email" name="email" placeholder="Email address" required           value={email}
          onChange={(e) => setEmail(e.target.value)}/>
                  <Input type="password" name="password" placeholder="Password" required           value={password}
          onChange={(e) => setPassword(e.target.value)} />
                  <Button className="w-full bg-[--first] hover:bg-[--second] text-white" type="submit">Log in </Button>
                </form>
                <div className="text-center">
                  <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    Forgotten password
                  </Link>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">or log in with</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon">
                      <Facebook className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FcGoogle />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="w-4 h-4 text-sky-500" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">
                  Need an account?{" "}
                  <Link href="/signup" className="text-indigo-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="doctors">
              <div className="mt-6 space-y-6">
                <form className="space-y-4">
                  <Input type="email" placeholder="Email address" />
                  <Input type="password" placeholder="Password" />
                  <Button className="w-full bg-[--first] hover:bg-[--second] text-white">Log in</Button>
                </form>
                <div className="text-center">
                  <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    Forgotten password
                  </Link>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">or log in with</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon">
                      <Facebook className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FcGoogle />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="w-4 h-4 text-sky-500" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">
                  Need an account?{" "}
                  <Link href="/signup" className="text-indigo-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="admin">
              <div className="mt-6 space-y-6">
                <form className="space-y-4">
                  <Input type="email" placeholder="Email address" />
                  <Input type="password" placeholder="Password" />
                  <Button className="w-full bg-[--first] hover:bg-[--second] text-white">Log in</Button>
                </form>
                <div className="text-center">
                  <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    Forgotten password
                  </Link>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">or log in with</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon">
                      <Facebook className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FcGoogle />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="w-4 h-4 text-sky-500" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">
                  Need an account?{" "}
                  <Link href="/signup" className="text-indigo-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}