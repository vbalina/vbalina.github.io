/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Database, 
  Cpu, 
  Cloud, 
  Code2, 
  BarChart3, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Award,
  Terminal,
  Zap,
  ShieldCheck,
  Layers
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const skills = {
    "Cloud Platforms": ["Azure (ADF, ADLS Gen2)", "AWS (S3, Glue, Lambda, EC2)"],
    "Data Warehousing": ["Snowflake (Performance Tuning)", "Oracle"],
    "AI & Big Data": ["Azure Databricks", "PySpark", "Spark SQL", "LLMs", "AI/ML Feature Engineering"],
    "Programming": ["Python", "SQL", "PL/SQL"],
    "DevOps": ["GitLab CI/CD", "Version Control", "Automation"],
    "Governance": ["Data Lineage", "Model Risk Compliance", "Audit Controls"]
  };

  const experiences = [
    {
      company: "BNY",
      location: "Pittsburgh, PA",
      role: "Data Engineer",
      period: "Sep 2025 – Present",
      highlights: [
        "Architected enterprise-grade Snowflake ELT pipelines processing 5M+ records across 7+ years of historical financial data.",
        "Led Snowflake performance optimization reducing compute costs by 30–50% through clustering keys and query refactoring.",
        "Developed PySpark transformations in Databricks for transaction monitoring and anomaly detection feature engineering.",
        "Enabled AI/ML predictive risk scoring by delivering curated feature datasets for analytics teams."
      ]
    },
    {
      company: "World Bank Group",
      location: "Washington, DC",
      role: "Data Engineer",
      period: "Jul 2024 – Sep 2025",
      highlights: [
        "Engineered enterprise treasury risk reporting pipelines supporting IBRD and IFC money market portfolios.",
        "Built Azure Data Factory ingestion frameworks integrating Oracle treasury systems into centralized warehouse layers.",
        "Developed Databricks PySpark pipelines for portfolio exposure analytics and NAV performance tracking.",
        "Optimized PL/SQL procedures reducing reporting latency by 45% across treasury dashboards."
      ]
    },
    {
      company: "Discover Financial Services",
      location: "Riverwoods, IL",
      role: "Data Engineer",
      period: "Sep 2022 – Jun 2024",
      highlights: [
        "Built AWS-based Snowflake data pipelines ingesting regulatory, student loan, and restitution datasets.",
        "Reduced ETL runtime by 30% via AWS Glue performance tuning and optimized SQL transformations.",
        "Developed PySpark-based transaction analysis frameworks supporting CFPB and OCC compliance reporting."
      ]
    },
    {
      company: "Coborn's, Inc.",
      location: "St. Cloud, MN",
      role: "Data Engineer",
      period: "Aug 2021 – Aug 2022",
      highlights: [
        "Designed SSIS and AWS Glue pipelines consolidating POS and inventory transactions.",
        "Engineered denormalized reporting tables improving merchandising and supply chain analytics performance.",
        "Optimized SQL queries and indexing strategies reducing reporting latency by 40%."
      ]
    }
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Terminal className="text-black w-5 h-5" />
            </div>
            <span className="font-mono font-bold text-white tracking-tighter">VB.ENGINEER</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full hover:bg-emerald-400 transition-colors">Get in Touch</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section id="about" className="mb-32">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                <Zap className="w-3 h-3" />
                <span>Available for Full-time AI Engineer Roles</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
                Architecting <span className="text-gradient">Intelligent</span> Data Ecosystems.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-zinc-400 leading-relaxed mb-10">
                Snowflake Certified Engineer with 6+ years of experience specializing in enterprise-scale financial data platforms, AI/ML feature engineering, and high-performance ELT architectures across Azure and AWS.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all hover:scale-105 flex items-center gap-2">
                  View Resume <ExternalLink className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-4 px-4">
                  <a href="#" className="p-2 hover:text-emerald-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                  <a href="#" className="p-2 hover:text-emerald-400 transition-colors"><Github className="w-6 h-6" /></a>
                  <a href="#" className="p-2 hover:text-emerald-400 transition-colors"><Mail className="w-6 h-6" /></a>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {[
              { label: "Cost Reduction", value: "30-50%", icon: <Zap className="text-emerald-400" /> },
              { label: "Data Processed", value: "5M+ Records", icon: <Layers className="text-cyan-400" /> },
              { label: "Experience", value: "6+ Years", icon: <ShieldCheck className="text-indigo-400" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-zinc-500 font-mono uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className="p-4 bg-zinc-800/50 rounded-2xl">
                  {stat.icon}
                </div>
              </motion.div>
            ))}
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold">Technical Arsenal</h2>
              <div className="h-px flex-1 bg-zinc-800"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], i) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      {category === "Cloud Platforms" && <Cloud className="w-5 h-5 text-emerald-400" />}
                      {category === "Data Warehousing" && <Database className="w-5 h-5 text-emerald-400" />}
                      {category === "AI & Big Data" && <Cpu className="w-5 h-5 text-emerald-400" />}
                      {category === "Programming" && <Code2 className="w-5 h-5 text-emerald-400" />}
                      {category === "DevOps" && <Zap className="w-5 h-5 text-emerald-400" />}
                      {category === "Governance" && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                    </div>
                    <h3 className="font-bold text-lg">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold">Professional Journey</h2>
              <div className="h-px flex-1 bg-zinc-800"></div>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-zinc-800"
                >
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role} @ {exp.company}</h3>
                      <p className="text-emerald-400 font-mono text-sm">{exp.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-500">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex gap-3 text-zinc-400 leading-relaxed">
                        <span className="text-emerald-500 mt-1.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold">Certifications</h2>
              <div className="h-px flex-1 bg-zinc-800"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Snowflake Certified Data Engineer", issuer: "Snowflake", icon: <Award className="text-cyan-400" /> },
                { title: "Microsoft Certified: Azure Data Engineer", issuer: "Microsoft", icon: <Award className="text-blue-400" /> },
                { title: "Databricks Certified Professional", issuer: "Databricks", icon: <Award className="text-orange-400" /> }
              ].map((cert, i) => (
                <div key={i} className="glass-card p-6 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                  <div className="p-3 bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                    <p className="text-xs text-zinc-500 font-mono">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/20 p-12 md:p-20 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build the Future of Data.</h2>
              <p className="text-lg text-zinc-400 mb-10">
                Currently looking for new opportunities as an AI or Data Engineer. Let's discuss how I can help optimize your data infrastructure and AI capabilities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:contact@example.com" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" /> Send an Email
                </a>
                <a href="#" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-colors flex items-center justify-center gap-2">
                  <Linkedin className="w-5 h-5" /> LinkedIn Profile
                </a>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          </section>
        </div>
      </main>

      <footer className="py-10 border-t border-zinc-900 text-center text-zinc-600 text-sm font-mono">
        <p>© {new Date().getFullYear()} Varalakshmi Balina. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
