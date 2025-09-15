import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Keras", level: 85 },
      ],
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 85 },
        { name: "Plotly", level: 80 },
        { name: "Power BI", level: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Jupyter", level: 95 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's an overview of my technical skills and proficiency levels across various data science tools and
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Statistical Analysis",
                  "Data Mining",
                  "Feature Engineering",
                  "Model Deployment",
                  "A/B Testing",
                  "Time Series Analysis",
                  "Natural Language Processing",
                  "Computer Vision",
                  "Big Data",
                  "Data Warehousing",
                  "ETL Processes",
                  "API Development",
                ].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
