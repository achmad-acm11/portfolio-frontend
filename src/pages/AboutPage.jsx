import AboutMeDetail from "parts/AboutPage/AboutMeDetail";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import React, { Component } from "react";
import APIProfile from "services/Profile";
import APISocialMedia from "services/Social_media";

export default class AboutPage extends Component {
  state = {
    profile: {},
    social: {},
  };
  componentDidMount() {
    document.title = "Achmad Mauliddin - About";
    this.profileData();
    this.socialData();
  }
  profileData = async () => {
    const profile = await APIProfile.getProfile();
    this.setState({
      profile: profile[0],
    });
  };
  socialData = async () => {
    const social = await APISocialMedia.getSocialMedia();
    this.setState({
      ...this.state,
      social: social,
    });
  };
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <AboutMeDetail profile={this.state.profile}/>
        <Footer />
      </>
    );
  }
}
