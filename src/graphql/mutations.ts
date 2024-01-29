/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
    id
    name
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
    id
    name
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
    id
    name
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createBlogPost = /* GraphQL */ `mutation CreateBlogPost(
  $input: CreateBlogPostInput!
  $condition: ModelBlogPostConditionInput
) {
  createBlogPost(input: $input, condition: $condition) {
    id
    slug
    image
    category
    subcategory
    description
    title
    subtitle
    href
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlogPostMutationVariables,
  APITypes.CreateBlogPostMutation
>;
export const updateBlogPost = /* GraphQL */ `mutation UpdateBlogPost(
  $input: UpdateBlogPostInput!
  $condition: ModelBlogPostConditionInput
) {
  updateBlogPost(input: $input, condition: $condition) {
    id
    slug
    image
    category
    subcategory
    description
    title
    subtitle
    href
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlogPostMutationVariables,
  APITypes.UpdateBlogPostMutation
>;
export const deleteBlogPost = /* GraphQL */ `mutation DeleteBlogPost(
  $input: DeleteBlogPostInput!
  $condition: ModelBlogPostConditionInput
) {
  deleteBlogPost(input: $input, condition: $condition) {
    id
    slug
    image
    category
    subcategory
    description
    title
    subtitle
    href
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlogPostMutationVariables,
  APITypes.DeleteBlogPostMutation
>;
export const createService = /* GraphQL */ `mutation CreateService(
  $input: CreateServiceInput!
  $condition: ModelServiceConditionInput
) {
  createService(input: $input, condition: $condition) {
    id
    firstName
    lastName
    description
    serviceData
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServiceMutationVariables,
  APITypes.CreateServiceMutation
>;
export const updateService = /* GraphQL */ `mutation UpdateService(
  $input: UpdateServiceInput!
  $condition: ModelServiceConditionInput
) {
  updateService(input: $input, condition: $condition) {
    id
    firstName
    lastName
    description
    serviceData
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServiceMutationVariables,
  APITypes.UpdateServiceMutation
>;
export const deleteService = /* GraphQL */ `mutation DeleteService(
  $input: DeleteServiceInput!
  $condition: ModelServiceConditionInput
) {
  deleteService(input: $input, condition: $condition) {
    id
    firstName
    lastName
    description
    serviceData
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServiceMutationVariables,
  APITypes.DeleteServiceMutation
>;
export const createQualification = /* GraphQL */ `mutation CreateQualification(
  $input: CreateQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  createQualification(input: $input, condition: $condition) {
    id
    name
    institute
    calendarBegin
    calendarEnd
    type
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQualificationMutationVariables,
  APITypes.CreateQualificationMutation
>;
export const updateQualification = /* GraphQL */ `mutation UpdateQualification(
  $input: UpdateQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  updateQualification(input: $input, condition: $condition) {
    id
    name
    institute
    calendarBegin
    calendarEnd
    type
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQualificationMutationVariables,
  APITypes.UpdateQualificationMutation
>;
export const deleteQualification = /* GraphQL */ `mutation DeleteQualification(
  $input: DeleteQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  deleteQualification(input: $input, condition: $condition) {
    id
    name
    institute
    calendarBegin
    calendarEnd
    type
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQualificationMutationVariables,
  APITypes.DeleteQualificationMutation
>;
export const createPortfolioPost = /* GraphQL */ `mutation CreatePortfolioPost(
  $input: CreatePortfolioPostInput!
  $condition: ModelPortfolioPostConditionInput
) {
  createPortfolioPost(input: $input, condition: $condition) {
    id
    title
    description
    image
    technologies
    addressPost
    type
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePortfolioPostMutationVariables,
  APITypes.CreatePortfolioPostMutation
>;
export const updatePortfolioPost = /* GraphQL */ `mutation UpdatePortfolioPost(
  $input: UpdatePortfolioPostInput!
  $condition: ModelPortfolioPostConditionInput
) {
  updatePortfolioPost(input: $input, condition: $condition) {
    id
    title
    description
    image
    technologies
    addressPost
    type
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePortfolioPostMutationVariables,
  APITypes.UpdatePortfolioPostMutation
>;
export const deletePortfolioPost = /* GraphQL */ `mutation DeletePortfolioPost(
  $input: DeletePortfolioPostInput!
  $condition: ModelPortfolioPostConditionInput
) {
  deletePortfolioPost(input: $input, condition: $condition) {
    id
    title
    description
    image
    technologies
    addressPost
    type
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePortfolioPostMutationVariables,
  APITypes.DeletePortfolioPostMutation
>;
export const createSkill = /* GraphQL */ `mutation CreateSkill(
  $input: CreateSkillInput!
  $condition: ModelSkillConditionInput
) {
  createSkill(input: $input, condition: $condition) {
    id
    name
    level
    type
    userID
    href
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSkillMutationVariables,
  APITypes.CreateSkillMutation
>;
export const updateSkill = /* GraphQL */ `mutation UpdateSkill(
  $input: UpdateSkillInput!
  $condition: ModelSkillConditionInput
) {
  updateSkill(input: $input, condition: $condition) {
    id
    name
    level
    type
    userID
    href
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSkillMutationVariables,
  APITypes.UpdateSkillMutation
>;
export const deleteSkill = /* GraphQL */ `mutation DeleteSkill(
  $input: DeleteSkillInput!
  $condition: ModelSkillConditionInput
) {
  deleteSkill(input: $input, condition: $condition) {
    id
    name
    level
    type
    userID
    href
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSkillMutationVariables,
  APITypes.DeleteSkillMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    image
    avatar
    CV
    descriptionLong
    description
    experience
    projectNumber
    support
    titles
    email
    phone
    github
    buyMeACoffee
    facebook
    twitter
    instagram
    Qualifications {
      nextToken
      __typename
    }
    Skills {
      nextToken
      __typename
    }
    PortfolioPosts {
      nextToken
      __typename
    }
    Services {
      nextToken
      __typename
    }
    BlogPosts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    image
    avatar
    CV
    descriptionLong
    description
    experience
    projectNumber
    support
    titles
    email
    phone
    github
    buyMeACoffee
    facebook
    twitter
    instagram
    Qualifications {
      nextToken
      __typename
    }
    Skills {
      nextToken
      __typename
    }
    PortfolioPosts {
      nextToken
      __typename
    }
    Services {
      nextToken
      __typename
    }
    BlogPosts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    image
    avatar
    CV
    descriptionLong
    description
    experience
    projectNumber
    support
    titles
    email
    phone
    github
    buyMeACoffee
    facebook
    twitter
    instagram
    Qualifications {
      nextToken
      __typename
    }
    Skills {
      nextToken
      __typename
    }
    PortfolioPosts {
      nextToken
      __typename
    }
    Services {
      nextToken
      __typename
    }
    BlogPosts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
