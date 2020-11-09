import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  // const ProjectDialog = () => (

  // );

  return (
    <Grid container className="section pt_45 pb_45">
      {/* Title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag, index) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
                key={index}
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project, index) => (
            <>
              {tabValue === "All" || tabValue === project.tag ? (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image[0]}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_description"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src="" alt="" className="projectDialog_image" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              className="projectDialog_icon"
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
