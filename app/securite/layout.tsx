import { Pageheader } from "@/components/Pageheader"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <div className='container'>
          <Pageheader/>
          {children}
    </div>
  )
}
