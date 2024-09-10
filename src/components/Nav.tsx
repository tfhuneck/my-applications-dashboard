'use client'
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
    {
      title: "K12",
      href: "/",
      description:
        "",
    },
    {
      title: "Technical/Vocational",
      href: "/",
      description:
        "",
    },
    {
      title: "College & Universities",
      href: "/",
      description:
        "",
    },
    
  ]


const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
return (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
)
})
ListItem.displayName = "ListItem"

const Nav = () => {

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href={'/'}
                    className={navigationMenuTriggerStyle()}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default Nav;