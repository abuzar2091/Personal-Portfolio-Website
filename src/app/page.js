import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { AboutMe} from "@/components/AboutMe";
import { MySkills } from "@/components/MySkills";
import Services from "@/components/Services";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <main className=" min-h-screen text-white bg-black/[.9]  antialiased">
      <Header/>
      <HeroSection id="home"/>
      <AboutMe/>
      <MySkills/>
      <Project/>
      <WorkExperience/>
      <Services/>
      <ContactMe/>
      <Footer/>
    </main>
  );
}
