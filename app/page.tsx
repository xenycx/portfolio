import { Github, Music2, Disc3, Instagram, Film, Youtube, Facebook, MessagesSquare, ExternalLink } from 'lucide-react'
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24 xl:gap-52 items-center">
          {/* Left Column */}
          <div className="space-y-4 max-w-sm">
            <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
              👋 hello, i&apos;m xenycx
            </h1>
            <div className="text-[#7f7f7f] space-y-3 text-lg">
              <p>⭐ hopeless developer whose knowledge is never enough.</p>
              <p>i&apos;m also a many things...</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <SocialButton href="https://www.instagram.com/xenycx/" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </SocialButton>
              <SocialButton href="https://open.spotify.com/user/8rf9w8f04i47g0d446k7bu4z8?nd=1&dlsi=ce9c59e7b5904ed6" aria-label="Spotify">
                <Disc3 className="w-5 h-5" />
              </SocialButton>
              <SocialButton href="https://letterboxd.com/xenycx/films" aria-label="Letterboxd">
                <Film className="w-5 h-5" />
              </SocialButton>
              <SocialButton href="https://www.tiktok.com/@xenycx" aria-label="Tiktok">
                <Music2 className="w-5 h-5" />
              </SocialButton>
              <SocialButton href="https://github.com/xenycx" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </SocialButton>
              <SocialButton href="https://www.youtube.com/@xenycx" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </SocialButton>
              <SocialButton href="https://discord.com/users/536115838969839626" aria-label="Discord">
                <MessagesSquare className="w-5 h-5" />
              </SocialButton>
              <SocialButton href="https://www.facebook.com/xenycx" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </SocialButton>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 w-full h-full flex flex-col">
            <ProjectCard
              icon="⚡"
              title="blinko"
              url="my.xenyc.ge"
              description="a safe, open, and privacy-respecting note-taking web app. currently used only by me, but feel free to register and use it."
            />
            <ProjectCard
              icon="📖"
              title="books"
              url="books.xenyc.ge"
              description="an online book shop where you can view stock counts, authors' information, and explore books using biblusi's api."
            />
            <ProjectCard
              icon="🔏"
              title="tlat"
              url="l.xenyc.ge/7"
              description="tlat (teacher's lecture attendance tracker) is a spring boot app for monitoring university lectures, tracking lecture progress, and verifying lecturer attendance."
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ 
  icon, 
  title, 
  url, 
  description
}: { 
  icon: string
  title: string
  url: string
  description: string 
}) {
  return (
    <div className="relative">
      <div className="rounded-[14px] bg-[#050505] p-5 border-2 border-[#1c1c1c] w-full flex flex-col gap-3">
        <Link 
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#050505] hover:bg-[#1c1c1c] transition-colors p-2 rounded-lg w-[200px]"
        >
          <div className="rounded-lg border-2 border-[#1c1c1c] w-10 h-10 flex items-center justify-center shrink-0 transition-colors group-hover:border-[#303030]">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="flex flex-col gap-0.5">
          <h2 className="font-medium text-[#e1e1e1] text-lg md:text-xl lg:text-2xl">{title}</h2>
            <div className="flex items-center gap-1 text-sm text-[#7f7f7f]">
            <ExternalLink className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
              <span>{url}</span>
            </div>
          </div>
        </Link>
        <p className="text-sm md:text-base lg:text-lg text-[#7f7f7f] font-mono">{description}</p>
      </div>
    </div>
  )
}

function SocialButton({ 
  children, 
  href, 
  ...props 
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link 
      href={href}
      className="group flex items-center justify-center w-10 h-10 rounded-lg bg-[#050505] backdrop-blur-md transition-all hover:bg-zinc-900/50 border border-[#1c1c1c] hover:border-zinc-800 text-[#7f7f7f]"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  )
}

