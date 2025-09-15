import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BCA graduate with hands-on experience in data science, including data analysis, machine learning, and data
            visualization. Proficient in Python, SQL, and Power BI for building predictive models and dashboards that
            drive data-informed business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">
                Experienced in regression (Linear, Logistic), classification (KNN, Decision Tree, Random Forest, SVM),
                and ensemble methods (XGBoost) using Scikit-Learn.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-muted-foreground">
                Skilled in data cleaning, wrangling, exploratory data analysis (EDA), feature engineering, and
                statistical analysis using Python and SQL.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-muted-foreground">
                Proficient in creating interactive dashboards and compelling visualizations using Power BI, Matplotlib,
                Seaborn, and Plotly to communicate insights effectively.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed">
            My passion for data science developed during my BCA studies at IBMR College, Hubli, where I achieved an 8/10
            CGPA. Through internships at Feynn Labs and Ai Variant, I gained hands-on experience in market analysis,
            consumer segmentation, and building recommendation systems. Based in Bangalore, Karnataka, I'm particularly
            interested in applying machine learning to solve real-world problems in electric vehicle markets,
            educational technology, and financial services. I'm fluent in English, Kannada, Hindi, and Marathi, enabling
            me to work effectively in diverse environments.
          </p>
        </div>
      </div>
    </section>
  )
}
