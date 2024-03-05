import useAuth from "@/hooks/useAuth";

type UserRole = "Users" | "Admin";

type Props =
  | { roles: Array<UserRole>; children: React.ReactNode }
  | { roles: Array<`-${UserRole}`>; children: React.ReactNode };

export const Authorization: React.FC<Props> = ({ roles, children }) => {
  const { user } = useAuth();

  function isPermitted(roles: Array<UserRole | `-${UserRole}`>) {
    const exceptedRoles = roles
      .filter((role) => role.startsWith("-"))
      .map((role) => role.slice(1));
    const isExcepted = exceptedRoles.some((role) => user?.role === role);

    if (exceptedRoles.length > 0) {
      return !isExcepted;
    }

    const acceptedRoles = roles.filter((role) => !role.startsWith("-"));

    const isAccepted = acceptedRoles.some((role) => user?.role === role);

    return isAccepted;
  }

  if (!isPermitted(roles)) return null;

  return <>{children}</>;
};
