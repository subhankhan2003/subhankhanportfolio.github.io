import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Code2, Briefcase, User, GraduationCap } from 'lucide-react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Section id="about" title="About Me">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/profile.jpeg"
              alt="Subhan Khan"
              className="w-48 h-48 rounded-full object-cover ring-2 ring-primary"
            />
            <div className="flex-1">
              <motion.h2 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-4 text-primary"
              >
                Subhan Khan
              </motion.h2>
              <p className="text-text-secondary mb-6">
                Passionate React Developer with expertise in building modern web applications.
                Specialized in creating responsive, user-friendly interfaces with a focus on performance and clean code.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://github.com/subhankhan2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://www.linkedin.com/in/subhan-khan-9bb40228a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://www.instagram.com/_subhankhan_1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Section>

        <Section id="skills" title="Skills">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={<Code2 className="w-6 h-6" />}
                title="Frontend Development"
                skills={['HTML', 'CSS', 'JavaScript', 'React', 'Next.js','Android App Developer','Flutter']}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={<Briefcase className="w-6 h-6" />}
                title="Tools & Methods"
                skills={['Git', 'VS Code', 'Responsive Design', 'Web Performance']}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillCard
                icon={<User className="w-6 h-6" />}
                title="Soft Skills"
                skills={['Team Leadership', 'Communication', 'Problem Solving']}
              />
            </motion.div>
          </motion.div>
        </Section>

        <Section id="projects" title="Featured Projects">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div variants={itemVariants}>
              <ProjectCard
                title="Portfolio Website"
                description="A modern portfolio website showcasing my skills and projects, built with React and featuring smooth animations"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                tags={['React', 'TypeScript', 'Tailwind']}
                link="https://subhankhan2003.github.io/"
              />
            </motion.div>
          </motion.div>
        </Section>

        <Section id="education" title="Education">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-surface rounded-lg p-6 border border-surface-light"
          >
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                <p className="text-text-secondary">University of Central Punjab</p>
              </div>
            </div>
            <p className="text-text-secondary">
              Specializing in Web Development,Security Analyst and Cross Platform App Development 
            </p>
          </motion.div>
        </Section>
      </main>

      <footer className="bg-surface py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary">© 2024 Subhan Khan. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/subhankhan2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                GitHub
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/subhan-khan-9bb40228a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                LinkedIn
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/_subhankhan_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Instagram
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
