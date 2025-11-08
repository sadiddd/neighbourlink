// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "@/integrations/supabase/client";
// import { useEffect, useState } from "react";
// import { User } from "@supabase/supabase-js";
// import { LogOut, Shield } from "lucide-react";

// export const Header = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     navigate("/auth");
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Shield className="h-6 w-6 text-primary" />
//           <h1 className="text-xl font-bold text-foreground">SafeNeighbor</h1>
//         </div>

//         {user ? (
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleSignOut}
//             className="gap-2"
//           >
//             <LogOut className="h-4 w-4" />
//             Sign Out
//           </Button>
//         ) : (
//           <div className="flex gap-2">
//             <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
//               Log In
//             </Button>
//             <Button size="sm" onClick={() => navigate("/auth?mode=signup")}>
//               Sign Up
//             </Button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };
