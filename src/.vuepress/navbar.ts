import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/code/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "随笔", link: "", icon: "Notes", activeMatch: "^/posts/$" },
      {
        text: "生活",
        children: [
          "life/"    
        ],
      },
    ],
  },   
          
      
      
 
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
