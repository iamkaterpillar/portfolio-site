
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, MapPin, Phone, ExternalLink, Code, Palette, Sparkles, Heart } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "React", "TypeScript", "JavaScript", "HTML/CSS", "Node.js", 
    "Python", "Git", "Figma", "Adobe Creative Suite", "UI/UX Design",
    "Responsive Design", "Tailwind CSS", "Next.js", "MongoDB"
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Design System Library",
      description: "A comprehensive design system with reusable components, built with React and Storybook. Includes accessibility features and documentation.",
      tech: ["React", "Storybook", "TypeScript", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
      github: "#",
      demo: "#"
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
            <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text text-white">
              Katharina
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Fore
            </h2>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-pink-400 mr-2" />
              <p className="text-2xl md:text-3xl text-pink-300 font-light">
                Frontend Developer & UI/UX Designer
              </p>
              <Sparkles className="w-6 h-6 text-pink-400 ml-2" />
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Creating beautiful, user-centered digital experiences with modern web technologies. 
              Passionate about clean code, intuitive design, and bringing ideas to life.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-pink-400 mr-2" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-pink-400 mr-2" />
                <span>katharinajfore@gmail.com</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                className="pulse-glow bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0"
                onClick={() => window.open('https://github.com/katharinafore', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                onClick={() => window.open('https://iamkaterpillar.xyz', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Personal Site
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="w-5 h-5 mr-2" />
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-lg py-2 px-4 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-pink-400/30 text-pink-200 hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
              About Me
            </h3>
            <Card className="card-gradient border-pink-400/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Palette className="w-8 h-8 text-pink-400 mr-3" />
                      <h4 className="text-2xl font-semibold text-pink-200">Creative Developer</h4>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I'm a passionate frontend developer and UI/UX designer based in London. I love creating 
                      digital experiences that are not only beautiful but also functional and accessible. 
                      My background in design gives me a unique perspective on development, allowing me to 
                      bridge the gap between creativity and technology.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      When I'm not coding, you can find me exploring London's art galleries, sketching in 
                      coffee shops, or experimenting with new design trends. I believe that the best websites 
                      tell a story and create an emotional connection with users.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center float-animation">
                      <Heart className="w-32 h-32 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
            Let's Work Together
          </h3>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something beautiful together!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                className="pulse-glow bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 text-lg py-6 px-8"
                onClick={() => window.location.href = 'mailto:katharinajfore@gmail.com'}
              >
                <Mail className="w-6 h-6 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white text-lg py-6 px-8"
                onClick={() => window.open('https://github.com/katharinafore', '_blank')}
              >
                <Github className="w-6 h-6 mr-2" />
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 border-t border-pink-400/20">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>© 2024 Katharina Fore. Made with <Heart className="w-4 h-4 inline text-pink-400" /> in London.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
