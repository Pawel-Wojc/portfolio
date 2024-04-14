import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <Navbar isBlurred>
      <NavbarBrand>
      <Link color="foreground" href="/">
        <p className="font-bold text-inherit">About me</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projekty
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/homelab" >
            HomeLab
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a color="foreground" href="https://github.com/Pawel-Wojc" target="_blank">
          <FaGithub size={28} />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a color="foreground" href="https://www.linkedin.com/in/paweł-wójcik-973b38235/" target="_blank">
          <FaLinkedin size={28}/>
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
