import React from "react";
import completeIcon from "assets/img/icon/Complete Icon.svg";
import clockIcon from "assets/img/icon/coolicon.svg";
import { Link } from "react-router-dom";
// import APIQualification from "services/Qualification";
// import APIQualification from "services/Qualification";

export default function Skills(props) {
  // const [Qualification, setQualification] = useState([]);

  // const qualificationData = async () => {
  //   return await APIQualification.getQualification();
  // };
  // const handleState = (Qualification) => {
  //   useEffect(() => {
  //     if (Qualification !== qualificationData()) {
  //       qualificationData().then((res) => setQualification(res));
  //     }
  //     // qualificationData();
  //     console.log(Qualification);
  //   });
  // };
  // handleState(Qualification);

  return (
    <section className="skills mt-5" id="skills">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 mb-3 qualification-side" data-aos="fade-down"  data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
            <div className="card">
              <div className="card-header">
                <h5 className="text-uppercase m-0">Qualification</h5>
                <Link to="/qualification" className="m-0">
                  View All
                </Link>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      {props.qualification.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <th>0{index + 1}</th>
                            <th>
                              {item.type === "school" && (
                                <div className="icon-circle rounded-circle text-center d-inline-block">
                                  <i className="uil uil-graduation-cap"></i>
                                </div>
                              )}
                              {item.type === "work" && (
                                <div className="icon-circle rounded-circle text-center d-inline-block">
                                  <i className="uil uil-briefcase-alt"></i>
                                </div>
                              )}
                              <span style={{ fontSize: "14px" }}>
                                {" "}
                                {item.name}
                              </span>
                            </th>
                            <td className="text-center">
                              <div className="q-occupation">
                                {item.occupation}
                              </div>
                              <div className="q-long-time">
                                {item.long_time}
                              </div>
                            </td>
                            <td className="text-center">
                              <img
                                src={
                                  item.status === "complete"
                                    ? completeIcon
                                    : clockIcon
                                }
                                alt=""
                              />
                            </td>
                            <td className="text-center">
                              <Link
                                to="/qualification"
                                className="text-decoration-none q-detail"
                              >
                                Detail
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 skills-side" data-aos="fade-down"  data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
            <div className="card">
              <div className="card-header">
                <h5 className="text-uppercase m-0">Skills</h5>
                <Link to="/skills" className="m-0">
                  View All
                </Link>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-evenly mb-3">
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "50%", padding: "5px 0" }}
                  >
                    <img
                      src="http://localhost:3000/img/Logo_PHP.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "30%" }}
                  >
                    <img
                      src="http://localhost:3000/img/Logo_html.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mb-3">
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "30%" }}
                  >
                    <img
                      src="http://localhost:3000/img/Logo_nodejs.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "50%" }}
                  >
                    <img
                      src="http://localhost:3000/img/Logo_go.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mb-3">
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "50%" }}
                  >
                    <img
                      src="http://localhost:3000/img/Logo_javascript.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "30%" }}
                  >
                    <img src="http://localhost:3000/img/Logo_css.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
