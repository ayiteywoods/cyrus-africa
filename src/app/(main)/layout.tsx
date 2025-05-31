// app/(main)/layout.tsx

import Navbar from "components/Navbar"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />  {/* Your primary navbar */}
      <main>
        {children}
        </main>
    </>
  )
}