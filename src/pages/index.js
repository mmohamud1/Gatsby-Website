import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
