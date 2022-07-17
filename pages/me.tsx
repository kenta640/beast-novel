import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "../components/header.module.css"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div>

      </div>
  )
}
