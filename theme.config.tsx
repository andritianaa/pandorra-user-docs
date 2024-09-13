import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div
      className="logo"
      style={{
        display: "flex",
        gap: "0.5rem",
        padding: "6px",
        alignItems: "center",
      }}
    >
      <img
        src="/logo-base-256x256.png"
        style={{ width: "2rem", height: "2rem" }}
      />
      <p style={{ fontSize: "1.5rem" }}>Pandorra.ai - Help Center</p>
    </div>
  ),
  footer: {
    text: "Pandorra.ai help center (All right reserved 2024)",
  },
  editLink: {
    component: ({ children, className, filePath }) => (
      <a href={filePath} className={className}>
        {children}
      </a>
    ),
    text: "",
  },
  feedback: {
    content: "", // Peut être un texte ou un élément ReactNode
    labels: "", // Un label pour décrire le feedback
    useLink: (page) => `/feedback?source=${page}`, // Une fonction pour génér
  },
};

export default config;
