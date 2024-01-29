/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getBlogPost = /* GraphQL */ `query GetBlogPost($id: ID!) {
  getBlogPost(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBlogPostQueryVariables,
  APITypes.GetBlogPostQuery
>;
export const listBlogPosts = /* GraphQL */ `query ListBlogPosts(
  $filter: ModelBlogPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlogPostsQueryVariables,
  APITypes.ListBlogPostsQuery
>;
export const blogPostsByUserID = /* GraphQL */ `query BlogPostsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBlogPostFilterInput
  $limit: Int
  $nextToken: String
) {
  blogPostsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BlogPostsByUserIDQueryVariables,
  APITypes.BlogPostsByUserIDQuery
>;
export const getService = /* GraphQL */ `query GetService($id: ID!) {
  getService(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetServiceQueryVariables,
  APITypes.GetServiceQuery
>;
export const listServices = /* GraphQL */ `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicesQueryVariables,
  APITypes.ListServicesQuery
>;
export const servicesByUserID = /* GraphQL */ `query ServicesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  servicesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServicesByUserIDQueryVariables,
  APITypes.ServicesByUserIDQuery
>;
export const getQualification = /* GraphQL */ `query GetQualification($id: ID!) {
  getQualification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetQualificationQueryVariables,
  APITypes.GetQualificationQuery
>;
export const listQualifications = /* GraphQL */ `query ListQualifications(
  $filter: ModelQualificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listQualifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQualificationsQueryVariables,
  APITypes.ListQualificationsQuery
>;
export const qualificationsByUserID = /* GraphQL */ `query QualificationsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQualificationFilterInput
  $limit: Int
  $nextToken: String
) {
  qualificationsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QualificationsByUserIDQueryVariables,
  APITypes.QualificationsByUserIDQuery
>;
export const getPortfolioPost = /* GraphQL */ `query GetPortfolioPost($id: ID!) {
  getPortfolioPost(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPortfolioPostQueryVariables,
  APITypes.GetPortfolioPostQuery
>;
export const listPortfolioPosts = /* GraphQL */ `query ListPortfolioPosts(
  $filter: ModelPortfolioPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPortfolioPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPortfolioPostsQueryVariables,
  APITypes.ListPortfolioPostsQuery
>;
export const portfolioPostsByUserID = /* GraphQL */ `query PortfolioPostsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPortfolioPostFilterInput
  $limit: Int
  $nextToken: String
) {
  portfolioPostsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PortfolioPostsByUserIDQueryVariables,
  APITypes.PortfolioPostsByUserIDQuery
>;
export const getSkill = /* GraphQL */ `query GetSkill($id: ID!) {
  getSkill(id: $id) {
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
` as GeneratedQuery<APITypes.GetSkillQueryVariables, APITypes.GetSkillQuery>;
export const listSkills = /* GraphQL */ `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSkillsQueryVariables,
  APITypes.ListSkillsQuery
>;
export const skillsByUserID = /* GraphQL */ `query SkillsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  skillsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SkillsByUserIDQueryVariables,
  APITypes.SkillsByUserIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
