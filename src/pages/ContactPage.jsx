import React, { Component } from "react";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import AOS from "aos";
import profileJson from "json/profile.json";
import socialMediaJson from "json/social_media.json";

export default class ContactPage extends Component {
  state = {
    profile: profileJson,
    social: socialMediaJson,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Achmad Mauliddin - Contact";
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <Footer />
      </>
    );
  }
}
