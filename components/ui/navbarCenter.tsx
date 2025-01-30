"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Boots",
    href: "/boots",
    description:
      "Boots are knee-high shoes that provide more coverage than regular shoes.",
  },
  
  {
    title: "Running Shoes",
    href: "/running-shoes",
    description:
      "Running shoes, also known as sneakers or athletic shoes, are designed specifically for running and physical activity.",
  },

  {
    title: "Training Shoes",
    href: "/training-shoes",
    description:
      "Training shoes are versatile sport shoes designed for a variety of activities such as weightlifting, HIIT workouts, or circuit training.",
  },
  {
    title: "Football Shoes",
    href: "/football-shoes",
    description:
      "Soccer cleats are specialized shoes designed for playing soccer. They feature a lightweight build and a cleated sole to provide traction on grass or turf fields.",
  },
]

export function NavbarCenter() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
              {components.map((component) => (
                <Link href={component.href} legacyBehavior passHref key={component.title}>
                <ListItem className="hover: text"
                  title={component.title}
                >
                  {component.description}
                </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <Link href="/shop">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none hover:text-red-600">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </Link>
  )
})
ListItem.displayName = "ListItem"
