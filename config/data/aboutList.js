import cloudImg from "@/public/images/cloud.png";
import deployImg from "@/public/images/deploy.png";
import toolsImg from "@/public/images/tools.png";
import scaleImg from "@/public/images/scale.png";
import pipelineImg from "@/public/images/pipeline.png";
import costImg from "@/public/images/cost.png";
import previewImg from "@/public/images/preview.png";
import observabilityImg from "@/public/images/observability.png";

export const aboutList = [
  {
    number: "01",
    title: "Self serve Infrastructure",
    description:
      "Accelerate by self-serving production-ready infrastructure and customize as you scale.",
    menuItems: [
      {
        id: 1,
        title: "Your Cloud",
      },
      {
        id: 2,
        title: "Infra components",
      },
      {
        id: 3,
        title: "Self-hosted Apps",
      },
    ],
    menuDetails: [
      {
        img: cloudImg,
        title: "In Your Cloud",
        description:
          "Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon)",
      },
    ],
  },
  {
    number: "02",
    title: "Deploy applications, fast!",
    description:
      "Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.",
    details: [
      {
        img: pipelineImg,
        title: "Configurable Build and Deploy pipelines",
        description:
          "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
      },
      {
        img: deployImg,
        title: "Push to Deploy",
        description:
          "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
      },
      {
        img: toolsImg,
        title: "Multiple runtimes",
        description:
          "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
      },
      {
        img: scaleImg,
        title: "Scale infinitely",
        description:
          "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
      },
    ],
  },
  {
    number: "03",
    title: "Visibility into costs and metrics",
    description:
      "Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.",
    details: [
      {
        img: costImg,
        title: "Customizable cost dashboards and reports",
        description:
          "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
      },
      {
        img: previewImg,
        title: "Preview infra costs",
        description:
          "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
      },
      {
        img: observabilityImg,
        title: "Observability from day one",
        description:
          "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
      },
    ],
  },
];
