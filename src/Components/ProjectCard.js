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

class ProjectCard extends Component {
    render() { 
        console.log(this.props);
        const imgPath = "images/" + this.props.imgSrc;
        const urlExists = (this.props.paperUrl || this.props.videoUrl || this.props.playUrl);
        const skills = typeof this.props.skillTags === "string" 
            ? this.props.skillTags.split(",")
            : [];
        
        return (<Paper elevation={3} sx={{paddingBottom: 0.8}}>

            <img class="image" 
                src={ imgPath }
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

            <div className="skills">
                {skills.map((skill) => (
                <text>#{skill}&nbsp;&nbsp;&nbsp;&nbsp;</text>
                ))} 
            </div>

            { urlExists ? 
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                className="box">
                { this.props.paperUrl ? <a href={this.props.paperUrl} className="button paper">
                <i className="button-text">Paper</i>
                </a> : null}
                { this.props.videoUrl ? <a href={this.props.videoUrl} className="button video">
                <i className="button-text">Video</i>
                </a> : null}
                { this.props.playUrl ? <a href={this.props.playUrl} className="button play">
                <i className="button-text">Play!</i>
                </a> : null}
            </Box> : null}

            </Container>
        </Paper>
    ); }
}

export default ProjectCard;
