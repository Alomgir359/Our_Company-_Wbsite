// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="hero-section"
//       style={{
//         background: "linear-gradient(135deg, #0A192F 0%, #112240 50%, #1A365D 100%)",
//         padding: "6rem 0 8rem",
//         color: "#E6F1FF",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Subtle background pattern */}
//       <div style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundImage: "radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
//         pointerEvents: "none"
//       }} />

//       <div
//         className="container hero-grid"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: "6rem",
//           maxWidth: "1400px",
//           margin: "0 auto",
//           padding: "0 2rem",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >

//         {/* ================= LEFT CONTENT ================= */}
//         <div className="hero-content" style={{ flex: 1 }}>
          
//           {/* EYEBROW WITH ANIMATED UNDERLINE */}
//           <div style={{ marginBottom: "2rem" }}>
//             <span
//               style={{
//                 textTransform: "uppercase",
//                 letterSpacing: "3px",
//                 fontSize: "0.85rem",
//                 color: "#64FFDA",
//                 fontWeight: "600",
//                 paddingBottom: "0.5rem",
//                 position: "relative",
//                 display: "inline-block",
//               }}
//             >
//               Software • Mobile • Web • Cloud Engineering
//               <span style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "40px",
//                 height: "2px",
//                 background: "linear-gradient(90deg, #64FFDA, transparent)",
//                 borderRadius: "2px"
//               }} />
//             </span>
//           </div>

//           {/* MAIN HEADLINE */}
//           <h1
//             style={{
//               fontSize: "clamp(2.5rem, 5vw, 4rem)",
//               fontWeight: "800",
//               lineHeight: "1.1",
//               marginBottom: "1.8rem",
//               maxWidth: "700px",
//               background: "linear-gradient(135deg, #E6F1FF 0%, #64FFDA 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Transform Your Vision Into
//             <span style={{ 
//               display: "block", 
//               color: "#64FFDA",
//               background: "none",
//               WebkitTextFillColor: "#64FFDA"
//             }}>
//               High-Performance Digital Solutions
//             </span>
//           </h1>

//           {/* SUBTEXT */}
//           <p
//             style={{
//               fontSize: "1.125rem",
//               lineHeight: "1.7",
//               color: "#CCD6F6",
//               maxWidth: "680px",
//               marginBottom: "3rem",
//               opacity: 0.9,
//             }}
//           >
//             We design and develop world-class Mobile Apps, Web Platforms, and 
//             Enterprise Software using modern technologies like Flutter, React,
//             Node, Laravel, Django, AWS & DevOps pipelines.
//           </p>

//           {/* CTA BUTTONS */}
//           <div style={{ 
//             display: "flex", 
//             gap: "1.5rem", 
//             marginBottom: "3.5rem",
//             flexWrap: "wrap"
//           }}>
//             <a
//               href="#contact"
//               style={{
//                 padding: "1rem 2.5rem",
//                 background: "linear-gradient(135deg, #0EA5E9, #3B82F6)",
//                 borderRadius: "8px",
//                 color: "#fff",
//                 fontWeight: "600",
//                 fontSize: "1rem",
//                 textDecoration: "none",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "0.5rem",
//                 transition: "all 0.3s ease",
//                 boxShadow: "0 4px 15px rgba(14, 165, 233, 0.3)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow = "0 6px 20px rgba(14, 165, 233, 0.4)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 4px 15px rgba(14, 165, 233, 0.3)";
//               }}
//             >
//               <span>Get a Free Quote</span>
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </a>

//             <a
//               href="#portfolio"
//               style={{
//                 padding: "1rem 2.5rem",
//                 borderRadius: "8px",
//                 border: "1px solid #64FFDA",
//                 color: "#64FFDA",
//                 fontWeight: "600",
//                 fontSize: "1rem",
//                 textDecoration: "none",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "0.5rem",
//                 transition: "all 0.3s ease",
//                 background: "rgba(100, 255, 218, 0.05)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "rgba(100, 255, 218, 0.1)";
//                 e.currentTarget.style.transform = "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "rgba(100, 255, 218, 0.05)";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
//                 <line x1="3" y1="9" x2="21" y2="9"/>
//                 <line x1="9" y1="21" x2="9" y2="9"/>
//               </svg>
//               <span>View Portfolio</span>
//             </a>
//           </div>

//           {/* TRUST BADGES */}
//           <div style={{ marginTop: "3rem" }}>
//             <p style={{
//               fontSize: "0.875rem",
//               color: "#8892B0",
//               marginBottom: "1rem",
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//             }}>
//               Trusted by Industry Leaders
//             </p>
//             <div
//               style={{
//                 display: "flex",
//                 gap: "1rem",
//                 flexWrap: "wrap",
//               }}
//             >
//               {[
//                 "Clean & Scalable Architecture",
//                 "Dedicated Engineering Support",
//                 "24/7 System Monitoring",
//                 "Agile Development Process"
//               ].map((badge, index) => (
//                 <div
//                   key={badge}
//                   style={{
//                     padding: "0.6rem 1.2rem",
//                     borderRadius: "50px",
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(100, 255, 218, 0.1)",
//                     fontSize: "0.875rem",
//                     fontWeight: "500",
//                     color: "#CCD6F6",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.5rem",
//                   }}
//                 >
//                   <div style={{
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     background: "#64FFDA",
//                     opacity: 0.8
//                   }} />
//                   {badge}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT FEATURE CARD ================= */}
//         <div
//           style={{
//             flex: "0 1 500px",
//             padding: "2.5rem",
//             background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
//             borderRadius: "20px",
//             border: "1px solid rgba(100, 255, 218, 0.1)",
//             backdropFilter: "blur(10px)",
//             boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           {/* Card accent */}
//           <div style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "4px",
//             background: "linear-gradient(90deg, #0EA5E9, #64FFDA)",
//           }} />

//           <div style={{ marginBottom: "2rem" }}>
//             <h3
//               style={{
//                 fontSize: "1.5rem",
//                 fontWeight: "700",
//                 marginBottom: "0.8rem",
//                 color: "#E6F1FF",
//               }}
//             >
//               Engineering Excellence
//             </h3>
//             <p style={{ 
//               color: "#8892B0", 
//               lineHeight: "1.6",
//               fontSize: "0.95rem"
//             }}>
//               We build reliable, enterprise-grade applications using cutting-edge technologies and best practices.
//             </p>
//           </div>

//           {/* CAPABILITIES LIST */}
//           <ul style={{ 
//             marginBottom: "2.5rem",
//             paddingLeft: "0",
//             listStyle: "none"
//           }}>
//             {[
//               "Full-stack Mobile App Development (iOS & Android)",
//               "High-End Web Platform Development",
//               "Backend Engineering & Scalable API Architecture",
//               "Cloud Deployment & DevOps Automation"
//             ].map((item, index) => (
//               <li key={index} style={{
//                 padding: "1rem 0",
//                 borderBottom: "1px solid rgba(255,255,255,0.05)",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 gap: "0.75rem",
//                 color: "#CCD6F6",
//               }}>
//                 <div style={{
//                   flexShrink: 0,
//                   width: "20px",
//                   height: "20px",
//                   background: "rgba(100, 255, 218, 0.1)",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginTop: "2px"
//                 }}>
//                   <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
//                     <path d="M10 3L4.5 8.5L2 6" stroke="#64FFDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* METRICS */}
//           <div style={{ 
//             display: "flex", 
//             gap: "3rem",
//             paddingTop: "1.5rem",
//             borderTop: "1px solid rgba(255,255,255,0.05)"
//           }}>
//             <div>
//               <h4 style={{ 
//                 fontSize: "2.5rem", 
//                 color: "#64FFDA", 
//                 fontWeight: "800",
//                 marginBottom: "0.25rem",
//                 lineHeight: "1"
//               }}>
//                 50+
//               </h4>
//               <p style={{ 
//                 color: "#8892B0", 
//                 fontSize: "0.875rem",
//                 fontWeight: "500"
//               }}>Successful Projects</p>
//             </div>
//             <div>
//               <h4 style={{ 
//                 fontSize: "2.5rem", 
//                 color: "#64FFDA", 
//                 fontWeight: "800",
//                 marginBottom: "0.25rem",
//                 lineHeight: "1"
//               }}>
//                 100%
//               </h4>
//               <p style={{ 
//                 color: "#8892B0", 
//                 fontSize: "0.875rem",
//                 fontWeight: "500"
//               }}>Client Satisfaction</p>
//             </div>
//             <div>
//               <h4 style={{ 
//                 fontSize: "2.5rem", 
//                 color: "#64FFDA", 
//                 fontWeight: "800",
//                 marginBottom: "0.25rem",
//                 lineHeight: "1"
//               }}>
//                 24/7
//               </h4>
//               <p style={{ 
//                 color: "#8892B0", 
//                 fontSize: "0.875rem",
//                 fontWeight: "500"
//               }}>Support</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1A365D] py-24 text-[#E6F1FF]"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />

      <div className="container relative z-10 mx-auto flex max-w-[1400px] items-center justify-between gap-24 px-8">
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex-1">
          {/* EYEBROW WITH ANIMATED UNDERLINE */}
          <div className="mb-8">
            <span className="relative inline-block pb-2 text-xs font-semibold uppercase tracking-[3px] text-[#64FFDA]">
              Software • Mobile • Web • Cloud Engineering
              <span className="absolute bottom-0 left-0 h-0.5 w-10 rounded bg-gradient-to-r from-[#64FFDA] to-transparent" />
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="mb-7 max-w-[700px] bg-gradient-to-br from-[#E6F1FF] to-[#64FFDA] bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl lg:text-6xl">
            Transform Your Vision Into
            <span className="block text-[#64FFDA]">
              High-Performance Digital Solutions
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mb-12 max-w-[680px] text-lg leading-relaxed text-[#CCD6F6] opacity-90">
            We design and develop world-class Mobile Apps, Web Platforms, and 
            Enterprise Software using modern technologies like Flutter, React,
            Node, Laravel, Django, AWS & DevOps pipelines.
          </p>

          {/* CTA BUTTONS */}
          <div className="mb-14 flex flex-wrap gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#3B82F6] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-[rgba(14,165,233,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(14,165,233,0.4)]"
            >
              <span>Get a Free Quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-[#64FFDA] bg-[rgba(100,255,218,0.05)] px-10 py-4 text-base font-semibold text-[#64FFDA] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(100,255,218,0.1)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
              <span>View Portfolio</span>
            </a>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-12">
            <p className="mb-4 text-xs uppercase tracking-[1px] text-[#8892B0]">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Clean & Scalable Architecture",
                "Dedicated Engineering Support",
                "24/7 System Monitoring",
                "Agile Development Process"
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 rounded-full border border-[rgba(100,255,218,0.1)] bg-[rgba(255,255,255,0.03)] px-5 py-2.5 text-sm font-medium text-[#CCD6F6]"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#64FFDA] opacity-80" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT FEATURE CARD ================= */}
        <div className="relative flex-1 max-w-[500px] overflow-hidden rounded-2xl border border-[rgba(100,255,218,0.1)] bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] p-10 shadow-2xl backdrop-blur-md">
          {/* Card accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#64FFDA]" />

          <div className="mb-8">
            <h3 className="mb-3 text-2xl font-bold text-[#E6F1FF]">
              Engineering Excellence
            </h3>
            <p className="text-[#8892B0] text-[0.95rem] leading-relaxed">
              We build reliable, enterprise-grade applications using cutting-edge technologies and best practices.
            </p>
          </div>

          {/* CAPABILITIES LIST */}
          <ul className="mb-10 list-none pl-0">
            {[
              "Full-stack Mobile App Development (iOS & Android)",
              "High-End Web Platform Development",
              "Backend Engineering & Scalable API Architecture",
              "Cloud Deployment & DevOps Automation"
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 border-b border-[rgba(255,255,255,0.05)] py-4 text-[#CCD6F6]"
              >
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(100,255,218,0.1)]">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#64FFDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* METRICS */}
          <div className="flex gap-12 border-t border-[rgba(255,255,255,0.05)] pt-6">
            <div>
              <h4 className="mb-1 text-4xl font-extrabold leading-none text-[#64FFDA]">
                50+
              </h4>
              <p className="text-sm font-medium text-[#8892B0]">Successful Projects</p>
            </div>
            <div>
              <h4 className="mb-1 text-4xl font-extrabold leading-none text-[#64FFDA]">
                100%
              </h4>
              <p className="text-sm font-medium text-[#8892B0]">Client Satisfaction</p>
            </div>
            <div>
              <h4 className="mb-1 text-4xl font-extrabold leading-none text-[#64FFDA]">
                24/7
              </h4>
              <p className="text-sm font-medium text-[#8892B0]">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;