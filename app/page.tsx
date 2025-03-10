import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Brain, 
  Calendar, 
  Code, 
  Cpu, 
  Database, 
  ExternalLink,
  Layers, 
  Rocket, 
  Server, 
  Trophy, 
  Users 
} from "lucide-react"

export default function HackathonLanding() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Brain className="h-6 w-6 text-primary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary from-15% via-accent via-50% to-primary to-85%">SmallModelHack</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#themes"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group"
              >
                Themes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#timeline"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group"
              >
                Timeline
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#prizes"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group"
              >
                Prizes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Button size="sm" className="relative overflow-hidden group bg-primary hover:bg-primary/90" asChild>
                <Link href="https://lu.ma/kz4zjpyf" target="_blank">
                  <span className="relative z-10 flex items-center gap-1">Register Now <ExternalLink className="h-3.5 w-3.5 ml-1" /></span>
                </Link>
              </Button>
            </nav>
            <Button size="icon" variant="ghost" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 mb-4">
                    <span className="relative flex h-2 w-2 mr-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                    </span>
                    Registration Open!
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary from-0% via-accent via-50% to-primary to-100% animate-slide-up">
                    Train Small Models, Make Big Impact
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4 animate-slide-up" style={{ animationDelay: "150ms" }}>
                    Join our hackathon to build and train efficient small models using Llama, Hugging Face, and
                    cutting-edge GPU providers.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row animate-slide-up" style={{ animationDelay: "300ms" }}>
                  <Button size="lg" className="relative overflow-hidden group shadow-md bg-gradient-to-r from-primary to-accent hover:saturate-150 hover:shadow-lg" asChild>
                    <Link href="https://lu.ma/kz4zjpyf" target="_blank">
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Rocket className="h-4 w-4" />
                        Register Now
                      </span>
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-8 text-sm space-y-3 sm:space-y-0 pt-2 animate-slide-up" style={{ animationDelay: "450ms" }}>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 backdrop-blur-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>March 28th-30th, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 backdrop-blur-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>In-person Only</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Hackathon illustration showing AI models and training"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  About the Hackathon
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Small Models, Huge Potential</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  This hackathon focuses on training and optimizing small, efficient AI models that can run on
                  resource-constrained devices. Learn how to leverage Llama, Hugging Face resources, and various GPU
                  providers to create models that are both powerful and efficient.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Learn</CardTitle>
                  <Brain className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Workshops and sessions on model training, optimization techniques, and deployment strategies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Build</CardTitle>
                  <Code className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hands-on experience building and training models with mentorship from industry experts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Deploy</CardTitle>
                  <Rocket className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn to deploy your models to edge devices, browsers, and cloud platforms efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="themes" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Hackathon Themes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Choose Your Challenge</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Explore these themes and choose the one that inspires you the most. Or combine multiple themes for
                  your project!
                </p>
              </div>
            </div>

            <Tabs defaultValue="llama" className="mt-12 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="llama">Llama Models</TabsTrigger>
                <TabsTrigger value="huggingface">Hugging Face</TabsTrigger>
                <TabsTrigger value="gpu">GPU Optimization</TabsTrigger>
              </TabsList>
              <TabsContent value="llama" className="p-4 border rounded-lg mt-4">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold">Fine-tuning Llama Models</h3>
                  <p className="text-muted-foreground">
                    Explore how to efficiently fine-tune Llama models for specific tasks while keeping the model size
                    manageable. Focus on techniques like parameter-efficient fine-tuning, quantization, and pruning.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start space-x-3">
                      <Layers className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">LoRA & QLoRA</h4>
                        <p className="text-sm text-muted-foreground">Implement low-rank adaptation techniques</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Quantization</h4>
                        <p className="text-sm text-muted-foreground">
                          Reduce model precision while maintaining quality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="huggingface" className="p-4 border rounded-lg mt-4">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold">Leveraging Hugging Face Ecosystem</h3>
                  <p className="text-muted-foreground">
                    Use Hugging Face's tools, libraries, and model hub to build, train, and deploy efficient models.
                    Focus on transformers, datasets, and the model hub to accelerate your development.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start space-x-3">
                      <Code className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Transformers Library</h4>
                        <p className="text-sm text-muted-foreground">Optimize transformer-based architectures</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Datasets</h4>
                        <p className="text-sm text-muted-foreground">Efficient data loading and preprocessing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="gpu" className="p-4 border rounded-lg mt-4">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold">GPU Optimization Strategies</h3>
                  <p className="text-muted-foreground">
                    Learn how to maximize GPU utilization and minimize costs when training small models. Explore
                    techniques for distributed training, mixed precision, and efficient batching.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start space-x-3">
                      <Cpu className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Mixed Precision</h4>
                        <p className="text-sm text-muted-foreground">Accelerate training with FP16/BF16</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Server className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Distributed Training</h4>
                        <p className="text-sm text-muted-foreground">Scale across multiple GPUs efficiently</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Event Timeline
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hackathon Schedule</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Mark your calendar and prepare for an exciting weekend of learning, building, and collaboration.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-12">
              <ol className="relative border-l border-primary/20">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
                    <Calendar className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold">
                    Day 1: Kickoff & Workshops
                    <span className="bg-primary/10 text-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                      March 28th
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
                    Friday, 9:00 AM - 8:00 PM
                  </time>
                  <p className="mb-4 text-base font-normal text-muted-foreground">
                    Opening ceremony, team formation, and workshops on model training fundamentals, Llama architecture,
                    and Hugging Face tools. Hacking begins in the afternoon.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
                    <Trophy className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold">
                    Day 2: Final Submissions & Awards
                    <span className="bg-primary/10 text-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                      March 30th
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
                    Sunday, 9:00 AM - 5:00 PM
                  </time>
                  <p className="mb-4 text-base font-normal text-muted-foreground">
                    Continued hacking, project submissions, demos, judging, and awards ceremony. Celebrate your
                    achievements!
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="prizes" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Prizes & Rewards
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Win Big with Your Small Models
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Compete for exciting prizes, recognition, and opportunities to showcase your work.
                </p>
              </div>
            </div>

            <div className="grid gap-6 mt-12 md:grid-cols-3">
              <Card className="border-2 border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    First Place
                  </CardTitle>
                  <CardDescription>Grand Prize</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">TBD</p>
                  <p className="text-sm text-muted-foreground">Exciting prizes to be announced soon!</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Second Place
                  </CardTitle>
                  <CardDescription>Runner-up Prize</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">TBD</p>
                  <p className="text-sm text-muted-foreground">Exciting prizes to be announced soon!</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Third Place
                  </CardTitle>
                  <CardDescription>Honorable Mention</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">TBD</p>
                  <p className="text-sm text-muted-foreground">Exciting prizes to be announced soon!</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Special category prizes will also be awarded for Most Innovative Use Case, Best Technical
                Implementation, and Best Presentation. Stay tuned for prize announcements!
              </p>
              <Button size="lg" asChild>
                <Link href="https://lu.ma/kz4zjpyf" target="_blank">
                  Register to Compete
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Sponsors
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Powered By Industry Leaders</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  This hackathon is made possible by our generous sponsors who are committed to advancing AI innovation.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-medium mb-6 text-center">Platinum Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                <Image
                  src="/placeholder-logo.svg"
                  width={200}
                  height={80}
                  alt="Sponsor logo"
                  className="h-12 object-contain"
                />
                <Image
                  src="/placeholder-logo.svg"
                  width={200}
                  height={80}
                  alt="Sponsor logo"
                  className="h-12 object-contain"
                />
                <Image
                  src="/placeholder-logo.svg"
                  width={200}
                  height={80}
                  alt="Sponsor logo"
                  className="h-12 object-contain"
                />
              </div>

              <h3 className="text-lg font-medium mb-6 mt-12 text-center">Gold Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <Image
                  src="/placeholder-logo.svg"
                  width={150}
                  height={60}
                  alt="Sponsor logo"
                  className="h-10 object-contain"
                />
                <Image
                  src="/placeholder-logo.svg"
                  width={150}
                  height={60}
                  alt="Sponsor logo"
                  className="h-10 object-contain"
                />
                <Image
                  src="/placeholder-logo.svg"
                  width={150}
                  height={60}
                  alt="Sponsor logo"
                  className="h-10 object-contain"
                />
                <Image
                  src="/placeholder-logo.svg"
                  width={150}
                  height={60}
                  alt="Sponsor logo"
                  className="h-10 object-contain"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Interested in sponsoring this event? Reach out to our team for sponsorship opportunities.
              </p>
              <Button variant="outline">Become a Sponsor</Button>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Find answers to common questions about the hackathon.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-12 grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Who can participate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Anyone interested in AI and machine learning can participate! Whether you're a student,
                    professional, or hobbyist, all skill levels are welcome. Teams can have up to 4 members.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do I need GPU access to participate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll provide GPU credits to all registered teams through our sponsors. You'll have access to cloud
                    GPUs for training your models during the hackathon.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What if I'm new to model training?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll have workshops and mentors to help you get started! We'll provide resources and starter code
                    to help beginners get up to speed quickly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is there a registration fee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, participation is completely free! Thanks to our sponsors, we're able to offer this event at no
                    cost to participants.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is this hackathon in-person only?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, this is an in-person only event. All participants must be physically present at the venue to
                    participate in the hackathon.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to Build the Future of AI?
                  </h2>
                  <p className="text-primary-foreground/80 md:text-xl/relaxed">
                    Join hundreds of developers, researchers, and AI enthusiasts for a weekend of innovation, learning,
                    and collaboration.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" className="gap-1" asChild>
                    <Link href="https://lu.ma/kz4zjpyf" target="_blank">
                      <Rocket className="h-4 w-4" />
                      Register Now
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-1"
                  >
                    <Calendar className="h-4 w-4" />
                    Add to Calendar
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Hackathon participants collaborating"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background border-t">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-2 items-center text-xl font-bold mb-4 md:mb-0">
              <Brain className="h-6 w-6" />
              <span>SmallModelHack</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              &copy; {new Date().getFullYear()} SmallModelHack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

