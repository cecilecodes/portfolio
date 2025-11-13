import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { BiMedal } from "react-icons/bi";
import { IoPersonCircleOutline, IoBusinessSharp } from "react-icons/io5";
import EarthIcon from './earth-icon';

type CardProps = {
  title?: string;
  description?: string;
  linkProd?: string;
  linkRepo?: string;
  linkYou?: string;
  linkLink?: string;
  organization?: string;
  award?: string;
  position?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title = '',
  description = '',
  linkProd = '#',
  linkRepo = '#',
  linkYou = '#',
  linkLink = '#',
  organization = '',
  award = '',
  position = '',
}) => {
  return (
    <div className="flex h-auto flex-col gap-4 rounded-2xl border-2 border-neutral-200 p-8 transition-colors duration-200 hover:border-[#5B92E5] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-[#5B92E5]">
      <div className="h-5/6 space-y-4">
        <div className="flex flex-row">
          <p className="font-['Schibsted_Grotesk'] text-lg font-semibold">{title}</p>
        </div>
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>

      {award && (
        <div className="flex flex-row">
          <BiMedal className="h-5 w-5" />
          <p className="pl-3 text-sm text-neutral-600 dark:text-neutral-300">{award}</p>
        </div>
      )}

      {organization && (
        <div className="flex flex-row">
          <IoBusinessSharp className="h-5 w-5" />
          <p className="pl-3 text-sm text-neutral-600 dark:text-neutral-300">{organization}</p>
        </div>
      )}

      {position && (
        <div className="flex flex-row">
          <IoPersonCircleOutline className="h-5 w-5" />
          <p className="pl-3 text-sm text-neutral-600 dark:text-neutral-300">{position}</p>
        </div>
      )}

      <div className="flex flex-row justify-evenly gap-4">
        {linkProd !== '#' && (
          <a href={linkProd} target="_blank" rel="noopener noreferrer" className="w-1/2">
            <button className="flex w-full items-center justify-center rounded-lg bg-[#5B92E5] px-6 py-3 text-lg text-black transition-colors duration-200 hover:bg-[#5B92E5] active:bg-[#5B92E5] dark:bg-[#5B92E5] dark:text-white dark:hover:bg-[#5B92E5] dark:active:bg-[#5B92E5]">
              <EarthIcon />
            </button>
          </a>
        )}

        {linkRepo !== '#' && (
          <a href={linkRepo} target="_blank" rel="noopener noreferrer" className="w-1/2">
            <button className="flex w-full items-center justify-center rounded-lg border-2 border-neutral-200 bg-neutral-100 px-6 py-3 text-2xl text-black transition-colors duration-200 hover:bg-neutral-200 active:bg-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:active:bg-neutral-600">
              <FaGithub />
            </button>
          </a>
        )}

        {linkYou !== '#' && (
          <a href={linkYou} target="_blank" rel="noopener noreferrer" className="w-1/2">
            <button className="flex w-full items-center justify-center rounded-lg bg-[#FF0000] px-6 py-3 text-2xl text-white transition-colors duration-200 hover:bg-[#FF0000] active:bg-[#FF0000] dark:bg-[#FF0000] dark:text-white dark:hover:bg-[#FF0000] dark:active:bg-[#FF0000]">
              <FaYoutube />
            </button>
          </a>
        )}

        {linkLink !== '#' && (
          <a href={linkLink} target="_blank" rel="noopener noreferrer" className="w-1/2">
            <button className="flex w-full items-center justify-center rounded-lg bg-[#0077B5] px-6 py-3 text-2xl text-white transition-colors duration-200 hover:bg-[#0077B5] active:bg-[#0077B5] dark:bg-[#0077B5] dark:text-white dark:hover:bg-[#0077B5] dark:active:bg-[#0077B5]">
              <FaLinkedinIn />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
