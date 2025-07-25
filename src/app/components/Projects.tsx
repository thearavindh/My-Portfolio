'use client';

import { Box, Typography, Grid, Chip, Button, useTheme,  Modal, IconButton } from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useThemeContext } from '@/app/theme/ThemeProvider';
import { FaPlay, FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReactPlayer from 'react-player';

// Updated project data with video URLs
const projectsData = [

    {
      id: 1,
      title: "Water Meter App",
      description: "A cross-platform application using Expo and React for real-time water usage tracking, leak alerts, and analytics, backed by a PostgreSQL and Node.js backend.",
      tags: ["React Native", "Expo", "React", "TypeScript", "Node.js", "PostgreSQL"],
      image: "/images/watermeter.png",
      github: "https://github.com/perspectivLabs/WaterMeter_App/",
      live: "https://watermeter.dev.perspectiv.in/Login"
    },  
    {
  id: 2,
  title: "Voice Enabled Chat with PDFs",
  description: "Developed a LangChain-based chatbot that answers user queries through audio input using OpenAI's Whisper. Implemented a RAG pipeline with PDF chunking, embedding generation, and FAISS vector database for retrieval. Used LLaMA Scout LLM and Gemini TTS for human-like audio responses. Deployed via Hugging Face Spaces.",
  tags: ["Python", "LangChain", "OpenAI", "Whisper", "FAISS", "Gemini TTS", "LLaMA", "Hugging Face"],
  image: "/images/voice.png", // Replace with your actual screenshot/image path
  github: "https://huggingface.co/spaces/the11/Voice-Activated-RAG-System", 
  live: "https://huggingface.co/spaces/the11/Voice-Activated-RAG-System" // Add Hugging Face Spaces URL here if deployed
},
     {
      id: 3,
      title: "Blupilot Interview Copilot",
      description: "A web app built with React Native and Node.js to help users prepare for job interviews through interactive mock sessions and personalized feedback. Integrated OpenAI API to simulate realistic, role-specific interview conversations across various industries, creating a dynamic and adaptive practice environment.",
      tags: ["React Native", "Node.js", "Express.js", "MongoDB", "REST API", "OpenAI"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      github: "https://github.com/thearavindh/Bluepilot-Interview-Copilot",
      live: "https://github.com/thearavindh/Bluepilot-Interview-Copilot"
    },    
    {
      id: 5,
      title: "Task Management App",
      description: "A full-stack To Do List application featuring a Node.js backend and a TypeScript-based frontend",
      tags: ["Node.js", "TypeScript", "Express", "HTML", "CSS"],
      image: "/images/todo.png",
      github: "https://github.com/thearavindh/Todo-App",
      live: "https://todo-app-bay-nine-12.vercel.app/"
    }
  ];

export const Projects = () => {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null!);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const openVideoModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsPlaying(true);
  };

  const closeVideoModal = () => {
    setIsPlaying(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation to complete
  };

  return (
    <Box 
      id="projects"
      component="section"
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        padding: { xs: '80px 20px', md: '120px 60px' },
        position: 'relative',
        overflow: 'hidden',
        background: darkMode ? 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' : 'radial-gradient(circle at center, #f5f5f5 0%, #e0e0e0 100%)',
      }}
    >
      {/* Animated background elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}20, transparent)`,
            opacity: 0.1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main container */}
      <Box sx={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        paddingLeft: { md: '100px' }
      }}>
        {/* Vertical animated line */}
        <motion.div
          style={{
            position: 'absolute',
            left: '50px',
            top: 0,
            bottom: 0,
            width: '4px',
            background: theme.palette.background.paper,
            borderRadius: '2px',
             display: 'block' 
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: lineHeight,
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* Section header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 8 },
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.2
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Selected work showcasing my skills and experience
            </Typography>
          </motion.div>
        </Box>

        {/* Projects list */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {projectsData.map((project, index) => (
            <Box 
              key={project.id} 
              sx={{ 
                mb: { xs: 8, md: 12 },
                position: 'relative'
              }}
            >
              {/* Project dot on the line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  // left: { xs: 0, md: '46px' },
                  top: '40px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  border: `2px solid ${theme.palette.background.paper}`,
                  display: 'block' ,
                  zIndex: 2
                }}
              />

              <Grid 
                container 
                spacing={6} 
                alignItems="center"
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                sx={{ position: 'relative' }}
              >
                {/* Project image with video play button */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: `0 20px 40px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                        position: 'relative',
                        cursor: 'pointer',
                        '&:hover img': {
                          transform: 'scale(1.03)'
                        },
                        '&:hover .play-button': {
                          transform: 'scale(1.1)',
                          opacity: 1
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                          display: 'block'
                        }}
                      />
                      {/* Gradient overlay */}
                      
                     
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 3,
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1
                        }}
                      >
                        {project.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              background: theme.palette.background.paper,
                              color: theme.palette.text.primary,
                              fontWeight: 600,
                              fontSize: '0.7rem'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>

                {/* Project content */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ 
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography
                        variant="h3"
                        component="h3"
                        sx={{ 
                          fontWeight: 700,
                          mb: 2,
                          color: theme.palette.text.primary,
                          fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{ 
                          mb: 3,
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                          fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="contained"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<FaGithub />}
                            sx={{
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                              borderRadius: '12px',
                              padding: '10px 24px',
                              fontWeight: 600,
                              textTransform: 'none',
                              boxShadow: `0 4px 20px ${theme.palette.primary.main}30`,
                              '&:hover': {
                                boxShadow: `0 6px 24px ${theme.palette.primary.main}50`
                              }
                            }}
                          >
                            Code
                          </Button>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outlined"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<FaExternalLinkAlt />}
                            sx={{
                              borderColor: theme.palette.primary.main,
                              color: theme.palette.primary.main,
                              borderRadius: '12px',
                              padding: '10px 24px',
                              fontWeight: 600,
                              textTransform: 'none',
                              '&:hover': {
                                background: `${theme.palette.primary.main}10`,
                                borderColor: theme.palette.primary.dark,
                                color: theme.palette.primary.dark
                              }
                            }}
                          >
                            Live Demo
                          </Button>
                        </motion.div>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            open={!!selectedProject}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Box sx={{ maxWidth: '90vw', width: '800px', p: 2 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Video player with glowing border */}
                <motion.div
                  style={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: `0 0 40px ${theme.palette.primary.main}80`
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 30px ${theme.palette.primary.main}80`,
                      `0 0 50px ${theme.palette.secondary.main}80`,
                      `0 0 30px ${theme.palette.primary.main}80`
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <ReactPlayer
                    url={selectedProject.image}
                    playing={isPlaying}
                    controls={true}
                    width="100%"
                    height="100%"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                </motion.div>

                {/* Project info */}
                <Box sx={{
                  mt: 3,
                  p: 3,
                  background: darkMode ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '12px'
                }}>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    {selectedProject.description}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};
