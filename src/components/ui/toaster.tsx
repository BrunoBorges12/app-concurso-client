"use client";

import {
  createToaster,
  Portal,
  Spinner,
  Stack,
  ToastCloseTrigger,
  ToastDescription,
  Toaster,
  ToastIndicator,
  ToastRoot,
  ToastTitle,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "top-end",
  pauseOnPageIdle: true,
});

export function AppToaster() {
  return (
    <Portal>
      <Toaster toaster={toaster}>
        {(toast) => (
          <ToastRoot display="flex" gap="3" width="sm">
            {toast.type === "loading" ? (
              <Spinner size="sm" color="teal.solid" mt="1" />
            ) : (
              <ToastIndicator mt="1" />
            )}

            <Stack gap="1" flex="1" minW="0">
              {toast.title ? <ToastTitle>{toast.title}</ToastTitle> : null}
              {toast.description ? <ToastDescription>{toast.description}</ToastDescription> : null}
            </Stack>

            {toast.closable ? <ToastCloseTrigger /> : null}
          </ToastRoot>
        )}
      </Toaster>
    </Portal>
  );
}
