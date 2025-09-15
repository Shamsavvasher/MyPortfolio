"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Replace '/resume.pdf' with your actual resume file path
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Sham_Savvasher_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/data-science-student-headshot.png"
            alt="Sham Savvasher Profile"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Sham Savvasher</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Data Science Student passionate about turning data into actionable insights through machine learning, statistical analysis, and data visualization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" onClick={scrollToProjects} className="group">
            View My Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" onClick={downloadResume} className="group bg-transparent">
            <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/shamsavvasher"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/shamsavvasher"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:shamsavvasher@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
