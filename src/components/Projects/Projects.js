import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import docker from "../../Assets/Projects/docker.png";
import automation from "../../Assets/Projects/automation.png";
import k8 from "../../Assets/Projects/k8.png";
import aws from "../../Assets/Projects/aws.png";
import jenkins from "../../Assets/Projects/jenkins.png";
import terra from "../../Assets/Projects/terra.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWS 3-tier Architechture"
              description="A 3-tier architecture deployed in Amazon Web Services (AWS). The architecture consists of a web layer, an application layer, and a data layer, utilizing MySQL database. Additionally, it includes load balancers, target groups, bastion hosts, NAT gateway, and Elastic IP for enhanced security and scalability."
              ghLink="https://github.com/Nikunz/3-tier-architecture"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terra}
              isBlog={false}
              title="Terraform 2-tier Architecture"
              description="Terraform project to deploy a 2-tier AWS infrastructure that includes a Virtual Private Cloud (VPC), public and private subnets, security groups, EC2 instances, an Application Load Balancer (ALB), and a MySQL database instance."
              ghLink="https://github.com/Nikunz/2tierarchitecture.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k8}
              isBlog={false}
              title="Kubernetes-promethius project"
              description="A project to deploy a monitoring service as Promethius with the help of a kubernetes cluster."
              ghLink="https://github.com/Nikunz/kubernetes.git"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docker}
              isBlog={false}
              title="Docker-logstash-Kibana"
              description="Docker Project to set up Elasticsearch, Logstash, and Kibana for log aggregation and visualization. This setup can be useful for monitoring and analyzing logs from various sources."
              ghLink="https://github.com/Nikunz/docker-compose-examples.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkins}
              isBlog={false}
              title="CICD projects"
              description="Automation projects with jenkins using maven, docker, nexus, sonarqube, tomcat, kubernetes, EKS and ecs."
              ghLink="https://github.com/Nikunz/Jenkins.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automation}
              isBlog={false}
              title="Terraform Projects"
              description="Terraform automation projects to automate various cloud resources like Scaling groups, Loadbalancers, Elastic beanstalk, Elastic container services and Elastic Kubernetes services."
              ghLink="https://github.com/Nikunz/Terraform.git"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
