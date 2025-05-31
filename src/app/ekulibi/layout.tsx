import EkulibiNavbar from "components/EkulibiNavbar"

// app/ekulibi/layout.tsx
export default function EkulibiLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="">
        <EkulibiNavbar />
        {/* Add your custom header/sidebar here */}
        {children}
        {/* Add your custom footer here */}
      </div>
    )
  }