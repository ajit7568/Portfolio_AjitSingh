
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg shadow-accent/20 z-10">
        <AspectRatio ratio={1} className="bg-muted">
          <Avatar className="w-full h-full">
            <AvatarImage 
              src="/lovable-uploads/343992c6-6da2-436e-868a-03890afea575.png" 
              alt="Ajit Singh" 
              className="object-cover"
            />
            <AvatarFallback className="text-6xl font-bold">AS</AvatarFallback>
          </Avatar>
        </AspectRatio>
      </div>
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-primary/30 rounded-full z-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-accent/70"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent/70"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
    </div>
  );
};

export default ProfileImage;
