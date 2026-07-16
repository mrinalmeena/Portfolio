import React from 'react';
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'LLM Backdoor Audit — Mechanistic Interpretability Pipeline',
     github: "https://github.com/mrinalmeena/llm-backdoor-audit",
    tags: 'Python · PyTorch · Mechanistic Interpretability · PCA · K-Means · Gradio',
    paragraphs: [
      'Built a solo interpretability auditing pipeline for Cybershield to detect hidden backdoors and trojans planted inside LLMs, using GPT-2 small as the target model. Applied PCA to reduce activation dimensionality and K-Means clustering to separate poisoned-trigger activation patterns from normal ones, surfacing anomalous clusters that flag a likely backdoor without needing access to the original training data.',
      'Packaged the pipeline as an interactive Gradio demo so a reviewer can input a prompt and see, layer by layer, whether the model\'s internal activations look anomalous — alongside a full GitHub repo, results PDF, and pitch script for the submission.',
    ],
  },
  {
    title: 'Phishing Website Detection',
    github: "https://github.com/mrinalmeena/Phishing-Website-Detection",
    tags: 'Python · Scikit-learn · Pandas · URL Feature Extraction · Random Forest · SVM',
    paragraphs: [
      'Built an end-to-end ML pipeline that extracts 30+ structural, lexical, and domain-based features from URLs — including subdomain depth, special character ratios, HTTPS usage, and domain age — to classify malicious phishing sites with high precision and recall.',
      'Compared Random Forest and SVM classifiers on the extracted feature set, tuning for the model that best balanced false positives against detection recall for real-world deployment.',
    ],
  },
  {
    title: 'Deep Detect — AI Deepfake Audio Detection',
    github: "https://github.com/mrinalmeena/Deep-Detect",
    tags: 'Python · Deep Learning · Librosa · Scikit-learn · Audio Processing',
    paragraphs: [
      'Built an AI-powered deepfake audio detection system capable of identifying AI-generated and voice-cloned speech in real time using deep learning techniques. Developed an audio feature extraction pipeline with Librosa to analyze MFCCs, pitch, spectral contrast, and other acoustic artifacts introduced by voice synthesis models.',
      'Evaluated the model across noisy and compressed audio conditions to improve robustness for real-world scenarios. The project received the IEEE Team Award at Vihaan 9.0 for its technical innovation and societal impact in combating AI-enabled voice fraud.',
    ],
  },
  {
    title: 'AI Code Review Assistant',
    github: "https://github.com/mrinalmeena/Code-Watch",
    tags: 'Node.js · JavaScript · GitHub API · GitLab API · AI Integration',
    paragraphs: [
      'Developed an AI-powered code review assistant that integrates with GitHub and GitLab to automatically analyze pull requests and generate intelligent review comments. The system identifies potential bugs, security vulnerabilities, code quality issues, and style inconsistencies, helping developers improve code before merging.',
      'Built a context-aware review pipeline capable of understanding changes across multiple files rather than evaluating individual files in isolation. By leveraging AI-driven analysis alongside repository webhooks, the assistant streamlines the review process and reduces the time required for manual code inspection.',
    ],
  },
  {
    title: 'Automated AI Model Compression',
    github: "https://github.com/mrinalmeena/Automated-AI-Model-Compression",
    tags: 'Python · TensorFlow · Model Pruning · Quantization',
    paragraphs: [
      'Built an automated pipeline for compressing deep learning models using magnitude-based pruning and post-training quantization.',
      'Reduced model size by up to 75% and inference latency by over 60% while maintaining competitive prediction accuracy, making models suitable for edge deployment.',
    ],
  },
  {
    title: 'Stock Portfolio Tracker',
    github: "https://github.com/mrinalmeena/StockVault",
    tags: 'JavaScript · HTML · CSS · REST APIs · Chart.js',
    paragraphs: [
      'Built a responsive stock portfolio dashboard that fetches live market data through REST APIs, enabling users to monitor investments in real time.',
      'Implemented interactive charts, portfolio analytics, and profit/loss tracking to provide an intuitive visualization of investment performance.',
    ],
  },
];

/* ── Sticky side label (repeats per "row" block) ────────── */
function SectionTitle() {
  return (

    
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="text-center mb-16"
    >
      <h2 className="font-hand text-5xl text-[#8B1E23]">
        Industry Projects & Other Works
      </h2>
    </motion.div>
  );
}

export default function Projects() {
  return (
    
    <section id="projects" className="relative px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-cream overflow-hidden">
            {/* Watercolor */}
            <img
        src={`${import.meta.env.BASE_URL}images/watercolor-pink.png`}
        alt=""
        className="
          absolute
          -top-32
          -left-32
          w-[900px]
          opacity-70
          pointer-events-none
          select-none
          z-0
        "
      />
      
      {/* Orange Watercolor */}
      <img
        src={`${import.meta.env.BASE_URL}images/watercolor-orange.png`}
        alt=""
        className="
          absolute
          -bottom-48
          -right-44
          w-[1000px]
          opacity-75
          pointer-events-none
          select-none
          z-0
        "
      />
      
            
      
            {/* Butterflies */}
            <img
              src={`${import.meta.env.BASE_URL}images/butterfly.png`}
              alt=""
              className="absolute top-20 right-52 w-14 animate-float z-20"
            />
      
            <img
              src={`${import.meta.env.BASE_URL}images/butterfly.png`}
              alt=""
              className="absolute top-48 right-10 w-10 rotate-12 animate-float z-20"
            />
      
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <SectionTitle />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="
        relative
        rounded-2xl
        p-6
        bg-white/60
        backdrop-blur-sm
        border
        border-[#8B1E23]/10
        transition-all
        duration-300
        hover:bg-white/90
        hover:shadow-lg
        hover:-translate-y-1
        h-full
        flex
        flex-col
      "
    >
      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute
          top-4
          right-4
          z-20
          w-10
          h-10
          rounded-full
          bg-white/80
          border
          border-[#8B1E23]/20
          flex
          items-center
          justify-center
          text-[#8B1E23]
          shadow-md
          transition-all
          duration-300
          hover:bg-[#8B1E23]
          hover:text-white
          hover:scale-110
        "
      >
        <FaGithub size={18} />
      </a>

      {/* Number Badge */}
      <div className="absolute right-4 top-16 pointer-events-none opacity-10">
        <p className="text-6xl font-serif font-bold text-[#8B1E23] leading-none">
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>

      {/* Title */}
      <h3 className="font-serif font-bold text-lg text-[#2D2520] mb-3 pr-12 leading-tight">
        {project.title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.split(" · ").map((tag) => (
          <span
            key={tag}
            className="
              px-2.5
              py-1
              rounded-full
              border
              border-[#8B1E23]/20
              bg-[#8B1E23]/5
              text-[#6A4E46]
              text-xs
              font-medium
              transition-all
              duration-300
              hover:bg-[#8B1E23]
              hover:text-white
              hover:scale-105
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="flex-1 flex flex-col gap-2.5">
        {project.paragraphs.map((para, i) => (
          <p
            key={i}
            className="
              text-[#4F443D]
              text-sm
              leading-6
            "
          >
            {para}
          </p>
        ))}
      </div>
    </motion.article>
  );
}


