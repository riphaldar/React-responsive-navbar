import React from 'react'
// import { FaBars } from 'react-icons/fa'
import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
// import { IoIcons } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
// import { AiFillHome } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
// import { FcAbout } from 'react-icons/fc'
import { MdContacts } from 'react-icons/md'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '/',
    icon: <FcAbout />,
    cName: 'nav-text',
  },
  {
    title: 'Skils',
    path: '/',
    icon: <GiSkills />,
    cName: 'nav-text',
  },
  {
    title: 'Project',
    path: '/Project',
    icon: <AiOutlineFundProjectionScreen />,
    cName: 'nav-text',
  },

  {
    title: 'Contact',
    path: '/contact',
    icon: <MdContacts />,
    cName: 'nav-text',
  },
]
