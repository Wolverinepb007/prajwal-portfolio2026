export const profile = {
  name: 'Prajwal Bhandari',
  role: 'QA Engineer',
  email: 'prajwal@example.com',
  bio: 'Passionate Quality Assurance Engineer dedicated to ensuring software reliability and user satisfaction.',
  github: 'https://github.com/prajwalbhandari',
  resume: '#',
  principles: `
    <li><strong>Test Early, Test Often:</strong> Integrating QA from the beginning of the development cycle.</li>
    <li><strong>Automation First:</strong> Converting repetitive test cases to reliable automated scripts.</li>
    <li><strong>User-Centric:</strong> Always advocating for the end-user's experience.</li>
  `
};

export const skills = {
  'Testing Frameworks': [
    { name: 'Selenium WebDriver', proficiency: 9 },
    { name: 'Cypress', proficiency: 8.5 },
    { name: 'Playwright', proficiency: 8 },
  ],
  'Languages & Tools': [
    { name: 'Java', proficiency: 8.5 },
    { name: 'JavaScript / TypeScript', proficiency: 8 },
    { name: 'Postman / API Testing', proficiency: 9 },
    { name: 'Jira / Xray', proficiency: 9 },
  ]
};

export const projects = [
  {
    title: 'E-commerce Automation Suite',
    description: 'Built a robust automation framework for testing major user flows on an enterprise e-commerce platform.',
    tools_used: 'Selenium, Java, TestNG, Jenkins',
    link: '#',
    image: null
  },
  {
    title: 'API Testing Framework',
    description: 'Created a comprehensive automated API testing suite ensuring backwards compatibility for microservices.',
    tools_used: 'RestAssured, Java, CI/CD',
    link: '#',
    image: null
  }
];

export const experiences = [
  {
    duration: '2023 - Present',
    position: 'Senior QA Automation Engineer',
    company: 'Tech Solutions Inc.',
    description: 'Lead the automation effort for core products, reducing manual testing time by 70%.'
  },
  {
    duration: '2020 - 2023',
    position: 'QA Engineer',
    company: 'Software Systems Ltd.',
    description: 'Responsible for end-to-end testing, bug reporting, and developing automated UI test scripts.'
  }
];

export const certifications = [
  {
    name: 'ISTQB Certified Tester Foundation Level',
    issuing_organization: 'ISTQB',
    issue_date: '2021-05'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuing_organization: 'Amazon Web Services',
    issue_date: '2022-08'
  }
];
