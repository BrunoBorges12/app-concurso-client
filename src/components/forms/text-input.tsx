import {
  Field,
  Flex,
  Input,
  InputGroup,
  type InputGroupProps,
  type InputProps,
} from "@chakra-ui/react";
import { type ComponentProps, forwardRef, type ReactNode } from "react";

type FieldRootProps = ComponentProps<typeof Field.Root>;
type FieldLabelProps = ComponentProps<typeof Field.Label>;
type FieldHelperTextProps = ComponentProps<typeof Field.HelperText>;
type FieldErrorTextProps = ComponentProps<typeof Field.ErrorText>;

export interface TextInputProps extends InputProps {
  label?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  labelEndElement?: ReactNode;
  startElement?: ReactNode;
  endElement?: ReactNode;
  rootProps?: Omit<FieldRootProps, "children">;
  labelProps?: FieldLabelProps;
  helperTextProps?: FieldHelperTextProps;
  errorTextProps?: FieldErrorTextProps;
  inputGroupProps?: Omit<InputGroupProps, "children" | "startElement" | "endElement">;
}

const defaultInputProps = {
  size: "xl",
  variant: "outline",
} satisfies InputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  {
    label,
    helperText,
    errorText,
    labelEndElement,
    startElement,
    endElement,
    rootProps,
    labelProps,
    helperTextProps,
    errorTextProps,
    inputGroupProps,
    ...inputProps
  },
  ref,
) {
  const hasInputGroup = Boolean(startElement || endElement);
  const isInvalid = rootProps?.invalid ?? Boolean(errorText);

  const inputElement = <Input ref={ref} {...defaultInputProps} {...inputProps} />;

  return (
    <Field.Root {...rootProps} invalid={isInvalid}>
      {label ? (
        <Flex justify="space-between" align="baseline" w="full" mb={1}>
          <Field.Label {...labelProps}>{label}</Field.Label>
          {labelEndElement}
        </Flex>
      ) : null}

      {hasInputGroup ? (
        <InputGroup {...inputGroupProps} startElement={startElement} endElement={endElement}>
          {inputElement}
        </InputGroup>
      ) : (
        inputElement
      )}

      {helperText ? <Field.HelperText {...helperTextProps}>{helperText}</Field.HelperText> : null}
      {errorText ? <Field.ErrorText {...errorTextProps}>{errorText}</Field.ErrorText> : null}
    </Field.Root>
  );
});

TextInput.displayName = "TextInput";
