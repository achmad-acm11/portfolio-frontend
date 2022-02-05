import AboutMeDetail from "parts/AboutPage/AboutMeDetail";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import React, { Component } from "react";
// import APIProfile from "services/Profile";
// import APISocialMedia from "services/Social_media";
import AOS from "aos";
import profileJson from "json/profile.json";
import socialMediaJson from "json/social_media.json";

export default class AboutPage extends Component {
  state = {
    profile: {},
    social: {},
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Achmad Mauliddin - About";
    this.profileData();
    this.socialData();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }
  profileData = async () => {
    // const profile = await APIProfile.getProfile();
    // this.setState({
    //   profile: profile[0],
    // });
    this.setState({
      profile: profileJson,
    });
  };
  socialData = async () => {
    // const social = await APISocialMedia.getSocialMedia();
    // this.setState({
    //   ...this.state,
    //   social: social,
    // });
    this.setState({
      social: socialMediaJson,
    });
  };
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <AboutMeDetail profile={this.state.profile} />
        <Footer />
      </>
    );
  }
}
