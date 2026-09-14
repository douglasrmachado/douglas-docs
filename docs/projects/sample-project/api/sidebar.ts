import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "projects/sample-project/api/sample-project-api",
    },
    {
      type: "category",
      label: "Resources",
      link: {
        type: "doc",
        id: "projects/sample-project/api/resources",
      },
      items: [
        {
          type: "doc",
          id: "projects/sample-project/api/list-resources",
          label: "List resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/sample-project/api/create-resource",
          label: "Create a resource",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/sample-project/api/get-resource",
          label: "Get a resource",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
