"use client"

import { createAuthClient } from "@neondatabase/auth/next"
import { NeonAuthUIProvider } from "@neondatabase/auth/react/ui";


const authClient = createAuthClient()

const NeonAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="system">
      {children}
    </NeonAuthUIProvider>
  )
}

export default NeonAuthProvider