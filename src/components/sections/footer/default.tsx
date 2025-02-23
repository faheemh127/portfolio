import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { CodeXml } from "lucide-react";
import Link from "next/link";
export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex  gap-2 flex-col">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {" "}
                  <CodeXml size={30} /> Muhammad Faheem Hassan
                </h3>
                <p className="text-slate-600">
                  A Full-Stack Web Developer passionate about creating
                  interactive UIs for landing pages that drive sales. Team Lead
                  with 5+ years of development experience.Helping companies
                  build websites, custom web solutions, and SaaS platforms.
                </p>
              </div>
            </FooterColumn>

            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">
                Legal & Professional Links
              </h3>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground"
              >
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Terms of Service
              </Link>
              <Link
                href="#testimonies"
                className="text-sm text-muted-foreground"
              >
                Client Reviews
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Portfolio
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">
                Social Media & Profiles
              </h3>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-faheem-hassan-h127/"
                className="text-sm text-muted-foreground"
              >
                LinkedIn
              </Link>
              <Link
                target="_blank"
                href="https://github.com/faheemh127"
                className="text-sm text-muted-foreground"
              >
                GitHub
              </Link>

              <Link
                target="_blank"
                href="https://www.youtube.com/@faheemh127"
                className="text-sm text-muted-foreground"
              >
                Youtube
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Muhammad Faheem Hassan. All rights reserved</div>
            <div className="flex items-center gap-4">
              <Link target="blank" href="https://www.youtube.com/@faheemh127">
                {" "}
                <FaYoutube className="text-[#FF0000]" size={25} />
              </Link>

              <Link
                target="blank"
                href="https://www.linkedin.com/in/muhammad-faheem-hassan-h127/"
              >
                {" "}
                <FaLinkedin className="text-[#0077B5]" size={25} />
              </Link>

              <Link target="blank" href="https://github.com/faheemh127">
                <FaGithub className="text-[#333]" size={25} />
              </Link>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
