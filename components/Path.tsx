'use client'

import { usePathname } from "next/navigation"
import { NAV_BAR } from "@/constants"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
 
export function Path() {
    const pathname = usePathname()
    var lastSegment = null
    NAV_BAR.forEach((item) => {item.submenu.forEach((subitem) => {subitem.href === pathname ? lastSegment = subitem.label : null})})
   if (pathname == '/explore') {
    return null
   }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/explore">Explore Tools</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{lastSegment}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}