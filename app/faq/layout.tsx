import { Pageheader } from "@/components/Pageheader"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <div className='container mt-32'>
          <Pageheader/>
          {children}
    </div>
  )
}
