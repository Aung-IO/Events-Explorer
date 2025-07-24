
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Events Explorer</h1>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:text-blue-600">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/events" className="hover:text-blue-600">
                Events
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover:text-blue-600">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="hover:text-blue-600">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <nav className="flex flex-col gap-4 text-lg">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/events" className="hover:text-blue-600">Events</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
