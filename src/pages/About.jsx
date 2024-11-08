import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.paragraph}>
        Hello! I'm Henrique Lecce, an Information Systems student with a passion for technology and a drive for integrating different fields of knowledge into computing. I have experience in backend development, cybersecurity, and hardware, and I enjoy working on interdisciplinary projects that make a positive impact.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Skills</h2>
        <ul style={styles.list}>
          <li>Backend Development with Node.js, SpringBoot</li>
          <li>Frontend Development with React, CSS</li>
          <li>Cybersecurity and Hardware</li>
          <li>Relational Databases and Data Modeling</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Projects</h2>
        <ul style={styles.list}>
          <li>DietController - A platform for personalized dietary tracking and guidance.</li>
          <li>easyTrash - A platform for locating eco-points and connecting collection points for specific materials.</li>
          <li>Russin Bank - A Java-based project with graphical windows for managing simple banking operations.</li>
          <li>Bora Ambulante - A hackathon project designed to support street vendors.</li>
        </ul>
      </section>
    </div>
  );
};



export default About;
