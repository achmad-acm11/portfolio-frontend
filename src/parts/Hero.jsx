import React from "react";
// import profileImage from "assets/img/IMG_3528.png";

export default function Hero(props) {
  return (
    <section className="hero-profile text-center px-4" id="hero-profile">
      <div className="container mt-4">
        <div className="hero-profile-thumb rounded-circle overflow-hidden mx-auto">
          <img
            src={props.profile.image}
            alt=""
            className="hero-profile-image img-fluid"
          />
        </div>
        <h3 className="mt-4 hero-name">Hello, I'm {props.profile.name}</h3>
        <h5 className="hero-accupation mb-2">{props.profile.occupation}</h5>
        <div className="hero-profile-social d-flex justify-content-center ">
          <a href={props.social.linkedin} target={"_blank"} rel="noreferrer">
            <svg
              className="me-3"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_16_30)">
                <rect
                  x="2"
                  y="1"
                  width="28"
                  height="28"
                  rx="4"
                  stroke="#7DBFE2"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
              </g>
              <path
                d="M17.1111 25H12.6667V11.6667H17.1111V13.8889C18.0585 12.6836 19.4951 11.9651 21.0277 11.93C23.784 11.9453 26.008 14.1882 26 16.9444V25H21.5555V17.5C21.3778 16.2585 20.313 15.3373 19.0589 15.34C18.5103 15.3573 17.9925 15.5975 17.6249 16.0051C17.2573 16.4127 17.0718 16.9526 17.1111 17.5V25ZM10.4444 25H6V11.6667H10.4444V25ZM8.22222 9.44444C6.99492 9.44444 6 8.44952 6 7.22222C6 5.99492 6.99492 5 8.22222 5C9.44951 5 10.4444 5.99492 10.4444 7.22222C10.4444 7.81159 10.2103 8.37682 9.79356 8.79357C9.37682 9.21032 8.81159 9.44444 8.22222 9.44444Z"
                fill="#7DBFE2"
              />
              <defs>
                <filter
                  id="filter0_d_16_30"
                  x="0"
                  y="0"
                  width="32"
                  height="33"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_16_30"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_16_30"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <a href={props.social.github} target={"_blank"} rel="noreferrer">
            <svg
              className="me-3"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_16_25)">
                <rect
                  x="2"
                  y="1"
                  width="28"
                  height="28"
                  rx="4"
                  stroke="#7DBFE2"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
              </g>
              <path
                d="M15.9995 5C11.0955 4.99935 6.91504 8.64728 6.12988 13.6124C5.34471 18.5775 8.18666 23.3937 12.8394 24.983C13.3406 25.0755 13.52 24.7599 13.52 24.4886C13.52 24.2449 13.5119 23.5993 13.5089 22.741C10.7277 23.3578 10.1404 21.3655 10.1404 21.3655C9.95733 20.7456 9.56372 20.2135 9.03095 19.8657C8.12894 19.2294 9.1001 19.2438 9.1001 19.2438C9.74221 19.3341 10.3073 19.7243 10.6305 20.3005C10.9041 20.8107 11.3649 21.1876 11.9107 21.3477C12.4564 21.5077 13.0419 21.4375 13.537 21.1527C13.5835 20.6326 13.8091 20.1464 14.1734 19.7814C11.9545 19.5234 9.62127 18.6434 9.62127 14.7134C9.60895 13.697 9.97696 12.7143 10.6496 11.9677C10.3452 11.0829 10.3811 10.1124 10.7498 9.2538C10.7498 9.2538 11.5887 8.97728 13.4979 10.3034C15.1354 9.84285 16.8636 9.84285 18.5011 10.3034C20.4113 8.97625 21.2492 9.2538 21.2492 9.2538C21.6196 10.112 21.6555 11.0832 21.3494 11.9677C22.0245 12.7142 22.3922 13.6995 22.3757 14.7175C22.3757 18.6578 20.0405 19.5234 17.8135 19.7773C18.2939 20.2811 18.5403 20.9722 18.4901 21.675C18.4901 23.0463 18.478 24.1524 18.478 24.4886C18.478 24.763 18.6564 25.0817 19.1666 24.981C23.8174 23.389 26.6563 18.5725 25.8695 13.6087C25.0827 8.64488 20.9025 4.99885 15.9995 5Z"
                fill="#7DBFE2"
              />
              <defs>
                <filter
                  id="filter0_d_16_25"
                  x="0"
                  y="0"
                  width="32"
                  height="33"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_16_25"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_16_25"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <a href={props.social.instagram} target={"_blank"} rel="noreferrer">
            <svg
              className="me-3"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_16_26)">
                <rect
                  x="2"
                  y="1"
                  width="28"
                  height="28"
                  rx="4"
                  stroke="#7DBFE2"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
              </g>
              <path
                d="M15.9944 25C13.2626 25 12.9406 24.9856 11.8745 24.939C11.0432 24.9117 10.2226 24.743 9.44808 24.44C8.10806 23.9193 7.04846 22.8608 6.52748 21.5225C6.23576 20.7463 6.07842 19.9262 6.06219 19.0974C6 18.035 6 17.6868 6 14.98C6 12.2444 6.01444 11.925 6.06219 10.866C6.07878 10.0383 6.23611 9.21935 6.52748 8.44422C7.0479 7.10416 8.10922 6.04477 9.45142 5.52562C10.2273 5.23309 11.0476 5.07556 11.8767 5.05988C12.9373 5 13.286 5 15.9944 5C18.7485 5 19.065 5.01442 20.1144 5.05988C20.9457 5.0757 21.7682 5.23321 22.5464 5.52562C23.8882 6.04536 24.9493 7.10454 25.4703 8.44422C25.7669 9.23064 25.9251 10.0624 25.9378 10.9026C26 11.965 26 12.312 26 15.0177C26 17.7234 25.9845 18.0783 25.9378 19.1284C25.9213 19.9581 25.7636 20.7789 25.4714 21.5558C24.9491 22.895 23.8879 23.9538 22.5464 24.4744C21.7693 24.7651 20.9485 24.9222 20.1188 24.939C19.0583 25 18.7107 25 15.9944 25ZM15.9567 6.75538C13.2404 6.75538 12.9584 6.76868 11.8978 6.81637C11.2648 6.82474 10.638 6.94138 10.0444 7.16123C9.16797 7.49613 8.47443 8.18584 8.13548 9.05966C7.91362 9.65879 7.79679 10.2916 7.79012 10.9304C7.73126 12.0049 7.73126 12.2865 7.73126 14.98C7.73126 17.6414 7.74125 17.9641 7.79012 19.0319C7.80006 19.6642 7.91682 20.2903 8.13548 20.8838C8.47493 21.757 9.16834 22.4462 10.0444 22.7811C10.6376 23.0024 11.2647 23.1191 11.8978 23.126C12.9728 23.1881 13.256 23.1881 15.9567 23.1881C18.6807 23.1881 18.9628 23.1748 20.0144 23.126C20.6479 23.1183 21.2752 23.0016 21.869 22.7811C22.7401 22.4433 23.4291 21.7557 23.7679 20.886C23.9893 20.2864 24.1062 19.6533 24.1133 19.0142H24.1255C24.1732 17.9541 24.1732 17.6713 24.1732 14.9623C24.1732 12.2533 24.161 11.9683 24.1133 10.9093C24.1033 10.2777 23.9865 9.65237 23.7679 9.05966C23.4299 8.1887 22.7408 7.49977 21.869 7.16123C21.2753 6.94028 20.6479 6.8236 20.0144 6.81637C18.9406 6.75538 18.6596 6.75538 15.9567 6.75538ZM15.9944 20.102C13.9178 20.1034 12.0449 18.8553 11.2492 16.94C10.4534 15.0246 10.8916 12.8192 12.3594 11.3523C13.8272 9.88533 16.0354 9.44585 17.9542 10.2388C19.873 11.0317 21.1245 12.9009 21.1249 14.9745C21.1219 17.8034 18.8274 20.0965 15.9944 20.102ZM15.9944 11.6456C14.1545 11.6456 12.663 13.135 12.663 14.9723C12.663 16.8096 14.1545 18.299 15.9944 18.299C17.8344 18.299 19.3259 16.8096 19.3259 14.9723C19.3217 13.1368 17.8326 11.6499 15.9944 11.6456ZM21.3248 10.855C20.6645 10.8525 20.1309 10.3167 20.1322 9.65736C20.1334 8.99804 20.669 8.46419 21.3293 8.46419C21.9895 8.46419 22.5251 8.99803 22.5264 9.65735C22.5267 9.97545 22.4001 10.2806 22.1746 10.5053C21.9492 10.73 21.6434 10.8558 21.3248 10.855Z"
                fill="#7DBFE2"
              />
              <defs>
                <filter
                  id="filter0_d_16_26"
                  x="0"
                  y="0"
                  width="32"
                  height="33"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_16_26"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_16_26"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
