import Link from "next/link";

function Route({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return(
    <Link key={route} href={route}>{children}</Link>
  );
}

export default Route;
