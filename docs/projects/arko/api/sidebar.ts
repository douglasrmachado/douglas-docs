import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "projects/arko/api/arko-api",
    },
    {
      type: "category",
      label: "Auth",
      link: {
        type: "doc",
        id: "projects/arko/api/auth",
      },
      items: [
        {
          type: "doc",
          id: "projects/arko/api/login",
          label: "Log in",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/arko/api/register",
          label: "Register a new account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/arko/api/forgot-password",
          label: "Request a password reset code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/arko/api/reset-password",
          label: "Reset the password using a code",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Treino",
      link: {
        type: "doc",
        id: "projects/arko/api/treino",
      },
      items: [
        {
          type: "doc",
          id: "projects/arko/api/list-treinos",
          label: "List a student's workouts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/create-treino",
          label: "Create a workout for a student",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/arko/api/get-treino",
          label: "Get a single workout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/update-treino",
          label: "Update a workout",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "projects/arko/api/delete-treino",
          label: "Delete a workout",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "projects/arko/api/finalizar-treino",
          label: "Log a completed workout session",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Alimentação",
      link: {
        type: "doc",
        id: "projects/arko/api/alimentacao",
      },
      items: [
        {
          type: "doc",
          id: "projects/arko/api/list-check-ins-alimentacao",
          label: "List a student's nutrition check-ins",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/create-check-in-alimentacao",
          label: "Create or update a day's nutrition check-in",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/arko/api/get-metas-alimentacao",
          label: "Get a student's nutrition goals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/update-metas-alimentacao",
          label: "Update a student's nutrition goals",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
