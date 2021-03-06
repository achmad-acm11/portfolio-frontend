import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import PortfolioDetailDesc from "parts/PortfolioPage/PortfolioDetailDesc";
import React, { Component } from "react";
// import APIProfile from "services/Profile";
import APIProject from "services/Project";
// import APISocialMedia from "services/Social_media";
import AOS from "aos";
import APIStudyCase from "services/Study_case";
import profileJson from "json/profile.json";
import socialMediaJson from "json/social_media.json";

export default class ProjectDetailPage extends Component {
  state = {
    profile: {},
    social: {},
    detail: {},
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Achmad Mauliddin - Portfolio";
    this.profileData();
    this.socialData();
    this.detailData();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }
  profileData = async () => {
    // const profile = await APIProfile.getProfile();
    // this.setState({
    //   ...this.state,
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
  detailData = () => {
    if (this.props.match.params.id === undefined) {
    } else {
      (() => {
        try {
          const project =
            this.props.match.params.type === "project"
              ? APIProject.getDetailProject(this.props.match.params.id)
              : APIStudyCase.getStudyCaseDetail(
                  this.props.match.params.id
                );
            
          this.setState({
            detail: project,
          });
        } catch (error) {
          this.props.history.push("/");
          console.log(error);
        }
      })();
    }
  };
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <PortfolioDetailDesc detail={this.state.detail} />
        <Footer />
      </>
    );
  }
}
