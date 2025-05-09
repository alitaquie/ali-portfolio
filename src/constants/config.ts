type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ali | Developer Portfolio",
    fullName: "Ali Taquie",
    email: "alitaquiedev@gmail.com",
  },
  hero: {
    name: "Ali",
    p: ["I'm a full-stack software engineer." ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a recent Computer Science graduate from UC Santa Cruz, passionate about building scalable software and weaving AI/ML into real-world applications. 
      I’ve led development teams, shipped full-stack products, and built award-winning tools that combine performance with user impact. 
      Whether it’s developing backends with FastAPI, building responsive frontends with React, 
      or adapting AI models for creative tech,I thrive at the intersection of code, creativity, and collaboration. 
      Always looking for the next challenge where I can build, learn, and make cool things that make a positive impact.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects demonstrate my versatility across domains in Computer Science. From full-stack web applications and high-performance backend servers to game experiences and AI-powered solutions. Each entry includes a concise overview, with links to code repositories and live demos, offering proof of my ability to solve problems, embrace diverse technologies, and deliver projects from concept to completion`,
    },
  },
};
