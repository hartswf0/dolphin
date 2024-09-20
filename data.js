// data.js

const data = {
    projects: [
      {
        id: "into-the-blue",
        title: "Into the Blue",
        thumbnail: "assets/images/projects/bashir.png",
        heroImage: "assets/images/projects/bashir.png",
        video: "assets/videos/48.mp4",
        description: "An exploration of the ocean's depths...",
        features: [
          "Marine life exploration",
          "Environmental awareness",
          "Underwater cinematography"
        ]
      },
      {
        id: "cecile",
        title: "Cecile",
        thumbnail: "assets/images/projects/phoenix.jpg",
        heroImage: "assets/images/projects/phoenix.jpg",
        video: "assets/videos/tortoise.mp4",
        description: "A heartfelt story about resilience and hope...",
        features: [
          "Emotional storytelling",
          "Character-driven narrative",
          "Stunning visuals"
        ]
      },
      // Add other projects here
    ],
    team: [
      {
        id: "jane-doe",
        name: "Jane Doe",
        role: "Lead Developer",
        image: "assets/images/team/dolphin.png",
        bio: "Jane is an experienced developer specializing in front-end technologies."
      },
      {
        id: "john-smith",
        name: "John Smith",
        role: "Creative Director",
        image: "assets/images/team/hawk.png",
        bio: "John leads the creative vision of BLUE BELT, with a passion for storytelling."
      },
      // Add other team members here
    ],
    // Add other data sections if needed
  };
  
  // Export the data object for use in scripts.js
  export default data;
  