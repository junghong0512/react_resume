import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { Grid, Icon, Paper, Typography } from "@material-ui/core";

import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";

import resumeData from "../../utils/resumeData";
import "./Resume.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_description">
            {resumeData.about.description}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experience */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Web Development" icon={<WorkIcon />}>
                {resumeData.webTImeline.map((experience, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Educations */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education History" icon={<SchoolIcon />}>
                {resumeData.educationTimeline.map((experience, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography variant="h6" className="service_title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service_description">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section pt_30 pb_45 skill_container">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={2}>
            {resumeData.skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.list.map((element, index) => (
                    <Typography
                      variant="body2"
                      className="skill_name"
                      key={index}
                    >
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      {element.name}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
