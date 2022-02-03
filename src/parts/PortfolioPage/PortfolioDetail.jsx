import React from "react";

export default function PortfolioDetail(props) {
  const { study_case, project } = props;
  return (
    <section className="portfolio-list mt-5" id="portfolio_list">
      <div className="container">
        <h5 className="text-uppercase mb-5 fw-bold">portfolio</h5>

        <div className="row gap-3 gap-md-5">
          <div className="col-12 mb-3">
            <h6 className="fw-bold header-portfolio-list mb-4">Project</h6>
            <div className="row justify-content-center">
              {project.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="col-md-3 col-12"
                    onClick={() => props.history.push(`/project/${item.id}`)}
                  >
                    <div className="project-wrapper to-project-detail">
                      <div className="project-image-wrapper text-center">
                        <img src={item.main_image} alt="" />
                      </div>
                      <div className="project-text text-center">
                        {item.name}
                      </div>
                      <div className="project-description text-center">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 mb-3">
            <h6 className="fw-bold header-portfolio-list mb-4">Study Case</h6>
            <div className="row justify-content-center to-project-detail">
              {study_case.map((item, index) => {
                return (
                  <div key={item.id} className="col-md-3 col-12">
                    <div className="project-wrapper">
                      <div className="project-image-wrapper text-center">
                        <img
                          src={item.main_image}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="project-text text-center">
                        {item.name}
                      </div>
                      <div className="project-description text-center">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
