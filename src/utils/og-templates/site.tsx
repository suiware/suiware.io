import { SITE } from "@/config"
import satori from "satori"
// import { html } from "satori-html";
import loadGoogleFonts, { type FontOptions } from "../loadGoogleFont"

// const markup = html`<div
//       style={{
//         background: "#000123",
//         color: "#EAEDF3",
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: "-1px",
//           right: "-1px",
//           border: "4px solid #617bff",
//           background: "#000234",
//           opacity: "0.9",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2.5rem",
//           width: "88%",
//           height: "80%",
//         }}
//       />

//       <div
//         style={{
//           border: "4px solid #617bff",
//           background: "#000123",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2rem",
//           width: "88%",
//           height: "80%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             margin: "20px",
//             width: "90%",
//             height: "90%",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "90%",
//               maxHeight: "90%",
//               overflow: "hidden",
//               textAlign: "center",
//             }}
//           >
//             <p style={{ fontSize: 72, fontWeight: "bold" }}>{SITE.title}</p>
//             <p style={{ fontSize: 28 }}>{SITE.desc}</p>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               width: "100%",
//               marginBottom: "8px",
//               fontSize: 28,
//             }}
//           >
//             <span style={{ overflow: "hidden", fontWeight: "bold" }}>
//               {new URL(SITE.website).hostname}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>`;

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#000123",
          color: "#EAEDF3",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-1px",
                right: "-1px",
                border: "4px solid #617bff",
                background: "#000234",
                opacity: "0.9",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2.5rem",
                width: "88%",
                height: "80%",
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                border: "4px solid #617bff",
                background: "#000123",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
                width: "88%",
                height: "80%",
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "20px",
                    width: "90%",
                    height: "90%",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "90%",
                          maxHeight: "90%",
                          overflow: "hidden",
                          textAlign: "center",
                        },
                        children: [
                          {
                            type: "p",
                            props: {
                              style: {
                                fontSize: 72,
                                fontWeight: "bold",
                              },
                              children: SITE.title,
                            },
                          },
                          {
                            type: "p",
                            props: {
                              style: {
                                fontSize: 28,
                              },
                              children: SITE.desc,
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "flex-end",
                          width: "100%",
                          marginBottom: "8px",
                          fontSize: 28,
                        },
                        children: [
                          {
                            type: "span",
                            props: {
                              children: new URL(SITE.website).hostname,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: (await loadGoogleFonts(
        SITE.title + SITE.desc + SITE.website
      )) as FontOptions[],
    }
  )
}
