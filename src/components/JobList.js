import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = typeof window !== "undefined" && window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={
        isHorizontal
          ? `full-width-tabpanel-${index}`
          : `vertical-tabpanel-${index}`
      }
      aria-labelledby={
        isHorizontal ? `full-width-tab-${index}` : `vertical-tab-${index}`
      }
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return isHorizontal
    ? {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
      }
    : {
        id: `vertical-tab-${index}`
      };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    DeepStrike: {
      jobTitle: "Offensive Security @",
      duration: "Nov 2025 - Present",
      desc: [
        "Conduct penetration testing and security assessments on web and networked systems, identifying and validating vulnerabilities and providing actionable remediation recommendations to strengthen system security."
      ]
    },

    HackViser: {
      jobTitle: "Ambassador @",
      duration: "Oct 2025 - Present",
      desc: [
        "Promote ethical hacking and cybersecurity awareness by engaging with the community, sharing educational content, and encouraging hands-on learning in offensive security."
      ]
    },

    "Vodafone Egypt": {
      jobTitle: "AI & Cybersecurity Intern @",
      duration: "Jul 2025 - Aug 2025",
      desc: [
        "Collaborated with the AI & Data team to develop and optimize classification models using Decision Tree and Random Forest algorithms.",
        "Explored cybersecurity basics with a focus on penetration testing and common vulnerabilities."
      ]
    },

    "Al Dahra Agriculture": {
      jobTitle: "Frontend & Security Intern @",
      duration: "Aug 2025 - Sep 2025",
      desc: [
        "Built a web-based dashboard for agricultural data analysis using React.",
        "Assisted with basic security integration and deployment considerations."
      ]
    },

    "Polytechnic of Egypt University": {
      jobTitle: "Student @",
      duration: "2024 - 2028",
      desc: [
        "Top-achieving Computer Engineering student building a strong foundation in software development, networking, and cybersecurity through academic excellence and hands-on projects."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={key}
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>

      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={key} value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key].jobTitle + " "}
          </span>
          <span className="joblist-job-company">{key}</span>

          <div className="joblist-duration">
            {experienceItems[key].duration}
          </div>

          <ul className="job-description">
            {experienceItems[key].desc.map((descItem, j) => (
              <FadeInSection key={j} delay={`${j + 1}00ms`}>
                <li>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
