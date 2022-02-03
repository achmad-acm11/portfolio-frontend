import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import PortfolioDetailDesc from "parts/PortfolioPage/PortfolioDetailDesc";
import React, { Component } from "react";
import APIProfile from "services/Profile";
import APIProject from "services/Project";
import APISocialMedia from "services/Social_media";

export default class ProjectDetailPage extends Component {
  state = {
    profile: {},
    social: {},
    detail: {},
  };
  componentDidMount() {
    document.title = "Achmad Mauliddin - Portfolio";
    this.profileData();
    this.socialData();
    this.detailData();
  }
  profileData = async () => {
    const profile = await APIProfile.getProfile();
    this.setState({
      ...this.state,
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
  detailData = async () => {
    if (this.props.match.params.id === undefined) {
    } else {
      (async () => {
        try {
          const project = await APIProject.getDetailProject(
            this.props.match.params.id
          );
          this.setState({
            ...this.state,
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
