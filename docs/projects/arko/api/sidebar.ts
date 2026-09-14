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
      label: "Workouts",
      link: {
        type: "doc",
        id: "projects/arko/api/workouts",
      },
      items: [
        {
          type: "doc",
          id: "projects/arko/api/list-workouts",
          label: "List a student's workouts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/create-workout",
          label: "Create a workout for a student",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/arko/api/get-workout",
          label: "Get a single workout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/update-workout",
          label: "Update a workout",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "projects/arko/api/delete-workout",
          label: "Delete a workout",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "projects/arko/api/complete-workout",
          label: "Log a completed workout session",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Nutrition",
      link: {
        type: "doc",
        id: "projects/arko/api/nutrition",
      },
      items: [
        {
          type: "doc",
          id: "projects/arko/api/list-nutrition-check-ins",
          label: "List a student's nutrition check-ins",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/create-nutrition-check-in",
          label: "Create or update a day's nutrition check-in",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "projects/arko/api/get-nutrition-goals",
          label: "Get a student's nutrition goals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "projects/arko/api/update-nutrition-goals",
          label: "Update a student's nutrition goals",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
