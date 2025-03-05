import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: <Github />, path: "https://github.com/DeveloperJotape/" },
  { icon: <Linkedin />, path: "https://www.linkedin.com/in/devjoaopedro/" },
  { icon: <Instagram />, path: "https://www.instagram.com/jotape9411/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
