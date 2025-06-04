
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, MapPin, ExternalLink, Code, Sparkles, Heart, Linkedin, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);
  const fullName = "Kat Fore";
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for name
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("katharinajfore@gmail.com");
      setEmailCopied(true);
      toast({
        title: "Email copied!",
        description: "katharinajfore@gmail.com has been copied to your clipboard.",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const skills = [
    "Product Management", "UX/UI Design", "Roadmap Prioritization", "Cross-functional Collaboration", 
    "Agile", "Crypto", "DeFi", "Stakeholder Management", "User Research", "Operations", 
    "Marketing", "Newsletters", "Analytics", "SQL", "Data Analysis", "Figma", "Dune Analytics"
  ];

  const tools = [
    "Jira", "Confluence", "PostHog", "Hotjar", "Grafana", "Google Analytics", "DBeaver", 
    "BeeKeeper Studio", "GitHub", "Notion", "Slack", "Intercom", "Discord", 
    "Blockchain Explorers", "Dune", "Cursor", "Beehiiv", "GitBook", "Figma", "Canva", "Sora"
  ];

  const projects = [
    {
      title: "Bebop (DEX aggregator)",
      description: "Led development of Bebop - a suite of APIs and crypto trading platform across 12+ EVM chains.",
      tech: ["Product strategy", "UX design", "crypto"],
      github: "https://github.com/bebop-dex",
      demo: "https://bebop.xyz/"
    },
    {
      title: "Personal website",
      description: "Created my own website and blog using AI Agents in Cursor to document my learnings.",
      tech: ["AI Agents", "Blog", "Crypto", "Website Development"],
      github: "https://github.com/iamkaterpillar/my-website",
      demo: "https://www.iamkaterpillar.xyz/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="mb-6 float-animation">
              <Code className="w-16 h-16 mx-auto text-pink-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text text-white min-h-[1.2em]">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-pink-400 mr-2" />
              <p className="text-2xl md:text-3xl text-pink-300 font-light">
                Product Manager
              </p>
              <Sparkles className="w-6 h-6 text-pink-400 ml-2" />
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Crypto-native PM with 4+ years at Bebop & Wintermute. Ex-consultant with an MBA from LBS. 
              Focused on fast execution, clean UX, and scaling great products. Exploring the future of finance across DeFi, real-world assets, and language models.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-pink-400 mr-2" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center cursor-pointer hover:text-pink-300 transition-colors" onClick={copyEmail}>
                {emailCopied ? (
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                ) : (
                  <Mail className="w-5 h-5 text-pink-400 mr-2" />
                )}
                <span>katharinajfore@gmail.com</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                className="pulse-glow bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0"
                onClick={() => window.open('https://www.iamkaterpillar.xyz/', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Personal Website
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-400/60 text-pink-300 bg-pink-400/10 hover:bg-pink-400/20 hover:text-pink-200"
                onClick={() => window.open('https://github.com/iamkaterpillar', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-400/60 text-pink-300 bg-pink-400/10 hover:bg-pink-400/20 hover:text-pink-200"
                onClick={() => window.open('https://www.linkedin.com/in/katharinafore/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-sm py-2 px-4 bg-white/90 text-gray-900 border border-pink-400/30 hover:bg-pink-50 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Platforms Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge 
                key={tool} 
                variant="outline" 
                className="text-sm py-2 px-4 bg-purple-100/90 text-purple-900 border border-purple-400/50 hover:bg-purple-200/90 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="card-gradient border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-pink-200">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-pink-400/50 text-pink-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-pink-400/60 text-pink-300 bg-pink-400/10 hover:bg-pink-400/20 hover:text-pink-200"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 border-t border-pink-400/20">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>© 2025 Kat Fore. Made with <Heart className="w-4 h-4 inline text-pink-400" /> in London.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
