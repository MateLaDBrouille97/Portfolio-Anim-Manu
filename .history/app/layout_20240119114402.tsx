"use client"

import React from "react";
import "../styles/sessions.css";
import "../styles/about.css";
import "../styles/service.css";
import "../styles/workItem.css";
// import "../styles/contact2.css";
import "../styles/main.scss";
import "../styles/button2.scss";
import "../styles/header2.scss";
import "../styles/navItems.scss";
import "../styles/citation.scss";
import "../styles/citation2.scss";
import "../styles/citation3.scss";
import "../styles/about-description.scss";
import "../styles/link2.scss";
import "../styles/curve.scss";
import "../styles/footer.scss";
import "../styles/header.scss";
import "../styles/nav.scss";
import "../styles/contact.scss";
import "../styles/description.scss";
import "../styles/landing.scss";
import "../styles/preloader.scss";
import "../styles/projects.css";
import "../styles/project.css";
import "../styles/slidingImages.scss";
import "../styles/page.module.scss";
import "../styles/sidebar.css";
import "../styles/modal2.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
// import Menu from "@/Components/Menu/Menu";
import Progressbar from "@/components/Progressbar";
import { GlobalProvider } from "@/utils/globalContext";
import Header2 from "../components/Header2"
import UserContextProvider from "../contexts/UserContext";
import SkillsContextProvider from "../contexts/SkillContext";
import QualiContextProvider from "../contexts/QualificationContext";
import { Amplify } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
import ServiceContextProvider from "../contexts/ServiceContext";
import PortfolioContextProvider from "../contexts/PortfolioContext";
import BlogContextProvider from "../contexts/BlogContext";
import ActiveSectionContextProvider from "@/contexts/active-section-context";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Otomata",
//   description: "The portfolio website of Manuel",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <SkillsContextProvider>
            <PortfolioContextProvider>
              <QualiContextProvider>
              <BlogContextProvider>
                <ServiceContextProvider>
                <GlobalProvider>
                <ActiveSectionContextProvider>
                  <Progressbar />
                   <Header2/>
                  {/* <Menu /> */}
                  {children}
                  </ActiveSectionContextProvider>
                </GlobalProvider>
                </ServiceContextProvider>
              </BlogContextProvider>
              </QualiContextProvider>
            </PortfolioContextProvider>
          </SkillsContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
