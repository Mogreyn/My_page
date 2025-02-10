import  Button  from "@/components/Button/Button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "./SMBtn.module.scss";

export default function ContactButtons() {
  return (
    <div className={styled.smbtnContainer}>
      <Button asChild>
        <a href="mailto:87alv87@gmail.com">
          <FaEnvelope className="mr-2" /> MAIL
        </a>
      </Button>

      <Button asChild>
        <a href="https://github.com/Mogreyn" target="_blank" rel="noopener noreferrer">
          <FaGithub className="mr-2" /> GitHub
        </a>
      </Button>

      <Button asChild>
        <a href="https://www.linkedin.com/in/aleksandr-vilhelmov" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
      </Button>
    </div>
  );
}
