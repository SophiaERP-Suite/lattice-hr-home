import React from "react";

export const ProfileContext = React.createContext<{
  profileType: "employer" | "candidate";
  setProfileType: React.Dispatch<
    React.SetStateAction<"candidate" | "employer">
  >;
}>(null!);
