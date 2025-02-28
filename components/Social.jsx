import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: <Github />, path: "" },
  { icon: <Linkedin />, path: "" },
  { icon: <Instagram />, path: "" },
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
