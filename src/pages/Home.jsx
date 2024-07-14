import React from "react";
import "../assets/css/home.css";
import image from "../assets/images/main-container-image.jpg";

const Home = () => {
  return (
    <>
      <div className="section-container">
        <div className="socials-container">
          <ul className="socials-ul">
            <li>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z"
                />
              </svg>
            </li>
            <li>
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </li>
            <li>
              <svg
                fill="#000000"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="section-title">
          <h3>
            Hello, This is Vaibhav | Senior Software Developer | Cybersecurity
            Expert
          </h3>
          <span>
            A seasoned Full Stack Developer with over 4+ years of experience, I
            bring a robust skill set honed through diverse projects spanning
            front-end and back-end development. Proficient in a range of
            technologies including JavaScript frameworks like React and Next Js
            for dynamic front-end solutions, and Node.js
          </span>
          <div className="projects-btn">
            <button className="project"><a href="/projects">Projects</a></button>
          </div>
        </div>
        <div className="section-image">
          <img
            src={image}
            alt="a boy with computer"
            className="section-container-image"
          />
        </div>
      </div>
      <div className="skills-section-container">
        <div className="skills-container">
          <div className="skills-title">
            <div className="circle"></div>
            <h3 style={{ margin: 0 }}>My Skills</h3>
            <div className="circle"></div>
          </div>
          <div className="skills">
            <div className="container">
              <p>PHP</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "90%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>Javascript</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "90%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>Laravel</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "80%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>Shopify</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "90%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>Wordpress</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "70%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>DevOps</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "70%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>React</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "70%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>Mongo DB</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "80%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>MySQL</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "100%"}}></div>
              </div>
            </div>
            <div className="container">
              <p>PostgreSql</p>
              <div class="progress">
                <div class="progress-bar" style={{width: "60%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
