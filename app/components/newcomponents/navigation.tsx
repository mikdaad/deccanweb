'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState ,useRef,useEffect} from "react";
import { Search, ShoppingBag } from "lucide-react";
import  UserCart  from "../storefront/usercart";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";


interface NavigationProps {
  className?: string;
}


const Navigation = ({ className }: NavigationProps) => {
  const pathname = usePathname(); // Automatically gets the current route

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Other", href: "/other" },
  ];

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Do something with searchQuery, like navigate or fetch
      console.log("Searching for:", searchQuery);
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
    }
  };

  // Auto-focus when search opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  return (
    <nav
    className={cn(
      "flex items-center gap-[40px_100px] text-base text-white whitespace-nowrap text-center uppercase leading-loose flex-wrap font-blauer-nue font- ",
      className
    )}
  >
      

      <Link href="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9e14ec760a13409cba0be5c570ba1763/77594f1921d467c02b24fcbef84db02d2430036a?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[2.8] object-contain w-[210px] self-stretch shrink-0 max-w-full m-8"
        />
      </Link>

      <div className="self-stretch flex items-center gap-[45px] my-auto">
      {navLinks.map((link) => (
  <div
    key={link.href}
    className={cn(
      "rounded-md transition-all duration-300",
      pathname === link.href
        ? "border border-[#F9BF00] border-[0.5px] backdrop-blur-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0.28%,rgba(0,0,0,0.00)_140.18%)] shadow-2xl text-white"
        : "hover:text-primary-foreground/80"
    )}
  >
    <Link
      href={link.href}
      className="self-stretch shadow-purple-600/30 rounded-lg p-[5px] m-0 block"
    >
      {link.name}
    </Link>
  </div>
))}

       
       <div className="flex flex-row gap-8">
 {/* Search Button */}
 <button
            aria-label="Search"
            className="focus:outline-none hover:opacity-80 transition-opacity"
            onClick={() => setSearchOpen((prev) => !prev)}
          >
            <Search className="w-8 h-8" />
          </button>

          {/* Search Input Popup */}
          {searchOpen && (
            <div className="absolute top-32 right-10 z-50 w-1/3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  className="pl-10 pr-4 w-full h-10 rounded-lg text-sm border font-thin border-gray-300 focus:ring-2 focus:ring-white transition-all shadow-yellow-300 shadow-sm text-black"
                  placeholder="Search any Product..."
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          )}

<Link href="/bag">  
<button
aria-label="Shopping Bag"
className="focus:outline-none hover:opacity-80 transition-opacity mt-2"
>
<svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6362 34C14.4395 34 15.0907 33.3177 15.0907 32.4762C15.0907 31.6346 14.4395 30.9524 13.6362 30.9524C12.8329 30.9524 12.1816 31.6346 12.1816 32.4762C12.1816 33.3177 12.8329 34 13.6362 34Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.6362 34C30.4395 34 31.0907 33.3177 31.0907 32.4762C31.0907 31.6346 30.4395 30.9524 29.6362 30.9524C28.8329 30.9524 28.1816 31.6346 28.1816 32.4762C28.1816 33.3177 28.8329 34 29.6362 34Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2H7.81818L11.7164 22.4038C11.8494 23.1054 12.2137 23.7356 12.7455 24.1841C13.2774 24.6326 13.9428 24.8708 14.6255 24.8571H28.7636C29.4463 24.8708 30.1117 24.6326 30.6436 24.1841C31.1754 23.7356 31.5397 23.1054 31.6727 22.4038L34 9.61905H9.27273" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</button>
</Link>



</div>

<UserCart />

      </div>
    </nav>
  );
};
export default Navigation;

