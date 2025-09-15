import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const education = [

    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "IBMR College, Hubli",
      period: "2021 - 2024",
      status: "Completed",
      description:
        "Focused on Computer Science and Applications with projects in Data Science, Machine Learning, and Web Development.",
      gpa: "8.5/10",
    }

  ]

  const certifications = [
    "ExcelR Data Science & Analytics Certification ",
    "Internship Certification - Feynn Labs (AI & Market Analysis)",
    "Internship Certification - Ai Variant (Recommendation Systems & Data Projects)",
    "AWS Fundamentals (Self-learning)",
  ]

  const achievements = [
    "Consistently ranked as the top performer in class, demonstrating dedication and academic excellence",
    "Participated in National-Level Coding Competition at KLE Institute of Technology, Hubli (Dec 2023), showcasing advanced problem-solving and programming skills",
    "Attended National-Level Techno-Cultural Fest at A.G.M College of Engineering & Technology, Varur, actively participating in technical and cultural events"
  ]


  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications in data science and related fields.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>{edu.status}</Badge>
                    </div>
                    <p className="text-primary font-medium mb-1">{edu.school}</p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {edu.period} • GPA: {edu.gpa}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
