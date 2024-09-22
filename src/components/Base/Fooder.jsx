import { TiSocialGithubCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";


import React from 'react'

const Fooder = () => {
  return (
  <>
  <div className='flex flex-col'>
    <div className="flex flex-row animate-bounce justify-center items-center">
        <a href="" target="_blank">
        <TiSocialGithubCircular />
        </a>
        <a href="" target="_blank">
        <TiSocialInstagramCircular />
        </a>
        <a href="" target="_blank">
        <CiLinkedin />
        </a>
    </div>
    <h1 className="text-center p-[0.5px] font-sans">made by @arijiiiittttt</h1>
  </div>
  </>
  )
}

export default Fooder