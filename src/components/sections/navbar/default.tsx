"use client";
import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
  NavbarCenter,
} from "../../ui/navbar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "../../ui/sheet";
import { Menu } from "lucide-react";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 100) {
          headerRef.current.classList.add("header-bg");
        } else {
          headerRef.current.classList.remove("header-bg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full text-stone-200 z-50" ref={headerRef}>
      <header className="top-0 z-50 -mb-4 px-4 pb-4 max-w-7xl m-auto">
        <div className="fade-bottom absolute left-0 h-24 w-full"></div>
        <div className="relative mx-auto max-w-container">
          <NavbarComponent>
            <NavbarLeft>
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold"
              >
                <CodeXml />
                Faheem <span className="hidden md:block">Hassan</span>
              </Link>
            </NavbarLeft>
            <NavbarCenter>
              <Navigation />
            </NavbarCenter>
            <NavbarRight>
              <Button variant="default" className=" bg-indigo-600" asChild>
                <Link href="/">Contact Me</Link>
                {/* <a className="group/button flex w-fit items-center justify-center gap-x-2 font-bricolage bg-background h-9 rounded-md px-4 text-sm/[14px] font-semibold sm:text-[15px]/[15px] md:h-10 md:px-5 duration-200 shadow-[inset_0_2px_2px_rgba(221,221,221,0.5),inset_0_-2px_#13ae72,_0_0_0_4px_rgba(221,221,221,0.05)] hover:shadow-[inset_0_2px_2px_rgba(221,221,221,0.5),inset_0_-2px_#13ae72,_0_0_0_4px_rgba(221,221,221,0.05),0_0_5px_#10b981,inset_0_0_5px_#10b981] !gap-x-0 flex items-center gap-x-3" href="/contact">Get in touch<div></div></a> */}
              </Button>
              {/* Controlled Sheet */}
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 md:hidden"
                    onClick={() => setIsSheetOpen(true)}
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetTitle>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-xl font-bold"
                    >
                      <span>Explore</span>
                    </Link>
                  </SheetTitle>
                  <nav className="grid gap-6 text-lg font-medium mt-5">
                    <Link
                      href="/"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsSheetOpen(false)} // Close on click
                    >
                      Linkedin
                    </Link>
                    <Link
                      href="#client-companies"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsSheetOpen(false)} // Close on click
                    >
                      Trusted Clients
                    </Link>
                    <Link
                      href="#testimonies"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsSheetOpen(false)} // Close on click
                    >
                      Testimonials
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </header>
    </div>
  );
}
