import React from "react";
import logoIPB from "assets/img/Logo_IPB.png";
import logoBKN from "assets/img/logo_BKN.png";
import logoRti from "assets/img/Logo_rti.png";
import logoPHP from "assets/img/Logo_PHP.png";
import logoHtml from "assets/img/Logo_html.png";
import logoJava from "assets/img/Logo_Java.png";
import logoJavascript from "assets/img/Logo_javascript.png";
import logoCss from "assets/img/Logo_css.png";

export default function Qualification() {
  return (
    <section className="qualification-detail mt-5" id="qualification_detail">
      <div className="container">
        <h5 className="text-uppercase mb-4 fw-bold">qualification</h5>

        <div className="row gap-3 gap-md-0">
          <div className="col-12 col-md-2 mb-3">
            <img src={logoIPB} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 mb-3">
            <div className="text-title">
              <h6 className="fw-bold header-qualification-detail">
                IPB UNIVERSITY
              </h6>
              <div className="body-qualification-detail">
                <p>
                  Jl. Kumbang No.14, RT.02/RW.06, Babakan, Kecamatan Bogor
                  Tengah, Kota Bogor, Jawa Barat 16128
                </p>
              </div>
            </div>
            <div className="text-description">
              <h6 className="fw-bold header-qualification-detail">
                Short Description
              </h6>
              <div className="body-qualification-detail">
                <p>
                  IPB University, or the Institut Pertanian Bogor, was founded
                  in 1963, as a state-run agricultural university with the aim
                  of strengthening food security, promoting bioenergy,
                  protecting the regional environment and alleviating poverty.
                  It is the only state university with a focus on tropical
                  agriculture and life sciences – and is world-renowned in this
                  field.
                  <br /> <br />
                  Based in the city of Bogor, Indonesia, it is approximately
                  60km from the capital city, Jakarta. IPB University comprises
                  five campuses: Baranangsiang, Dramaga, Gunung Gede, Cilibende
                  and Taman Kencana. There is a research centre, university
                  farm, animal hospital, student dormitory and library.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="occupation-wrapper">
              <div className="header-qualification-detail">Occupation</div>
              <div className="body-qualification-detail">
                <p>
                  Student
                  <br />
                  D3 - Informatics Management
                </p>
              </div>
            </div>
            <div className="longtime-wrapper">
              <div className="header-qualification-detail">Long Time</div>
              <div className="body-qualification-detail">
                <p>2017 - 2020</p>
              </div>
            </div>
            <div className="lern-wrapper">
              <div className="header-qualification-detail">What I Lern</div>
              <div className="body-qualification-detail">
                <div className="d-flex flex-nowrap gap-1">
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoHtml} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoCss} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoJavascript} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoPHP} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="row gap-3 mt-5 gap-md-0">
          <div className="col-12 col-md-2 mb-3">
            <img src={logoBKN} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 mb-3">
            <div className="text-title">
              <h6 className="fw-bold header-qualification-detail">
                National Civil Service Agency (Intern)
              </h6>
              <div className="body-qualification-detail">
                <p>
                  Jl. Mayor Jendral Sutoyo No.12, RT.4/RW.14, Cililitan, Kec.
                  Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                  13640
                </p>
              </div>
            </div>
            <div className="text-description">
              <h6 className="fw-bold header-qualification-detail">
                Short Description
              </h6>
              <div className="body-qualification-detail">
                <p>
                  Badan Kepegawaian Negara, disingkat BKN, adalah lembaga
                  pemerintah nonkementerian Indonesia yang bertugas melaksanakan
                  tugas pemerintahan di bidang manajemen kepegawaian negara.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="occupation-wrapper">
              <div className="header-qualification-detail">Occupation</div>
              <div className="body-qualification-detail">
                <p>
                  Programmer
                  <br />
                  Web Developer
                </p>
              </div>
            </div>
            <div className="longtime-wrapper">
              <div className="header-qualification-detail">Long Time</div>
              <div className="body-qualification-detail">
                <p>January 2020 - March 2020</p>
              </div>
            </div>
            <div className="lern-wrapper">
              <div className="header-qualification-detail">What I Lern</div>
              <div className="body-qualification-detail">
                <div className="d-flex flex-nowrap gap-1">
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoHtml} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoCss} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoJavascript} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoJava} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row gap-3 mt-5 gap-md-0">
          <div className="col-12 col-md-2 mb-3">
            <img src={logoRti} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 mb-3">
            <div className="text-title">
              <h6 className="fw-bold header-qualification-detail">
                PT. Rynest Technology Indomedia
              </h6>
              <div className="body-qualification-detail">
                <p>
                  Jl. Tole Iskandar No.11, Sukmajaya, Kec. Sukmajaya, Kota
                  Depok, Jawa Barat 16412
                </p>
              </div>
            </div>
            <div className="text-description">
              <h6 className="fw-bold header-qualification-detail">
                Short Description
              </h6>
              <div className="body-qualification-detail">
                <p>
                  PT. Rynest Technology Indomedia is a company engaged in
                  Information Technology with the characteristics of services
                  that are innovative, creative, and modern. RTI was founded in
                  2009 as well as under the auspices of The Rynest Companies
                  Group (RCG) business unit.
                  <br />
                  With the support of competent and professional and experienced
                  human resources so that the quality of products and services
                  provided by RTI can always meet the needs of its customers,
                  especially for information technology services in the fields
                  of insurance, pension funds, and finance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="occupation-wrapper">
              <div className="header-qualification-detail">Occupation</div>
              <div className="body-qualification-detail">
                <p>
                  Programmer
                  <br />
                  Web Developer
                </p>
              </div>
            </div>
            <div className="longtime-wrapper">
              <div className="header-qualification-detail">Long Time</div>
              <div className="body-qualification-detail">
                <p>August 2020 - Present</p>
              </div>
            </div>
            <div className="lern-wrapper">
              <div className="header-qualification-detail">What I Lern</div>
              <div className="body-qualification-detail">
                <div className="d-flex flex-nowrap gap-1">
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoHtml} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoCss} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoJavascript} alt="" className="img-fluid" />
                  </div>
                  <div className="lern-wrapper-icon p-1">
                    <img src={logoPHP} alt="" className="img-fluid" />
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
