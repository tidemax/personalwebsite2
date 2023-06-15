type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "galangadhi47@gmail.com",
  title: "Hey! I'm Galang Ads—👋",
  description:
    "Digital Artist and Visual Designer based in Indonesia. Currently a *Creative Strategies* working within amazing team at design agency *RRGraph Design* and 3D Mentor Voxel Designer at *PixelNinja.com*. Day-to-day, I'm taking the product from idea to hi-fidelity and contributing on Product Roadmap, Design System, Branding, etc. ",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/galangadhi__",
    },
    {
      label: "LinkedIn",
      link: "http://www.linkedin.com/in/galangadhisaputra",
    },
    {
      label: "Behance",
      link: "https://www.behance.net/galangadhi",
    },
    {
      label: "Dribbble",
      link: "https://dribbble.com/galangadhi",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/galangadhi_",
    },
     ],
};

export default presentation;
