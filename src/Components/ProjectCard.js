import React, { Component } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';

class ProjectCard extends Component {
    render() {
        const imgPath = "images/" + this.props.imgSrc;
        const urlDict = {
            Paper: this.props.paperUrl,
            Video: this.props.videoUrl,
            Play: this.props.playUrl,
            Github: this.props.githubUrl
        }
        const numValidUrls = Object.values(urlDict).filter((url) => url).length;
        const skills = typeof this.props.skillTags === "string"
            ? this.props.skillTags.split(",")
            : [];

        return (<Paper elevation={3} sx={{ height: "100%", display: "flex" }}>
            <Box sx={{ position: "relative" }}>
                <img class="image"
                    src={imgPath}
                />

                <Container ml={2} mr={2} fontSize="2.5rem" >

                    <div className="project-title">
                        <h1>
                            {this.props.title}
                        </h1>
                    </div>

                    <div className="date">
                        {this.props.dateRange}
                    </div>

                    <div className="card-body">
                        {this.props.bodyText}
                    </div>

                    {numValidUrls > 0 ?
                        <Box display="flex"
                            justifyContent="center"
                            alignItems="center"
                            className="box"
                            paddingTop="30px">
                            <Grid container width="auto" spacing={2} justifyContent="center" alignItems="center">
                                {Object.entries(urlDict).map(([label, url], idx) => {
                                    if (url) {
                                        return (
                                            <Grid item xs={12 / numValidUrls}>
                                                <Box display="flex" justifyContent="center" alignItems="center">
                                                    <a href={url} className={"button " + label.toLowerCase()}>
                                                        <i className="button-text">{label}</i>
                                                    </a>
                                                </Box>
                                            </Grid>
                                        )
                                    }
                                })}
                            </Grid>
                        </Box>
                        : null}
                </Container>

                <Container ml={2} mr={2} fontSize="2.5rem" sx={{ position: "absolute", bottom: 0, fontWeight: "normal" }}>
                    <div className="skills">
                        {skills.map((skill) => (
                            <>
                                <text>#{skill}&nbsp;&nbsp;&nbsp;&nbsp;</text>
                            </>
                        ))}
                    </div>
                </Container>

                <Box height="45px"></Box>
            </Box>
        </Paper>
        );
    }
}

export default ProjectCard;
