import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import SkillsDetail from "parts/SkillsPage/SkillsDetail";
import React, { Component } from "react";
import APIProfile from "services/Profile";
import APISkills from "services/Skills";
import APISocialMedia from "services/Social_media";
import AOS from 'aos';

export default class SkillsPage extends Component {
  state = {
    profile: {},
    social: {},
    skills: {},
  };
  componentDidMount() {
    window.scrollTo(0,0);
    document.title = "Achmad Mauliddin - Skills";
    this.profileData();
    this.socialData();
    this.skillsData();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    // const skills = () => {
    // fetch("http://localhost:3004/Skills")
    //   .then((response) => response.json())
    //   .then((data) => {this.setState({profile : data})},console.log(this.state.profile));
    // }
    // console.log(this.profileData)
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

  skillsData = () => {
    APISkills.getSkills().then((res) =>
      this.setState({
        ...this.state,
        skills: res,
      })
    );
  };
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <SkillsDetail skills={this.state.skills} />
        <Footer />
      </>
    );
  }
}
