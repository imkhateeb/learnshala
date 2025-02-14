const USER_ROLES = Object.freeze({
  ADMIN: "admin",
  STUDENT: "student",
  INSTRUCTOR: "instructor",
  MERCHANT: "merchant",
  TECH: "tech",
  STAFF: "staff",
  GUEST: "guest",
  SUPER_ADMIN: "super_admin",
});

const SOCIAL_PLATFORMS = {
  LINKEDIN: "LinkedIn",
  GITHUB: "GitHub",
  TWITTER: "Twitter",
  INSTAGRAM: "Instagram",
  FACEBOOK: "Facebook",
  LEETCODE: "LeetCode",
  CODECHEF: "CodeChef",
  HACKERRANK: "HackerRank",
  STACKOVERFLOW: "Stack Overflow",
  OTHER: "Other",
};

const JOB_ROLES = {
  SOFTWARE_ENGINEER: "Software Engineer",
  BACKEND_DEVELOPER: "Backend Developer",
  FRONTEND_DEVELOPER: "Frontend Developer",
  FULL_STACK_DEVELOPER: "Full Stack Developer",
  DEVOPS_ENGINEER: "DevOps Engineer",
  DATA_SCIENTIST: "Data Scientist",
  MACHINE_LEARNING_ENGINEER: "Machine Learning Engineer",
  CYBER_SECURITY_ANALYST: "Cyber Security Analyst",
  CLOUD_ENGINEER: "Cloud Engineer",
  DATABASE_ADMINISTRATOR: "Database Administrator",
  MOBILE_APP_DEVELOPER: "Mobile App Developer",
  GAME_DEVELOPER: "Game Developer",
  EMBEDDED_SYSTEMS_ENGINEER: "Embedded Systems Engineer",
  SYSTEMS_ARCHITECT: "Systems Architect",
  SOFTWARE_TESTER: "Software Tester",
  SITE_RELIABILITY_ENGINEER: "Site Reliability Engineer",
  AI_ENGINEER: "AI Engineer",
  BLOCKCHAIN_DEVELOPER: "Blockchain Developer",
  UI_UX_DESIGNER: "UI/UX Designer",
  TECHNICAL_PRODUCT_MANAGER: "Technical Product Manager",
};

const FIELD_OF_STUDY_ENUM = {
  COMPUTER_SCIENCE: "Computer Science",
  INFORMATION_TECHNOLOGY: "Information Technology",
  ENGINEERING: "Engineering",
  BUSINESS_ADMINISTRATION: "Business Administration",
  MATHEMATICS: "Mathematics",
  BIOLOGY: "Biology",
  MEDICINE: "Medicine",
  LAW: "Law",
  DESIGN: "Design",
  OTHER: "Other",
};

const DEGREE_ENUM = {
  BACHELORS: "Bachelors",
  MASTERS: "Masters",
  PHD: "Ph.D.",
  DIPLOMA: "Diploma",
  ASSOCIATE: "Associate Degree",
  MBA: "MBA",
  MD: "Medical Doctor",
  JD: "Juris Doctor",
  CERTIFICATION: "Certification",
  OTHER: "Other",
};

const ENROLLMENT_STATUS = {
  OPEN: "Open",
  CLOSED: "Closed",
  IN_PROGRESS: "In Progress",
  WAITLIST: "Waitlist",
};

const RESOURCES_TYPE_ENUM = {
  YOUTUBE: "youtube-video",
  ARTICLE: "article",
};

module.exports = {
  USER_ROLES,
  SOCIAL_PLATFORMS,
  JOB_ROLES,
  FIELD_OF_STUDY_ENUM,
  DEGREE_ENUM,
  ENROLLMENT_STATUS,
  RESOURCES_TYPE_ENUM,
};
