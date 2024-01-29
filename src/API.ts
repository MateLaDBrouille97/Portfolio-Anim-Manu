/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  image?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateBlogPostInput = {
  id?: string | null,
  slug?: string | null,
  image?: string | null,
  category?: CategoryType | null,
  subcategory?: SubCategoryType | null,
  description?: string | null,
  title?: string | null,
  subtitle?: string | null,
  href?: string | null,
  userID: string,
};

export enum CategoryType {
  USEFULHACKS = "USEFULHACKS",
  PROJECTS = "PROJECTS",
  NEWS = "NEWS",
  OPINIONS = "OPINIONS",
  TOOLS = "TOOLS",
  ANALYSIS = "ANALYSIS",
  GEOPOL = "GEOPOL",
}


export enum SubCategoryType {
  AI = "AI",
  ANALYZE = "ANALYZE",
  WEB = "WEB",
  APP = "APP",
  IMAGE_VIDEO = "IMAGE_VIDEO",
  OTHER = "OTHER",
  MARKETING = "MARKETING",
  COPYWRITING = "COPYWRITING",
  RESEARCH_TOOLS = "RESEARCH_TOOLS",
  PRODUCTIVITY = "PRODUCTIVITY",
  ASSISTANTS = "ASSISTANTS",
}


export type ModelBlogPostConditionInput = {
  slug?: ModelStringInput | null,
  image?: ModelStringInput | null,
  category?: ModelCategoryTypeInput | null,
  subcategory?: ModelSubCategoryTypeInput | null,
  description?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  href?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelBlogPostConditionInput | null > | null,
  or?: Array< ModelBlogPostConditionInput | null > | null,
  not?: ModelBlogPostConditionInput | null,
};

export type ModelCategoryTypeInput = {
  eq?: CategoryType | null,
  ne?: CategoryType | null,
};

export type ModelSubCategoryTypeInput = {
  eq?: SubCategoryType | null,
  ne?: SubCategoryType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type BlogPost = {
  __typename: "BlogPost",
  id: string,
  slug?: string | null,
  image?: string | null,
  category?: CategoryType | null,
  subcategory?: SubCategoryType | null,
  description?: string | null,
  title?: string | null,
  subtitle?: string | null,
  href?: string | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogPostInput = {
  id: string,
  slug?: string | null,
  image?: string | null,
  category?: CategoryType | null,
  subcategory?: SubCategoryType | null,
  description?: string | null,
  title?: string | null,
  subtitle?: string | null,
  href?: string | null,
  userID?: string | null,
};

export type DeleteBlogPostInput = {
  id: string,
};

export type CreateServiceInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  description?: string | null,
  serviceData?: Array< string | null > | null,
  userID: string,
};

export type ModelServiceConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  serviceData?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelServiceConditionInput | null > | null,
  or?: Array< ModelServiceConditionInput | null > | null,
  not?: ModelServiceConditionInput | null,
};

export type Service = {
  __typename: "Service",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  description?: string | null,
  serviceData?: Array< string | null > | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateServiceInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  description?: string | null,
  serviceData?: Array< string | null > | null,
  userID?: string | null,
};

export type DeleteServiceInput = {
  id: string,
};

export type CreateQualificationInput = {
  id?: string | null,
  name?: string | null,
  institute?: string | null,
  calendarBegin?: string | null,
  calendarEnd?: string | null,
  type?: QualifType | null,
  userID: string,
};

export enum QualifType {
  EDUCATION = "EDUCATION",
  EXPERIENCE = "EXPERIENCE",
}


export type ModelQualificationConditionInput = {
  name?: ModelStringInput | null,
  institute?: ModelStringInput | null,
  calendarBegin?: ModelStringInput | null,
  calendarEnd?: ModelStringInput | null,
  type?: ModelQualifTypeInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelQualificationConditionInput | null > | null,
  or?: Array< ModelQualificationConditionInput | null > | null,
  not?: ModelQualificationConditionInput | null,
};

export type ModelQualifTypeInput = {
  eq?: QualifType | null,
  ne?: QualifType | null,
};

export type Qualification = {
  __typename: "Qualification",
  id: string,
  name?: string | null,
  institute?: string | null,
  calendarBegin?: string | null,
  calendarEnd?: string | null,
  type?: QualifType | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQualificationInput = {
  id: string,
  name?: string | null,
  institute?: string | null,
  calendarBegin?: string | null,
  calendarEnd?: string | null,
  type?: QualifType | null,
  userID?: string | null,
};

export type DeleteQualificationInput = {
  id: string,
};

export type CreatePortfolioPostInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  technologies?: Array< string | null > | null,
  addressPost?: string | null,
  type?: PortfolioType | null,
  userID: string,
};

export enum PortfolioType {
  WEB = "WEB",
  APP = "APP",
  DATA_ANALYSIS = "DATA_ANALYSIS",
  AI = "AI",
}


export type ModelPortfolioPostConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  technologies?: ModelStringInput | null,
  addressPost?: ModelStringInput | null,
  type?: ModelPortfolioTypeInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPortfolioPostConditionInput | null > | null,
  or?: Array< ModelPortfolioPostConditionInput | null > | null,
  not?: ModelPortfolioPostConditionInput | null,
};

export type ModelPortfolioTypeInput = {
  eq?: PortfolioType | null,
  ne?: PortfolioType | null,
};

export type PortfolioPost = {
  __typename: "PortfolioPost",
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  technologies?: Array< string | null > | null,
  addressPost?: string | null,
  type?: PortfolioType | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePortfolioPostInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  technologies?: Array< string | null > | null,
  addressPost?: string | null,
  type?: PortfolioType | null,
  userID?: string | null,
};

export type DeletePortfolioPostInput = {
  id: string,
};

export type CreateSkillInput = {
  id?: string | null,
  name?: string | null,
  level?: SkillLevel | null,
  type?: SkillType | null,
  userID: string,
  href?: string | null,
};

export enum SkillLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}


export enum SkillType {
  BACKEND = "BACKEND",
  FRONTEND = "FRONTEND",
  DATABASE = "DATABASE",
}


export type ModelSkillConditionInput = {
  name?: ModelStringInput | null,
  level?: ModelSkillLevelInput | null,
  type?: ModelSkillTypeInput | null,
  userID?: ModelIDInput | null,
  href?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type ModelSkillLevelInput = {
  eq?: SkillLevel | null,
  ne?: SkillLevel | null,
};

export type ModelSkillTypeInput = {
  eq?: SkillType | null,
  ne?: SkillType | null,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  name?: string | null,
  level?: SkillLevel | null,
  type?: SkillType | null,
  userID: string,
  href?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSkillInput = {
  id: string,
  name?: string | null,
  level?: SkillLevel | null,
  type?: SkillType | null,
  userID?: string | null,
  href?: string | null,
};

export type DeleteSkillInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  image?: string | null,
  avatar?: string | null,
  CV?: string | null,
  descriptionLong?: string | null,
  description?: string | null,
  experience?: number | null,
  projectNumber?: number | null,
  support?: number | null,
  titles?: Array< string | null > | null,
  email?: string | null,
  phone?: string | null,
  github?: string | null,
  buyMeACoffee?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  CV?: ModelStringInput | null,
  descriptionLong?: ModelStringInput | null,
  description?: ModelStringInput | null,
  experience?: ModelIntInput | null,
  projectNumber?: ModelIntInput | null,
  support?: ModelIntInput | null,
  titles?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  github?: ModelStringInput | null,
  buyMeACoffee?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  image?: string | null,
  avatar?: string | null,
  CV?: string | null,
  descriptionLong?: string | null,
  description?: string | null,
  experience?: number | null,
  projectNumber?: number | null,
  support?: number | null,
  titles?: Array< string | null > | null,
  email?: string | null,
  phone?: string | null,
  github?: string | null,
  buyMeACoffee?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  Qualifications?: ModelQualificationConnection | null,
  Skills?: ModelSkillConnection | null,
  PortfolioPosts?: ModelPortfolioPostConnection | null,
  Services?: ModelServiceConnection | null,
  BlogPosts?: ModelBlogPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelQualificationConnection = {
  __typename: "ModelQualificationConnection",
  items:  Array<Qualification | null >,
  nextToken?: string | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
};

export type ModelPortfolioPostConnection = {
  __typename: "ModelPortfolioPostConnection",
  items:  Array<PortfolioPost | null >,
  nextToken?: string | null,
};

export type ModelServiceConnection = {
  __typename: "ModelServiceConnection",
  items:  Array<Service | null >,
  nextToken?: string | null,
};

export type ModelBlogPostConnection = {
  __typename: "ModelBlogPostConnection",
  items:  Array<BlogPost | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  image?: string | null,
  avatar?: string | null,
  CV?: string | null,
  descriptionLong?: string | null,
  description?: string | null,
  experience?: number | null,
  projectNumber?: number | null,
  support?: number | null,
  titles?: Array< string | null > | null,
  email?: string | null,
  phone?: string | null,
  github?: string | null,
  buyMeACoffee?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelBlogPostFilterInput = {
  id?: ModelIDInput | null,
  slug?: ModelStringInput | null,
  image?: ModelStringInput | null,
  category?: ModelCategoryTypeInput | null,
  subcategory?: ModelSubCategoryTypeInput | null,
  description?: ModelStringInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  href?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelBlogPostFilterInput | null > | null,
  or?: Array< ModelBlogPostFilterInput | null > | null,
  not?: ModelBlogPostFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelServiceFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  serviceData?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type ModelQualificationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  institute?: ModelStringInput | null,
  calendarBegin?: ModelStringInput | null,
  calendarEnd?: ModelStringInput | null,
  type?: ModelQualifTypeInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelQualificationFilterInput | null > | null,
  or?: Array< ModelQualificationFilterInput | null > | null,
  not?: ModelQualificationFilterInput | null,
};

export type ModelPortfolioPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  technologies?: ModelStringInput | null,
  addressPost?: ModelStringInput | null,
  type?: ModelPortfolioTypeInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPortfolioPostFilterInput | null > | null,
  or?: Array< ModelPortfolioPostFilterInput | null > | null,
  not?: ModelPortfolioPostFilterInput | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  level?: ModelSkillLevelInput | null,
  type?: ModelSkillTypeInput | null,
  userID?: ModelIDInput | null,
  href?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  CV?: ModelStringInput | null,
  descriptionLong?: ModelStringInput | null,
  description?: ModelStringInput | null,
  experience?: ModelIntInput | null,
  projectNumber?: ModelIntInput | null,
  support?: ModelIntInput | null,
  titles?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  github?: ModelStringInput | null,
  buyMeACoffee?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBlogPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  slug?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  subcategory?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  subtitle?: ModelSubscriptionStringInput | null,
  href?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBlogPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogPostFilterInput | null > | null,
};

export type ModelSubscriptionServiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  serviceData?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionServiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionServiceFilterInput | null > | null,
};

export type ModelSubscriptionQualificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  institute?: ModelSubscriptionStringInput | null,
  calendarBegin?: ModelSubscriptionStringInput | null,
  calendarEnd?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQualificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionQualificationFilterInput | null > | null,
};

export type ModelSubscriptionPortfolioPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  technologies?: ModelSubscriptionStringInput | null,
  addressPost?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPortfolioPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPortfolioPostFilterInput | null > | null,
};

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  href?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  CV?: ModelSubscriptionStringInput | null,
  descriptionLong?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  experience?: ModelSubscriptionIntInput | null,
  projectNumber?: ModelSubscriptionIntInput | null,
  support?: ModelSubscriptionIntInput | null,
  titles?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  github?: ModelSubscriptionStringInput | null,
  buyMeACoffee?: ModelSubscriptionStringInput | null,
  facebook?: ModelSubscriptionStringInput | null,
  twitter?: ModelSubscriptionStringInput | null,
  instagram?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlogPostMutationVariables = {
  input: CreateBlogPostInput,
  condition?: ModelBlogPostConditionInput | null,
};

export type CreateBlogPostMutation = {
  createBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    slug?: string | null,
    image?: string | null,
    category?: CategoryType | null,
    subcategory?: SubCategoryType | null,
    description?: string | null,
    title?: string | null,
    subtitle?: string | null,
    href?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogPostMutationVariables = {
  input: UpdateBlogPostInput,
  condition?: ModelBlogPostConditionInput | null,
};

export type UpdateBlogPostMutation = {
  updateBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    slug?: string | null,
    image?: string | null,
    category?: CategoryType | null,
    subcategory?: SubCategoryType | null,
    description?: string | null,
    title?: string | null,
    subtitle?: string | null,
    href?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogPostMutationVariables = {
  input: DeleteBlogPostInput,
  condition?: ModelBlogPostConditionInput | null,
};

export type DeleteBlogPostMutation = {
  deleteBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    slug?: string | null,
    image?: string | null,
    category?: CategoryType | null,
    subcategory?: SubCategoryType | null,
    description?: string | null,
    title?: string | null,
    subtitle?: string | null,
    href?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type CreateServiceMutation = {
  createService?:  {
    __typename: "Service",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
    serviceData?: Array< string | null > | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type UpdateServiceMutation = {
  updateService?:  {
    __typename: "Service",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
    serviceData?: Array< string | null > | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type DeleteServiceMutation = {
  deleteService?:  {
    __typename: "Service",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
    serviceData?: Array< string | null > | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQualificationMutationVariables = {
  input: CreateQualificationInput,
  condition?: ModelQualificationConditionInput | null,
};

export type CreateQualificationMutation = {
  createQualification?:  {
    __typename: "Qualification",
    id: string,
    name?: string | null,
    institute?: string | null,
    calendarBegin?: string | null,
    calendarEnd?: string | null,
    type?: QualifType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQualificationMutationVariables = {
  input: UpdateQualificationInput,
  condition?: ModelQualificationConditionInput | null,
};

export type UpdateQualificationMutation = {
  updateQualification?:  {
    __typename: "Qualification",
    id: string,
    name?: string | null,
    institute?: string | null,
    calendarBegin?: string | null,
    calendarEnd?: string | null,
    type?: QualifType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQualificationMutationVariables = {
  input: DeleteQualificationInput,
  condition?: ModelQualificationConditionInput | null,
};

export type DeleteQualificationMutation = {
  deleteQualification?:  {
    __typename: "Qualification",
    id: string,
    name?: string | null,
    institute?: string | null,
    calendarBegin?: string | null,
    calendarEnd?: string | null,
    type?: QualifType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePortfolioPostMutationVariables = {
  input: CreatePortfolioPostInput,
  condition?: ModelPortfolioPostConditionInput | null,
};

export type CreatePortfolioPostMutation = {
  createPortfolioPost?:  {
    __typename: "PortfolioPost",
    id: string,
    title?: string | null,
    description?: string | null,
    image?: string | null,
    technologies?: Array< string | null > | null,
    addressPost?: string | null,
    type?: PortfolioType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePortfolioPostMutationVariables = {
  input: UpdatePortfolioPostInput,
  condition?: ModelPortfolioPostConditionInput | null,
};

export type UpdatePortfolioPostMutation = {
  updatePortfolioPost?:  {
    __typename: "PortfolioPost",
    id: string,
    title?: string | null,
    description?: string | null,
    image?: string | null,
    technologies?: Array< string | null > | null,
    addressPost?: string | null,
    type?: PortfolioType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePortfolioPostMutationVariables = {
  input: DeletePortfolioPostInput,
  condition?: ModelPortfolioPostConditionInput | null,
};

export type DeletePortfolioPostMutation = {
  deletePortfolioPost?:  {
    __typename: "PortfolioPost",
    id: string,
    title?: string | null,
    description?: string | null,
    image?: string | null,
    technologies?: Array< string | null > | null,
    addressPost?: string | null,
    type?: PortfolioType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    name?: string | null,
    level?: SkillLevel | null,
    type?: SkillType | null,
    userID: string,
    href?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    name?: string | null,
    level?: SkillLevel | null,
    type?: SkillType | null,
    userID: string,
    href?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    name?: string | null,
    level?: SkillLevel | null,
    type?: SkillType | null,
    userID: string,
    href?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    image?: string | null,
    avatar?: string | null,
    CV?: string | null,
    descriptionLong?: string | null,
    description?: string | null,
    experience?: number | null,
    projectNumber?: number | null,
    support?: number | null,
    titles?: Array< string | null > | null,
    email?: string | null,
    phone?: string | null,
    github?: string | null,
    buyMeACoffee?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    Qualifications?:  {
      __typename: "ModelQualificationConnection",
      nextToken?: string | null,
    } | null,
    Skills?:  {
      __typename: "ModelSkillConnection",
      nextToken?: string | null,
    } | null,
    PortfolioPosts?:  {
      __typename: "ModelPortfolioPostConnection",
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelServiceConnection",
      nextToken?: string | null,
    } | null,
    BlogPosts?:  {
      __typename: "ModelBlogPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    image?: string | null,
    avatar?: string | null,
    CV?: string | null,
    descriptionLong?: string | null,
    description?: string | null,
    experience?: number | null,
    projectNumber?: number | null,
    support?: number | null,
    titles?: Array< string | null > | null,
    email?: string | null,
    phone?: string | null,
    github?: string | null,
    buyMeACoffee?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    Qualifications?:  {
      __typename: "ModelQualificationConnection",
      nextToken?: string | null,
    } | null,
    Skills?:  {
      __typename: "ModelSkillConnection",
      nextToken?: string | null,
    } | null,
    PortfolioPosts?:  {
      __typename: "ModelPortfolioPostConnection",
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelServiceConnection",
      nextToken?: string | null,
    } | null,
    BlogPosts?:  {
      __typename: "ModelBlogPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    image?: string | null,
    avatar?: string | null,
    CV?: string | null,
    descriptionLong?: string | null,
    description?: string | null,
    experience?: number | null,
    projectNumber?: number | null,
    support?: number | null,
    titles?: Array< string | null > | null,
    email?: string | null,
    phone?: string | null,
    github?: string | null,
    buyMeACoffee?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    Qualifications?:  {
      __typename: "ModelQualificationConnection",
      nextToken?: string | null,
    } | null,
    Skills?:  {
      __typename: "ModelSkillConnection",
      nextToken?: string | null,
    } | null,
    PortfolioPosts?:  {
      __typename: "ModelPortfolioPostConnection",
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelServiceConnection",
      nextToken?: string | null,
    } | null,
    BlogPosts?:  {
      __typename: "ModelBlogPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogPostQueryVariables = {
  id: string,
};

export type GetBlogPostQuery = {
  getBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    slug?: string | null,
    image?: string | null,
    category?: CategoryType | null,
    subcategory?: SubCategoryType | null,
    description?: string | null,
    title?: string | null,
    subtitle?: string | null,
    href?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogPostsQueryVariables = {
  filter?: ModelBlogPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogPostsQuery = {
  listBlogPosts?:  {
    __typename: "ModelBlogPostConnection",
    items:  Array< {
      __typename: "BlogPost",
      id: string,
      slug?: string | null,
      image?: string | null,
      category?: CategoryType | null,
      subcategory?: SubCategoryType | null,
      description?: string | null,
      title?: string | null,
      subtitle?: string | null,
      href?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BlogPostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlogPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BlogPostsByUserIDQuery = {
  blogPostsByUserID?:  {
    __typename: "ModelBlogPostConnection",
    items:  Array< {
      __typename: "BlogPost",
      id: string,
      slug?: string | null,
      image?: string | null,
      category?: CategoryType | null,
      subcategory?: SubCategoryType | null,
      description?: string | null,
      title?: string | null,
      subtitle?: string | null,
      href?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService?:  {
    __typename: "Service",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
    serviceData?: Array< string | null > | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices?:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
      serviceData?: Array< string | null > | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ServicesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ServicesByUserIDQuery = {
  servicesByUserID?:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
      serviceData?: Array< string | null > | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQualificationQueryVariables = {
  id: string,
};

export type GetQualificationQuery = {
  getQualification?:  {
    __typename: "Qualification",
    id: string,
    name?: string | null,
    institute?: string | null,
    calendarBegin?: string | null,
    calendarEnd?: string | null,
    type?: QualifType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQualificationsQueryVariables = {
  filter?: ModelQualificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQualificationsQuery = {
  listQualifications?:  {
    __typename: "ModelQualificationConnection",
    items:  Array< {
      __typename: "Qualification",
      id: string,
      name?: string | null,
      institute?: string | null,
      calendarBegin?: string | null,
      calendarEnd?: string | null,
      type?: QualifType | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QualificationsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQualificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QualificationsByUserIDQuery = {
  qualificationsByUserID?:  {
    __typename: "ModelQualificationConnection",
    items:  Array< {
      __typename: "Qualification",
      id: string,
      name?: string | null,
      institute?: string | null,
      calendarBegin?: string | null,
      calendarEnd?: string | null,
      type?: QualifType | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPortfolioPostQueryVariables = {
  id: string,
};

export type GetPortfolioPostQuery = {
  getPortfolioPost?:  {
    __typename: "PortfolioPost",
    id: string,
    title?: string | null,
    description?: string | null,
    image?: string | null,
    technologies?: Array< string | null > | null,
    addressPost?: string | null,
    type?: PortfolioType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPortfolioPostsQueryVariables = {
  filter?: ModelPortfolioPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPortfolioPostsQuery = {
  listPortfolioPosts?:  {
    __typename: "ModelPortfolioPostConnection",
    items:  Array< {
      __typename: "PortfolioPost",
      id: string,
      title?: string | null,
      description?: string | null,
      image?: string | null,
      technologies?: Array< string | null > | null,
      addressPost?: string | null,
      type?: PortfolioType | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PortfolioPostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPortfolioPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PortfolioPostsByUserIDQuery = {
  portfolioPostsByUserID?:  {
    __typename: "ModelPortfolioPostConnection",
    items:  Array< {
      __typename: "PortfolioPost",
      id: string,
      title?: string | null,
      description?: string | null,
      image?: string | null,
      technologies?: Array< string | null > | null,
      addressPost?: string | null,
      type?: PortfolioType | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    name?: string | null,
    level?: SkillLevel | null,
    type?: SkillType | null,
    userID: string,
    href?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name?: string | null,
      level?: SkillLevel | null,
      type?: SkillType | null,
      userID: string,
      href?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SkillsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SkillsByUserIDQuery = {
  skillsByUserID?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name?: string | null,
      level?: SkillLevel | null,
      type?: SkillType | null,
      userID: string,
      href?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    image?: string | null,
    avatar?: string | null,
    CV?: string | null,
    descriptionLong?: string | null,
    description?: string | null,
    experience?: number | null,
    projectNumber?: number | null,
    support?: number | null,
    titles?: Array< string | null > | null,
    email?: string | null,
    phone?: string | null,
    github?: string | null,
    buyMeACoffee?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    Qualifications?:  {
      __typename: "ModelQualificationConnection",
      nextToken?: string | null,
    } | null,
    Skills?:  {
      __typename: "ModelSkillConnection",
      nextToken?: string | null,
    } | null,
    PortfolioPosts?:  {
      __typename: "ModelPortfolioPostConnection",
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelServiceConnection",
      nextToken?: string | null,
    } | null,
    BlogPosts?:  {
      __typename: "ModelBlogPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      image?: string | null,
      avatar?: string | null,
      CV?: string | null,
      descriptionLong?: string | null,
      description?: string | null,
      experience?: number | null,
      projectNumber?: number | null,
      support?: number | null,
      titles?: Array< string | null > | null,
      email?: string | null,
      phone?: string | null,
      github?: string | null,
      buyMeACoffee?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlogPostSubscriptionVariables = {
  filter?: ModelSubscriptionBlogPostFilterInput | null,
};

export type OnCreateBlogPostSubscription = {
  onCreateBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    slug?: string | null,
    image?: string | null,
    category?: CategoryType | null,
    subcategory?: SubCategoryType | null,
    description?: string | null,
    title?: string | null,
    subtitle?: string | null,
    href?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogPostSubscriptionVariables = {
  filter?: ModelSubscriptionBlogPostFilterInput | null,
};

export type OnUpdateBlogPostSubscription = {
  onUpdateBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    slug?: string | null,
    image?: string | null,
    category?: CategoryType | null,
    subcategory?: SubCategoryType | null,
    description?: string | null,
    title?: string | null,
    subtitle?: string | null,
    href?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogPostSubscriptionVariables = {
  filter?: ModelSubscriptionBlogPostFilterInput | null,
};

export type OnDeleteBlogPostSubscription = {
  onDeleteBlogPost?:  {
    __typename: "BlogPost",
    id: string,
    slug?: string | null,
    image?: string | null,
    category?: CategoryType | null,
    subcategory?: SubCategoryType | null,
    description?: string | null,
    title?: string | null,
    subtitle?: string | null,
    href?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnCreateServiceSubscription = {
  onCreateService?:  {
    __typename: "Service",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
    serviceData?: Array< string | null > | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService?:  {
    __typename: "Service",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
    serviceData?: Array< string | null > | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService?:  {
    __typename: "Service",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
    serviceData?: Array< string | null > | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQualificationSubscriptionVariables = {
  filter?: ModelSubscriptionQualificationFilterInput | null,
};

export type OnCreateQualificationSubscription = {
  onCreateQualification?:  {
    __typename: "Qualification",
    id: string,
    name?: string | null,
    institute?: string | null,
    calendarBegin?: string | null,
    calendarEnd?: string | null,
    type?: QualifType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQualificationSubscriptionVariables = {
  filter?: ModelSubscriptionQualificationFilterInput | null,
};

export type OnUpdateQualificationSubscription = {
  onUpdateQualification?:  {
    __typename: "Qualification",
    id: string,
    name?: string | null,
    institute?: string | null,
    calendarBegin?: string | null,
    calendarEnd?: string | null,
    type?: QualifType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQualificationSubscriptionVariables = {
  filter?: ModelSubscriptionQualificationFilterInput | null,
};

export type OnDeleteQualificationSubscription = {
  onDeleteQualification?:  {
    __typename: "Qualification",
    id: string,
    name?: string | null,
    institute?: string | null,
    calendarBegin?: string | null,
    calendarEnd?: string | null,
    type?: QualifType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePortfolioPostSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioPostFilterInput | null,
};

export type OnCreatePortfolioPostSubscription = {
  onCreatePortfolioPost?:  {
    __typename: "PortfolioPost",
    id: string,
    title?: string | null,
    description?: string | null,
    image?: string | null,
    technologies?: Array< string | null > | null,
    addressPost?: string | null,
    type?: PortfolioType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePortfolioPostSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioPostFilterInput | null,
};

export type OnUpdatePortfolioPostSubscription = {
  onUpdatePortfolioPost?:  {
    __typename: "PortfolioPost",
    id: string,
    title?: string | null,
    description?: string | null,
    image?: string | null,
    technologies?: Array< string | null > | null,
    addressPost?: string | null,
    type?: PortfolioType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePortfolioPostSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioPostFilterInput | null,
};

export type OnDeletePortfolioPostSubscription = {
  onDeletePortfolioPost?:  {
    __typename: "PortfolioPost",
    id: string,
    title?: string | null,
    description?: string | null,
    image?: string | null,
    technologies?: Array< string | null > | null,
    addressPost?: string | null,
    type?: PortfolioType | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    name?: string | null,
    level?: SkillLevel | null,
    type?: SkillType | null,
    userID: string,
    href?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    name?: string | null,
    level?: SkillLevel | null,
    type?: SkillType | null,
    userID: string,
    href?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    name?: string | null,
    level?: SkillLevel | null,
    type?: SkillType | null,
    userID: string,
    href?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    image?: string | null,
    avatar?: string | null,
    CV?: string | null,
    descriptionLong?: string | null,
    description?: string | null,
    experience?: number | null,
    projectNumber?: number | null,
    support?: number | null,
    titles?: Array< string | null > | null,
    email?: string | null,
    phone?: string | null,
    github?: string | null,
    buyMeACoffee?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    Qualifications?:  {
      __typename: "ModelQualificationConnection",
      nextToken?: string | null,
    } | null,
    Skills?:  {
      __typename: "ModelSkillConnection",
      nextToken?: string | null,
    } | null,
    PortfolioPosts?:  {
      __typename: "ModelPortfolioPostConnection",
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelServiceConnection",
      nextToken?: string | null,
    } | null,
    BlogPosts?:  {
      __typename: "ModelBlogPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    image?: string | null,
    avatar?: string | null,
    CV?: string | null,
    descriptionLong?: string | null,
    description?: string | null,
    experience?: number | null,
    projectNumber?: number | null,
    support?: number | null,
    titles?: Array< string | null > | null,
    email?: string | null,
    phone?: string | null,
    github?: string | null,
    buyMeACoffee?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    Qualifications?:  {
      __typename: "ModelQualificationConnection",
      nextToken?: string | null,
    } | null,
    Skills?:  {
      __typename: "ModelSkillConnection",
      nextToken?: string | null,
    } | null,
    PortfolioPosts?:  {
      __typename: "ModelPortfolioPostConnection",
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelServiceConnection",
      nextToken?: string | null,
    } | null,
    BlogPosts?:  {
      __typename: "ModelBlogPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    image?: string | null,
    avatar?: string | null,
    CV?: string | null,
    descriptionLong?: string | null,
    description?: string | null,
    experience?: number | null,
    projectNumber?: number | null,
    support?: number | null,
    titles?: Array< string | null > | null,
    email?: string | null,
    phone?: string | null,
    github?: string | null,
    buyMeACoffee?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    Qualifications?:  {
      __typename: "ModelQualificationConnection",
      nextToken?: string | null,
    } | null,
    Skills?:  {
      __typename: "ModelSkillConnection",
      nextToken?: string | null,
    } | null,
    PortfolioPosts?:  {
      __typename: "ModelPortfolioPostConnection",
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelServiceConnection",
      nextToken?: string | null,
    } | null,
    BlogPosts?:  {
      __typename: "ModelBlogPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
