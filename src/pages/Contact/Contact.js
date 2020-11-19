import React from "react";
import emailjs from "emailjs-com";

import { Grid, TextField, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

import CustomButton from "../../components/Button/Button";
import resumeData from "../../utils/resumeData";
import "./Contact.css";
import Map from "../../components/Map/Map";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02rv9cs",
        "template_ep39qyn",
        e.target,
        "user_PPPwlXKxf4qqPvA9YypQI"
      )
      .then(
        (result) => {
          alert("이메일 확인 후 연락드리겠습니다. 감사합니다.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      {/* Contact */}
      <Grid container className="section pb_45 pt_45">
        {/* Contact form */}
        <Grid item xs={12} lg={6} className="mb_45">
          <Grid container>
            <Grid item xs={12}>
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact Form</h6>
              </Grid>
              <form onSubmit={sendEmail}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="title" label="Title" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="company" label="Company" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton
                      type="submit"
                      text="Submit"
                      icon={<EmailIcon />}
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={12} lg={1}></Grid>

        {/* Contact information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Email: </span>
                    {resumeData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Kakao ID: </span>
                    {resumeData.kakao}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key, index) => (
                  <Grid item className="contactInfo_social" key={index}>
                    <a
                      href={resumeData.socials[key].link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item className="section_title mb_30 mt_60">
              <span></span>
              <h6 className="section_title_text">My Location</h6>
            </Grid>
            <Grid item xs={12}>
              <Map />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
