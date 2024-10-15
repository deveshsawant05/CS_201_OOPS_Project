"use client"
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

export default function LoginPage() {

  const router = useRouter(); // Initialize the router
  router.push('/login')
  return (
    <></>
  )
}
