import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
  NavbarCenter,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../../ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "../../logos/launch-ui";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4 max-w-7xl m-auto">
      <div className="fade-bottom absolute left-0 h-24 w-full"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              Faheem
            </Link>
          </NavbarLeft>
          <NavbarCenter>
            <Navigation />
          </NavbarCenter>
          <NavbarRight>
            <Button variant="default" className=" bg-indigo-600" asChild>
              <Link href="/">Contact Me</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle>Menu</SheetTitle>
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Launch UI</span>
                  </Link>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </Link>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Components
                  </Link>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
