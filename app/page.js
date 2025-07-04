"use client";
import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
        setBlogs(filtered);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setBlogs([]);
      }
    }
    getData();
  }, []);

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects blogs={blogs} />
      <Education />
      <ContactSection />
    </div>
  );
}
