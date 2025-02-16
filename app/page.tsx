import Image from "next/image";
import data from '../data.json';
import { FaTwitter, FaYoutube,  } from 'react-icons/fa';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";

function LinkCard({ href, title, image }: { href: string; title: string; image?: string }) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-[1.02] transition-all border bg-black mb-3 gradient-bg max-w-3xl border-yellow-400"
    >
      <div className="flex items-center w-full gap-4">
        {/* Container do ícone - Aumentado e com flex-shrink-0 */}
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
          {image && (
            <Image
              className="rounded-md object-cover w-full h-full"
              alt={title}
              src={image}
              width={45}
              height={45}
              quality={100}
              priority
            />
          )}
        </div>

        {/* Título */}
        <h2 className="font-medium text-yellow-400 flex-grow text-center text-lg">
          {title}
        </h2>
      </div>
    </a>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-6 mt-6">
      {data.socials.map((social) => (
        <a 
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
        >
          {social.href.includes('tiktok') && (
            <AiFillTikTok className="w-10 h-10 text-[#ffffff]" /> // Preto do TikTok
          )}
          {social.href.includes('instagram') && (
            <BiLogoInstagramAlt className="w-10 h-10 text-[#FFD600]" /> // Gradiente do Instagram
          )}
          {social.href.includes('youtube') && (
            <FaYoutube className="w-10 h-10 text-[#FF0000]" /> // Vermelho do YouTube 
          )}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center my-16 px-8 ">
      <Image
      className="rounded-full border-4 border-yellow-400"
        alt=""
        src={data.avatar}
        width={200}
        height={200}
      />
      <h1 className="font-bold mt-4 text-xl  text-yellow-400 ">{data.name}</h1>
      <h2 className="mb-10 font-semibold text-xl text-yellow-400">{data.subtitle}</h2>
      
            {/* Renderiza os links */}
            {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      {/* Ícones sociais separados */}
      <SocialIcons />

    </div>
  );
      }

