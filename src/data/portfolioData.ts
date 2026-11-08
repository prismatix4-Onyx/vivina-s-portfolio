export interface SkillItem {
  name: string;
  category: 'ml' | 'voice' | 'nlp' | 'research' | 'integration';
  level: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  tagline: string;
  summary: string;
  tech: string[];
  attribution: string;
  attributionUrl: string;
  image: string;
  status: 'Production' | 'Live Beta' | 'Active Engine' | 'In Development';
  metrics: string[];
  architectureDetails: string[];
  keyChallenges: string;
}

export const PROFILE = {
  name: "Vivina S",
  title: "Co-Founder & ML/R&D Lead @ PRISMATIX4",
  honor: "Rotractor & Machine Learning Researcher",
  tagline: "Exploring Machine Intelligence, Real-Time Voice Pipelines & Next-Gen R&D.",
  bio: "Co-Founder & ML/R&D Lead at PRISMATIX4 and proud Rotractor. Focused on cutting-edge Machine Learning experimentation, real-time voice intelligence (Whisper STT / Neural TTS), conversational reasoning loops, and human-centric AI research.",
  philosophy: "Machine intelligence should not mimic human intellect superficially; it must actively assist, understand context, and elevate human capability.",
  links: {
    github: "https://github.com/viv-07",
    linkedin: "https://www.linkedin.com/in/vivina-s-8968bb395/",
    prismatix4: "https://prismatix4.vercel.app/",
    email: "teamprismatix4@gmail.com",
  },
  stats: [
    { label: "Voice Pipeline Turnaround", value: "< 280ms" },
    { label: "R&D Experiments Run", value: "30+" },
    { label: "Neural Audio Sampling", value: "24 kHz" },
    { label: "Model Semantic Accuracy", value: "99.2%" },
  ]
};

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'ml', label: 'Machine Learning & Deep Learning' },
  { id: 'voice', label: 'Voice AI & Audio Streaming' },
  { id: 'nlp', label: 'NLP & Large Language Models' },
  { id: 'research', label: 'AI Research & Experimentation' },
  { id: 'integration', label: 'Intelligent System Integration' },
] as const;

export const SKILLS: SkillItem[] = [
  // Machine Learning & Deep Learning
  {
    name: "Deep Neural Architectures",
    category: "ml",
    level: "Architect",
    description: "Designing convolutional, recurrent, and transformer networks in PyTorch for audio spectral analysis and predictive telemetry.",
    tags: ["PyTorch", "Transformers", "Deep Learning", "Neural Nets"]
  },
  {
    name: "Feature Engineering & Data Modeling",
    category: "ml",
    level: "Advanced",
    description: "Multi-variate normalization, temporal windowing, noise filtration on biometric signals, and automated data pipelines.",
    tags: ["Scikit-Learn", "NumPy", "Pandas", "Feature Engineering"]
  },
  {
    name: "Model Quantization & ONNX Export",
    category: "ml",
    level: "Advanced",
    description: "Optimizing neural weights via INT8/FP16 quantization, pruning parameters, and compiling models to ONNX runtimes for edge inference.",
    tags: ["ONNX", "Quantization", "Model Optimization", "Edge AI"]
  },

  // Voice AI & Audio Streaming
  {
    name: "Real-Time Whisper STT Chunking",
    category: "voice",
    level: "Architect",
    description: "Streaming audio chunk segmentation, voice activity detection (VAD), and low-latency speech transcription pipelines.",
    tags: ["Whisper STT", "VAD", "Audio Chunking", "Real-Time Voice"]
  },
  {
    name: "Neural Text-to-Speech (TTS) Synthesis",
    category: "voice",
    level: "Architect",
    description: "Sub-200ms neural acoustic vocoder synthesis, streaming PCM audio packets, prosody tuning, and duplex conversational loops.",
    tags: ["Neural TTS", "Streaming Audio", "Acoustic Models", "Low-Latency"]
  },
  {
    name: "Duplex Audio Stream Synchronization",
    category: "voice",
    level: "Advanced",
    description: "Handling microphone interruption detection, acoustic echo cancellation, and real-time audio buffer synchronization.",
    tags: ["Duplex Audio", "Interruption Handling", "Echo Cancellation"]
  },

  // NLP & LLMs
  {
    name: "Prompt Topology & Context Compression",
    category: "nlp",
    level: "Architect",
    description: "Structured JSON schema enforcement, context window pruning, multi-turn state preservation, and persona conditioning.",
    tags: ["Prompt Engineering", "Context Compression", "Structured Output"]
  },
  {
    name: "RAG & Vector Embeddings",
    category: "nlp",
    level: "Advanced",
    description: "Semantic similarity retrieval, cosine distance ranking, vector database indexing, and dynamic context augmentation.",
    tags: ["RAG", "Embeddings", "Vector DB", "Semantic Search"]
  },

  // Research & Experimentation
  {
    name: "Biometric Anomaly Detection R&D",
    category: "research",
    level: "Advanced",
    description: "Researching algorithmic anomaly detection in continuous vital telemetry and fall-detection sensor signals.",
    tags: ["Anomaly Detection", "Biometric ML", "R&D", "Sensor Streams"]
  },
  {
    name: "Experimental Prototyping & Benchmarking",
    category: "research",
    level: "Advanced",
    description: "Hypothesis testing, rigorous latency benchmarking across hardware profiles, and ablation studies on model accuracy.",
    tags: ["Ablation Studies", "Benchmarking", "Research Methodologies"]
  },

  // System Integration
  {
    name: "Python AsyncIO & FastAPI Bridges",
    category: "integration",
    level: "Advanced",
    description: "Non-blocking asynchronous inference servers, streaming WebSocket audio endpoints, and worker task queues.",
    tags: ["FastAPI", "AsyncIO", "Python", "Inference Servers"]
  },
  {
    name: "Autonomous Agent Tool Calling",
    category: "integration",
    level: "Advanced",
    description: "Connecting LLM decision loops with deterministic backend microservice functions and task dispatch triggers.",
    tags: ["Tool Calling", "Autonomous AI", "Agentic Loops"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "sara",
    title: "SARA — Autonomous Voice AI & Life OS",
    role: "Co-Founder & ML/Voice Lead",
    tagline: "Proactive lockscreen voice agent & cross-platform Life OS.",
    summary: "SARA initiates native phone calls over the lockscreen at target times, engaging in real-time two-way voice check-ins and unifying finances, habits, and career tracking into a queryable Life OS.",
    tech: ["Whisper STT", "Neural TTS", "LLM Reasoning", "Voice Pipelines", "Python AsyncIO", "Context Vectors"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./sara_thumbnail.png",
    status: "In Development",
    metrics: ["< 280ms Speech-to-Speech Turnaround", "24kHz High-Fidelity Synthesis", "99.2% Intent Recognition"],
    architectureDetails: [
      "Architected the duplex real-time voice streaming pipeline pairing low-latency Whisper STT chunking with neural TTS speech synthesis.",
      "Engineered an interruption-aware conversational state machine enabling users to naturally speak over agent responses.",
      "Formulated prompt topology and context compression pipelines enabling the LLM to query personal habits, tasks, and finance vectors.",
      "Benchmarked and reduced end-to-end voice round-trip latency to sub-300ms across mobile network connections."
    ],
    keyChallenges: "Eliminating perceptual latency in bi-directional conversational audio streaming while maintaining contextual coherence."
  },
  {
    id: "snap",
    title: "SNAP — Personal Care Network",
    role: "Co-Founder & ML/R&D Lead",
    tagline: "Real-time care coordination, one-touch SOS, and P2P WebRTC consultations.",
    summary: "Cross-platform assistive ecosystem featuring dual-role caregiver/receiver dashboards, instantaneous WebSocket push notifications, and low-latency encrypted peer-to-peer WebRTC video calling.",
    tech: ["Biometric ML Research", "Sensor Anomaly Detection", "Predictive Triggers", "Signal Processing"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./snap_thumbnail.jpg",
    status: "Production",
    metrics: ["Research on Fall Detection Models", "Sub-50ms Vital Alert Triggers", "Noise-Filtered Sensor Ingestion"],
    architectureDetails: [
      "Conducted foundational research on machine learning models for wearable biometric accelerometer and gyroscope anomaly detection.",
      "Designed algorithmic routines to filter motion artifacts and prevent false-positive distress dispatches.",
      "Investigated automated emergency trigger workflows based on missed medication adherence intervals.",
      "Collaborated on bilingual NLP prompt design for senior accessibility and assistive dialogues."
    ],
    keyChallenges: "Balancing high sensitivity for emergency falls against the risk of disruptive false-alarm notifications for caregivers."
  },
  {
    id: "physense",
    title: "PhySense — Virtual Hardware Simulation Platform",
    role: "Co-Founder & ML/R&D Lead",
    tagline: "Experience hardware before you touch it.",
    summary: "Browser-based virtual electronics laboratory allowing students to test microcontrollers (ESP32/Arduino), connect virtual sensors, and debug embedded logic before committing to physical circuits.",
    tech: ["Circuit Error Diagnostics", "Behavioral Simulation", "Algorithm Modeling", "IoT Telemetry"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./physense_thumbnail.jpg",
    status: "Active Engine",
    metrics: ["Intelligent Circuit Diagnostics", "Virtual Sensor Drift Modeling", "Automated Error Detection"],
    architectureDetails: [
      "Formulated predictive circuit diagnostic algorithms identifying short circuits and voltage drop anomalies prior to compilation.",
      "Modeled realistic environmental sensor noise and ADC jitter to simulate physical-world sensor telemetry accurately.",
      "Researched AI-guided troubleshooting hints to guide students through embedded C/C++ debugging.",
      "Evaluated instruction cycle simulation bottlenecks to enhance WebAssembly emulation efficiency."
    ],
    keyChallenges: "Accurately modeling stochastic analog sensor noise without slowing down real-time 60 FPS deterministic logic simulation."
  },
  {
    id: "studentspace",
    title: "Student Space — Academic & Life Productivity Platform",
    role: "Co-Founder & ML/R&D Lead",
    tagline: "One unified platform for every dimension of student life.",
    summary: "Centralized platform managing academic schedules, assignment milestones, and productivity metrics to eliminate cognitive fragmentation.",
    tech: ["Predictive Analytics", "Study Habit Modeling", "GPA Forecasting Algorithms", "Python Data Science"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./student_space_thumbnail.png",
    status: "In Development",
    metrics: ["GPA Performance Forecasting", "Adaptive Study Sprints", "Cognitive Load Balancing"],
    architectureDetails: [
      "Engineered mathematical GPA trajectory forecasting models evaluating pending assignment weights and historical grades.",
      "Designed algorithmic time-allocation recommendations distributing study sprints evenly to prevent exam cramming.",
      "Formulated metric dashboards visualizing academic velocity and progress toward semester graduation goals.",
      "Implemented predictive milestone reminders based on historical student completion intervals."
    ],
    keyChallenges: "Designing an adaptive recommendation algorithm that motivates students without causing anxiety or unrealistic task scheduling."
  }
];

export const PRISMATIX4_INFO = {
  name: "PRISMATIX4",
  role: "Co-Founder & ML/R&D Lead",
  statement: "PRISMATIX4 is the collaborative technology collective uniting four specialized engineers across Systems, Backend, Frontend, and Machine Learning to build production-grade, human-centric software.",
  pillars: [
    { title: "Machine Intelligence", lead: "Vivina S", desc: "Applied neural networks, voice interfaces, and predictive agentic workflows." },
    { title: "Systems & Architecture", lead: "Sanjay S", desc: "Autonomous pipelines, real-time protocols, and foundational engineering." },
    { title: "Distributed Backend Core", lead: "Prithic P", desc: "High-concurrency microservices, data consistency, and cloud infrastructure." },
    { title: "Mobile & Interfaces", lead: "Vasundara Devi G", desc: "Fluid cross-platform experiences, design systems, and responsive ergonomics." }
  ],
  hubUrl: "https://prismatix4.vercel.app/"
};