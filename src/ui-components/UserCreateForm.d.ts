/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    image?: string;
    avatar?: string;
    CV?: string;
    descriptionLong?: string;
    description?: string;
    experience?: number;
    projectNumber?: number;
    support?: number;
    titles?: string[];
    email?: string;
    phone?: string;
    github?: string;
    buyMeACoffee?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
};
export declare type UserCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    CV?: ValidationFunction<string>;
    descriptionLong?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    experience?: ValidationFunction<number>;
    projectNumber?: ValidationFunction<number>;
    support?: ValidationFunction<number>;
    titles?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    github?: ValidationFunction<string>;
    buyMeACoffee?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    CV?: PrimitiveOverrideProps<TextFieldProps>;
    descriptionLong?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    experience?: PrimitiveOverrideProps<TextFieldProps>;
    projectNumber?: PrimitiveOverrideProps<TextFieldProps>;
    support?: PrimitiveOverrideProps<TextFieldProps>;
    titles?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    github?: PrimitiveOverrideProps<TextFieldProps>;
    buyMeACoffee?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
