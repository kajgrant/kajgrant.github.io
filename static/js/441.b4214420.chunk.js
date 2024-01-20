"use strict";(self.webpackChunkkajgrant_github_io=self.webpackChunkkajgrant_github_io||[]).push([[441],{441:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});t(791);var n=t(557),a=t(184);const s=e=>(0,a.jsxs)("section",{className:"content",children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)("section",{className:"sub-content",children:e.children})]}),r=()=>(0,a.jsx)(s,{title:"About",children:(0,a.jsxs)("p",{id:"about",children:["Hi, I'm ",(0,a.jsx)("strong",{id:"kaj-text",children:"Kaj"}),"."," ",(0,a.jsx)("i",{id:"hidden-kaj",children:" - pronounced like Kai (and rhymes with pie \ud83e\udd67) "}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"I'm a recent Computer Engineering graduate based in Vancouver, BC and Toronto, ON. ",(0,a.jsx)("br",{}),"I'm passionate about the ",(0,a.jsx)("strong",{children:"entire"})," stack... from computer architecture, to reliable back-end infrastructure, and all the way up to brilliant user design.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Currently, I'm looking for a full-time position in a Software Engineering field. I have experience working with large-scale media pipelines, building scalable systems and maintaining core infrastructure.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Send me an"," ",(0,a.jsx)("strong",{className:"underline",children:(0,a.jsx)("a",{href:"mailto:kajgrant@gmail.com",children:"email"})})," ","or explore some of the things I've done below..."]})}),o=e=>{let{data:{title:i,role:t,duration:n,image:s,invert:r,link:o,description:l}}=e;return(0,a.jsxs)("div",{className:"cell",children:[(0,a.jsxs)("section",{className:"cell-title",children:[(0,a.jsx)("a",{href:o,children:s?(0,a.jsx)("img",{src:s,className:"cell-icon"+(r?" dark-invert":""),alt:i}):null}),(0,a.jsxs)("div",{className:"cell-header",children:[(0,a.jsx)("a",{href:o,children:(0,a.jsx)("h2",{className:"underline",children:i})}),t&&n?(0,a.jsxs)("h3",{children:[t,", ",n]}):null]})]}),l?(0,a.jsx)("ul",{children:l.map(((e,i)=>(i++,(0,a.jsx)("li",{children:e},i))))}):null]})},l=[{title:"Chairable, by Roll Technology",image:"/images/content/rolltech.svg",role:"SFU Engineering Capstone",duration:"May 2023 - Dec 2023",link:"https://github.com/kajgrant/rolltech",description:["Designed a modular attachment for office chairs using a spherical wheel for enhanced powered movement","Led a team of 5 students to produce a minimum viable product and publicly demonstrate system capabilities","Built an enclosed electrical circuit with 14+ motor control, communication, logic, and safety elements","Devised a mechanical system with machined steel and 3D printed components to control a 2200W motor"],skills:["C++","SolidWorks","KiCad","Soldering","Electrical Design","Photoshop"]},{title:"FPGA Accelerated Gaussian Elimination Algorithm",image:"/images/content/xilinx.svg",role:"ENSC 453/894 Final Project",duration:"Sept 2023 - Dec 2023",link:"https://github.com/kajgrant/gaussian-acceleration",description:["Minimized execution time via buffering, tiling, memory, compute, and ping-pong data transfer enhancements","Achieved an 8.4 speedup factor using Intel Intrinsics and OpenMP optimizations on the CPU-based platform","Doubled performance of CUDA algorithm based on analysis of underlying GPU architecture and cache layout","Performed comparison and analysis of naive, CPU (Intel i9-10900X), FPGA (AMD Alevo U50), and GPU (Nvidia A4000) implementations"],skills:["C","Cuda","Intel Intrinsics","OpenMp","Xilinx Vitis"]},{title:"Hardware Accelerated Guitar Tuner",image:"/images/content/frequency.svg",invert:!0,role:"ENSC 452/894 Final Project",duration:"Jan 2023 - May 2023",link:"https://github.com/kajgrant/guitar-tuner",description:["Engineered a custom ARM based architecture using the Xilinx Zedboard FPGA for a guitar tuner program","Interfaced 9+ Audio Codecs, FFT blocks, GPIO blocks, and VGA controllers with C-based software","Created an optimized hardware block in VHDL to perform the Harmonic Product Spectrum calculation","Reduced latency to less than 1s between live auto stream input and corresponding VGA display output"],skills:["C","VHDL","Vivado","Xilinx Vitis","Frequency Theory"]},{title:"RISC-V Execution Unit",image:"/images/content/riscv.svg",role:"ENSC 350 Final Project",duration:"Jan 2022 - May 2022",link:"https://github.com/kajgrant/ExU",description:["Designed a VHDL based execution unit capable of executing the full RISC-V instruction set","Implemented barrel shifters, a 64-bit adder, and a logic unit to correctly respond to input signals","Synthesized on the Cyclone IV FPGA and performed timing analysis using ModelSim waveforms"],skills:["RISC-V","VHDL","Quartus","Modelsim"]},{title:"TransitTracker",image:"/images/content/translinkbuses.svg",role:"Personal interest project",duration:"Feb 2023 - Present",link:"https://github.com/kajgrant/transittracker",description:["Personal interest project to explore interactions with the Translink API platform","Uses either a command line interface or graphical interface intended for a small raspberry pi screen","Continuously displays current bus schedules and the time remaining till arrival of chosen bus routes","Includes animated features, a user interface designed for quick comprehension, and robust error handling"],skills:["Python","APIs"]},{title:"RedditSalesTracker",image:"/images/content/reddit.svg",role:"Personal interest project",duration:"Jan 2023 - Present",link:"https://github.com/kajgrant/transittracker",description:["Personal interest project to explore interactions with the Reddit API platform","Retrieves post statistics and data from over 1000 distinct sales-specific subreddits","Features optional arguments to control notification sounds, watch list, and frequency of query","Achieved a 67% reduction in time spent viewing irrelevant data, enhancing the capacity to capitalize on time-sensitive sales opportunities."],skills:["Python","APIs"]}],c=()=>(0,a.jsx)(s,{title:"Projects",children:l.map((e=>(0,a.jsx)(o,{data:e},e.title)))}),d=[{title:"SAP Canada Inc.",role:"Agile Developer Co-Op",duration:"May 2022 - Dec 2022",image:"/images/content/sap.svg",link:"https://www.sap.com/canada/index.html",description:["Coordinated with senior engineers to implement a layered cache resiliency system involving several core microservices to ensure 99%+ uptime, developed accompanying documentation and testing strategies","Analyzed artifact build pipeline to expose regression-related variations between local and cloud deployments","Prioritized and managed 80+ concurrent Jira tickets involving new features or fixes to existing systems","Refactored core system dependencies and designed asynchronous logic to adhere to architectural standards","Created and maintained several automated Jest and Jasmine testing suites to achieve 98%+ code coverage","Verified proposed changes with remote Jenkins, local Node.js, and cloud-based Kubernetes environments","Conducted code reviews and knowledge transfer sessions to improve existing practices and code quality"],skills:["JavaScript","Python","SQL","Jira","Jest","Jasmine","Jenkins","Node.js","Kubernetes","Webpack","Maven","Grafana","Prometheus","Git","Gerrit"]},{title:"Sony Pictures Imageworks",role:"Systems Engineer Co-Op",duration:"Jan 2020 - Sept 2020",image:"/images/content/sony.svg",invert:!0,link:"https://www.imageworks.com/",description:["Resolved 200+ tickets relating to performance or configuration issues on production level Linux machines","Designed a project management system involving an SQL database, user-based permission sharing, cached data retrieval, and integration with the google app suite to improve department productivity and efficiency","Reduced Dialogflow chatbot prompt failures by 87% and implemented an automated analytics dashboard","Created an application using less than 1% of system resources to safely reboot machines with large uptimes","Developed a Django app using the Jamf API to efficiently manage Apple devices and display usage statistics","Received a film credit for the Animated Film: The Sea Beast"],skills:["JavaScript","Python","SQL","C++","HTML","CSS","Google Apps Script","Google Cloud Platform (GCP)","Jamf","Django","Dialogflow","Linux"]}],m=()=>(0,a.jsx)(s,{title:"Experience",children:d.map((e=>(0,a.jsx)(o,{data:e},e.title)))}),u=()=>(0,a.jsxs)(n.Z,{description:"Hi I'm Kaj. I'm a recent Computer Engineering graduate based in Vancouver Canada. Let's talk!",children:[(0,a.jsx)(r,{}),(0,a.jsx)(c,{}),(0,a.jsx)(m,{})]})}}]);
//# sourceMappingURL=441.b4214420.chunk.js.map