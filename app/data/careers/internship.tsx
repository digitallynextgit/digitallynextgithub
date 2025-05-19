interface InternshipRequirement {
  title: string;
  items: string[];
}

export interface InternshipPosition {
  title: string;
  description: string;
  mission: InternshipRequirement;
  toolkit: InternshipRequirement;
  bonusPoints: InternshipRequirement;
}

export const internshipPositions: InternshipPosition[] = [
  {
    title: "Graphic Design Intern",
    description: "Are you a visual storyteller with a passion for design? Do you see the world in colors, shapes, and patterns? If so, we have an exciting opportunity for you! Join us as a Graphic Designer Intern and let your creativity shine.",
    mission: {
      title: "Your Mission (Should You Choose to Accept):",
      items: [
        "Design Magic: Create visually appealing graphics for social media, websites, marketing materials, and more.",
        "Collaborate & Create: Work closely with our marketing and content teams to produce cohesive and engaging visual content.",
        "Innovate: Bring fresh ideas to the table and experiment with new design trends and techniques.",
        "Brand Consistency: Ensure all designs align with our brand identity and guidelines.",
        "Adapt & Revise: Make revisions based on feedback and strive for design perfection."
      ]
    },
    toolkit: {
      title: "Your Toolkit:",
      items: [
        "Proficiency in graphic design software (Adobe Creative Suite: Photoshop, Illustrator, InDesign).",
        "Basic knowledge of web design tools (e.g., Figma, Sketch) is a plus.",
        "Strong understanding of design principles, typography, color theory, and layout.",
        "A creative mindset with excellent attention to detail.",
        "Ability to work independently and collaboratively in a fast-paced environment."
      ]
    },
    bonusPoints: {
      title: "Bonus Points For:",
      items: [
        "A portfolio showcasing your design work.",
        "Experience with motion graphics and video editing (e.g., After Effects, Premiere Pro).",
        "Knowledge of UX/UI design principles.",
        "Strong communication skills and the ability to articulate design decisions.",
        "A passion for staying updated with the latest design trends and technologies."
      ]
    }
  },
  {
    title: "Content Writing Intern",
    description: "Are you a wordsmith with a passion for storytelling? Do you have a knack for turning ideas into compelling content? If so, we have the perfect opportunity for you! Join us as a Content Writing Intern and help us craft stories that captivate and inspire.",
    mission: {
      title: "Your Mission (Should You Choose to Accept):",
      items: [
        "Write with Passion: Create engaging and original content for blogs, social media, websites, newsletters, and marketing materials.",
        "Research & Develop: Conduct thorough research to ensure content is accurate, informative, and up-to-date.",
        "SEO Savvy: Optimize content for search engines to increase visibility and drive traffic.",
        "Collaborate: Work closely with our marketing and design teams to ensure a cohesive brand voice and look across all platforms.",
        "Edit & Refine: Proofread and edit content for clarity, grammar, and style."
      ]
    },
    toolkit: {
      title: "Your Toolkit:",
      items: [
        "Excellent writing, editing, and proofreading skills.",
        "Strong understanding of grammar, punctuation, and style.",
        "Basic knowledge of SEO principles.",
        "Ability to conduct thorough research and present information clearly.",
        "A creative mindset with the ability to think outside the box."
      ]
    },
    bonusPoints: {
      title: "Bonus Points For:",
      items: [
        "A portfolio or samples of your writing.",
        "Experience with content management systems (e.g., WordPress).",
        "Knowledge of digital marketing and social media platforms.",
        "Familiarity with keyword research tools (e.g., Google Keyword Planner).",
        "Strong communication skills and the ability to meet timelines."
      ]
    }
  },
  {
    title: "Video Editing Intern",
    description: "Do you have a passion for storytelling through visuals? Are you a wizard with video editing software? If so, we have an exciting opportunity for you! Join us as a Video Editor Intern and help us create compelling visual content that captivates and inspires.",
    mission: {
      title: "Your Mission (Should You Choose to Accept):",
      items: [
        "Edit with Flair: Edit and assemble raw footage into polished videos for various platforms including social media, websites, and marketing campaigns.",
        "Visual Storytelling: Collaborate with the creative team to develop engaging video content that aligns with our brand message.",
        "Innovate: Experiment with new video styles, techniques, and effects to keep our content fresh and engaging.",
        "Attention to Detail: Ensure high-quality output by fine-tuning audio, adding graphics, and ensuring color correction and continuity.",
        "Meet Deadlines: Manage multiple projects and deliver high-quality videos on time."
      ]
    },
    toolkit: {
      title: "Your Toolkit:",
      items: [
        "Proficiency in video editing software (Adobe Premiere Pro, Final Cut Pro, After Effects).",
        "Basic knowledge of motion graphics and animation.",
        "Strong understanding of video formats, codecs, and compression techniques.",
        "Creativity and a keen eye for detail.",
        "Ability to work independently and collaboratively in a fast-paced environment."
      ]
    },
    bonusPoints: {
      title: "Bonus Points For:",
      items: [
        "A portfolio or reel showcasing your video editing skills.",
        "Experience with sound design and audio editing.",
        "Knowledge of camera operation and video production.",
        "Strong storytelling skills and the ability to convey a message through video.",
        "A proactive and problem-solving mindset."
      ]
    }
  },
  {
    title: "Marketing Research Intern",
    description: "Are you a data detective with a passion for uncovering market trends and consumer behaviors? Do you love turning raw data into actionable insights? If so, we have an exciting opportunity for you! Join us as a Marketing Research Intern and help us decode the market to drive our strategy and growth.",
    mission: {
      title: "Your Mission (Should You Choose to Accept):",
      items: [
        "Market Exploration: Conduct comprehensive market research to gather data on industry trends, consumer preferences, and competitive analysis.",
        "Data Analysis: Analyze quantitative and qualitative data to identify patterns, insights, and actionable recommendations.",
        "Survey Savvy: Design and distribute surveys, collect responses, and analyze results to understand customer needs and behaviors.",
        "Report Crafting: Prepare detailed reports, summaries, and presentations to effectively communicate research findings to stakeholders.",
        "Collaborate: Work closely with marketing, sales, and product teams to provide insights that inform strategies and decision-making."
      ]
    },
    toolkit: {
      title: "Your Toolkit:",
      items: [
        "Strong analytical and critical thinking skills.",
        "Proficiency in data analysis tools (e.g., Excel, SPSS, Google Analytics).",
        "Excellent written and verbal communication skills.",
        "Ability to synthesize complex information into clear and concise reports.",
        "Attention to detail and a passion for accuracy."
      ]
    },
    bonusPoints: {
      title: "Bonus Points For:",
      items: [
        "Experience with survey tools (e.g., SurveyMonkey, Qualtrics).",
        "Familiarity with market research methodologies and best practices.",
        "Previous internship or project experience in marketing research or related fields.",
        "Strong organizational skills and the ability to manage multiple tasks.",
        "A proactive and curious mindset."
      ]
    }
  },
  {
    title: "Social Media Content Creator Intern",
    description: "Are you a storyteller at heart with a flair for creating captivating content? Do you live and breathe social media trends? If so, we have the perfect opportunity for you! Join us as a Social Media Content Creator Intern and help us tell our story to the world.",
    mission: {
      title: "Your Mission (Should You Choose to Accept):",
      items: [
        "Create Magic: Develop compelling and original content for our social media platforms, including posts, stories, videos, and graphics.",
        "Engage & Grow: Interact with our audience, respond to comments, and help grow our community.",
        "Trendsetter: Stay on top of the latest social media trends and implement creative strategies to keep our content fresh and engaging.",
        "Collaborate: Work closely with our marketing and design teams to ensure a cohesive brand voice and look across all platforms.",
        "Analyze & Adapt: Monitor performance metrics and adjust content strategies to optimize engagement and reach."
      ]
    },
    toolkit: {
      title: "Your Toolkit:",
      items: [
        "Proficiency in social media platforms (Instagram, Facebook, Twitter, LinkedIn, TikTok, etc.).",
        "Strong writing skills with a knack for crafting engaging and on-brand copy.",
        "Basic graphic design skills (Canva, Adobe Creative Suite, or similar tools).",
        "Experience with video editing tools (e.g., Adobe Premiere, Final Cut Pro) is a plus.",
        "A creative mindset with the ability to think outside the box."
      ]
    },
    bonusPoints: {
      title: "Bonus Points For:",
      items: [
        "A portfolio of social media content you've created (posts, graphics, videos).",
        "Knowledge of social media analytics and tools (e.g., Hootsuite, Buffer, Sprout Social).",
        "Ability to create and edit short-form videos (e.g., Reels, TikToks).",
        "Experience with influencer marketing and collaborations.",
        "A fun and outgoing personality with a passion for storytelling and an active presence on social media."
      ]
    }
  },
  {
    title: "Web Development Intern",
    description: "Are you a tech-savvy wizard who loves crafting digital magic? Do you dream in code and see the web as your canvas? If so, we have the perfect quest for you! Join us as a Web Developer Intern and embark on a journey where innovation meets creativity.",
    mission: {
      title: "Your Mission (Should You Choose to Accept):",
      items: [
        "Craft Code: Bring designs to life with clean, efficient, and scalable code.",
        "Innovate & Iterate: Collaborate with our design and content teams to create visually stunning and user-friendly web pages.",
        "Solve Puzzles: Debug and troubleshoot issues to ensure seamless performance across all devices.",
        "Stay Ahead: Keep up with the latest trends and technologies in web development and suggest new tools or practices to enhance our workflow."
      ]
    },
    toolkit: {
      title: "Your Toolkit:",
      items: [
        "Proficiency in HTML, CSS, and JavaScript.",
        "Familiarity with front-end frameworks (e.g., React, Angular, Vue.js).",
        "Basic understanding of back-end technologies (e.g., Node.js, PHP, Python).",
        "Experience with version control systems (e.g., Git).",
        "A keen eye for detail and a passion for user experience."
      ]
    },
    bonusPoints: {
      title: "Bonus Points For:",
      items: [
        "Knowledge of responsive and adaptive design principles.",
        "Experience with content management systems (e.g., WordPress, Drupal).",
        "Creativity in problem-solving and a knack for innovation.",
        "A portfolio of projects or a GitHub profile showcasing your work."
      ]
    }
  },
  {
    title: "HR Intern",
    description: "Are you passionate about people and ready to dive into the world of human resources? Do you have a knack for understanding and nurturing talent? If so, we have the perfect opportunity for you! Join us as an HR Intern and be part of our journey to build a thriving and dynamic workplace.",
    mission: {
      title: "Your Mission (Should You Choose to Accept):",
      items: [
        "Talent Acquisition: Assist in the recruitment process, including posting job openings, screening resumes, and coordinating interviews.",
        "Employee Engagement: Help plan and execute employee engagement activities and events to foster a positive workplace culture.",
        "Onboarding: Support the onboarding process for new hires, ensuring they have a smooth and welcoming start.",
        "HR Administration: Assist with HR documentation, maintaining employee records, and handling administrative tasks.",
        "Learning & Development: Contribute to the design and implementation of training and development programs for employees."
      ]
    },
    toolkit: {
      title: "Your Toolkit:",
      items: [
        "Strong interpersonal and communication skills.",
        "Basic understanding of HR principles and practices.",
        "Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint).",
        "Organizational skills with the ability to manage multiple tasks.",
        "A positive attitude and a passion for helping others."
      ]
    },
    bonusPoints: {
      title: "Bonus Points For:",
      items: [
        "Experience with HR software or applicant tracking systems.",
        "Prior internship or work experience in HR or related fields.",
        "Knowledge of labor laws and employment regulations.",
        "A proactive and problem-solving mindset.",
        "Creativity in planning and organizing employee activities."
      ]
    }
  }
];
