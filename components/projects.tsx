import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Real Estate Data Science Application",
      description:
        "Built an end-to-end real estate platform with 90% accurate price predictions, interactive analytics, and a recommender system, covering data scraping, feature engineering, model comparison, and AWS deployment.",
      image: "/real-Estate.jpg",
      technologies: ["Python", "Streamlit", "scikit-learn", "AWS",],
      github: "https://github.com/Shamsavvasher/Real-Estate-Web-Application-",
      demo: "https://real-estate-web-application.streamlit.app/",
    },
    {
      title: "Book Recommendation System",
      description:
        "Built a Book Recommendation System using collaborative filtering and NLP, Boosting engagement by 30% and cutting irrelevant suggestions by 25%.",
      image: "/Book_recommendation_img.jpg",
      technologies: ["Python", "Scikit-learn", "Pandas", "NLP", "streamlit"],
      github: "https://github.com/Shamsavvasher/Book_Recommender_System",
      demo: "https://bookrecommendersystem0.streamlit.app/",
    },
    {
      title: "Customer Segmentation",
      description:
        "Developed a K-Means clustering app in Streamlit to segment customers into 4 groups, enabling targeted marketing and personalized offers.",
      image: "/customer_segment_img.jpg",
      technologies: ["Python", "Scikit-learn", "K-Means Clustering", "Streamlit"],
      github: "https://github.com/Shamsavvasher/Customer_Segmentation",
      // demo: "#",
    },
    {
      title: "Bank Loan Analysis Dashboard",
      description:
        "Developed 3 interactive dashboards with SQL insights to track loan performance, highlight 12% higher DTI in defaults, and recommend strategies reducing bad loans by 8%.",
      image: "/Bank_loan_img.png",
      technologies: ["Python", "Power BI", "SQL", "DAX"],
      github: "https://github.com/Shamsavvasher/Bank_Loan_Analysis",
      // demo: "#",
    },
    // {
    //   title: "COVID-19 Tracker Dashboard",
    //   description:
    //     "Built a Dash web app with Plotly and Bootstrap to visualize COVID-19 cases, featuring interactive state-wise analysis and responsive design.",
    //   image: "/covid-19.jpg",
    //   technologies: ["Python", "Dash", "Pandas", "Docker"],
    //   github: "#",
    //   demo: "#",
    // },
    // {
    //   title: "Sales Forecasting Model",
    //   description:
    //     "Implemented time series forecasting models to predict sales trends, helping businesses optimize inventory and resource allocation.",
    //   image: "/sales-forecast-charts.png",
    //   technologies: ["Python", "Prophet", "ARIMA", "Jupyter"],
    //   github: "#",
    //   demo: "#",
    // },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent data science projects that showcase my skills in machine learning, data analysis,
            and visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
