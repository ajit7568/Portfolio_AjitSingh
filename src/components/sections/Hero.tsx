import { Button } from "@/components/ui/button";
import ProfileImage from "../ProfileImage";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="hero-bg"></div>
      <div className="hero-spotlight"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left side - Big text and tagline */}
        <div className="hero-text-container flex-1 space-y-8">
          <div className="space-y-3">
            <p className="text-sm md:text-base uppercase tracking-wider">
              <span className="brackets">[</span> AI ENTHUSIAST <span className="brackets">]</span>
            </p>
            
            <h1 className="slogan-text">
              <span className="text-white">EMPOWER AI</span><br />
              <span className="tagline-highlight">DELIVER</span><br />
              <span className="text-white">IMPACT.</span>
            </h1>
          </div>
          
          <p className="text-lg max-w-md text-muted-foreground backdrop-blur-sm bg-background/10 px-4 py-2 rounded-sm border border-white/10">
            Our mission is to elevate your vision through groundbreaking AI design 
            combining artistic flair with strategic insight to create memorable 
            experiences that leave a lasting impression.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Button size="lg" className="group bg-accent hover:bg-accent/90 rounded-sm">
              <a href="#contact" className="flex items-center">
                LET'S CONNECT
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/10 bg-background/20 backdrop-blur-sm rounded-sm hover:bg-white/10">
              <a href="#projects" className="flex items-center">
                EXPLORE PROJECTS
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-accent/5 rounded-full animate-pulse-slow"></div>
          </div>
          <ProfileImage />
          <div className="absolute -bottom-4 right-1/4 transform rotate-90 text-sm opacity-70">
            <p className="uppercase tracking-widest"></p>
          </div>
        </div>
      </div>

      {/* Corner taglines with enhanced styling */}
      <div className="absolute bottom-8 left-8 text-sm opacity-70 backdrop-blur-sm bg-background/10 px-3 py-1 rounded-sm">
        <p className="uppercase tracking-widest">
          <span className="brackets"></span> <span className="brackets"></span>
        </p>
      </div>

      <div className="absolute top-1/2 right-8 transform -rotate-90 text-sm opacity-70 backdrop-blur-sm bg-background/10 px-3 py-1 rounded-sm">
        <p className="uppercase tracking-widest">
          <span className="brackets"> </span>
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce">
        <p className="text-xs uppercase tracking-widest mb-2">Scroll</p>
        <div className="w-5 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
}
