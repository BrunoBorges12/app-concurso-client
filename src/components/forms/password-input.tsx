"use client";

import {
  type ButtonProps,
  Field,
  Flex,
  type GroupProps,
  IconButton,
  Input,
  InputGroup,
  type InputProps,
  mergeRefs,
  useControllableState,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { type ComponentProps, forwardRef, type ReactNode, useRef } from "react";

type FieldRootProps = ComponentProps<typeof Field.Root>;
type FieldLabelProps = ComponentProps<typeof Field.Label>;
type FieldHelperTextProps = ComponentProps<typeof Field.HelperText>;
type FieldErrorTextProps = ComponentProps<typeof Field.ErrorText>;

interface PasswordVisibilityProps {
  defaultVisible?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  visibilityIcon?: {
    on: ReactNode;
    off: ReactNode;
  };
}

export interface PasswordInputProps extends InputProps, PasswordVisibilityProps {
  label?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  labelEndElement?: ReactNode;
  rootProps?: Omit<FieldRootProps, "children">;
  labelProps?: FieldLabelProps;
  helperTextProps?: FieldHelperTextProps;
  errorTextProps?: FieldErrorTextProps;
  inputGroupProps?: Omit<GroupProps, "children">;
}

const defaultLabelProps = {
  color: "gray.300",
  fontSize: "13px",
  fontWeight: "semibold",
  textTransform: "uppercase",
  letterSpacing: "wider",
} satisfies FieldLabelProps;

const defaultInputProps = {
  size: "xl",
  bg: "whiteAlpha.100",
  borderColor: "whiteAlpha.200",
  color: "white",
  borderRadius: "xl",
  h: 14,
  px: 4,
  pe: 12,
  transition: "all 0.2s",
  _placeholder: { color: "whiteAlpha.400" },
  _hover: { borderColor: "teal.400", bg: "whiteAlpha.200" },
  _focusVisible: {
    borderColor: "teal.400",
    outline: "none",
    boxShadow: "0 0 0 1px var(--chakra-colors-teal-400)",
  },
} satisfies InputProps;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    {
      label,
      helperText,
      errorText,
      labelEndElement,
      rootProps,
      labelProps,
      helperTextProps,
      errorTextProps,
      inputGroupProps,
      defaultVisible,
      visible: visibleProp,
      onVisibleChange,
      visibilityIcon = {
        on: <Eye size={18} />,
        off: <EyeOff size={18} />,
      },
      ...inputProps
    },
    ref,
  ) {
    const isInvalid = rootProps?.invalid ?? Boolean(errorText);
    const [visible, setVisible] = useControllableState({
      value: visibleProp,
      defaultValue: defaultVisible ?? false,
      onChange: onVisibleChange,
    });
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <Field.Root {...rootProps} invalid={isInvalid}>
        {label ? (
          <Flex justify="space-between" align="baseline" w="full" mb={1}>
            <Field.Label {...defaultLabelProps} {...labelProps}>
              {label}
            </Field.Label>
            {labelEndElement}
          </Flex>
        ) : null}

        <InputGroup
          {...inputGroupProps}
          endElement={
            <VisibilityTrigger
              disabled={inputProps.disabled}
              onPointerDown={(event) => {
                if (inputProps.disabled || event.button !== 0) {
                  return;
                }

                event.preventDefault();
                setVisible(!visible);
                inputRef.current?.focus();
              }}
            >
              {visible ? visibilityIcon.off : visibilityIcon.on}
            </VisibilityTrigger>
          }
        >
          <Input
            ref={mergeRefs(ref, inputRef)}
            {...defaultInputProps}
            {...inputProps}
            type={visible ? "text" : "password"}
          />
        </InputGroup>

        {helperText ? <Field.HelperText {...helperTextProps}>{helperText}</Field.HelperText> : null}
        {errorText ? <Field.ErrorText {...errorTextProps}>{errorText}</Field.ErrorText> : null}
      </Field.Root>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

const VisibilityTrigger = forwardRef<HTMLButtonElement, ButtonProps>(
  function VisibilityTrigger(props, ref) {
    return (
      <IconButton
        ref={ref}
        tabIndex={-1}
        me="-2"
        aspectRatio="square"
        size="sm"
        variant="ghost"
        color="whiteAlpha.700"
        _hover={{ bg: "whiteAlpha.100", color: "white" }}
        _active={{ bg: "whiteAlpha.200" }}
        aria-label="Alternar visibilidade da senha"
        {...props}
      />
    );
  },
);

VisibilityTrigger.displayName = "VisibilityTrigger";
