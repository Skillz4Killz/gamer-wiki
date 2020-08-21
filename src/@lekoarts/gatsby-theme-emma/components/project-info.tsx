/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import Item from "@lekoarts/gatsby-theme-emma/src/components/project-info-item";

type ProjectInfoProps = {
  project: {
    client: string;
    date: string;
    service: string;
  };
};

export const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <Flex sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
    <Item name="Title" content={project.client} />
    <Item name="Updated At" content={project.date} />
    <Item name="Description" content={project.service} />
  </Flex>
);

export default ProjectInfo;
