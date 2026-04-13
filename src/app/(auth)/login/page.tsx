import { AuthSplitLayout } from "@/feature/auth/components/auth-split-layout";
import { FormLogin } from "@/feature/auth/components/forms/form-login";

export default function AuthPage() {
  return (
    <AuthSplitLayout>
      <FormLogin />
    </AuthSplitLayout>
  );
}
