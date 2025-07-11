import type { ComponentPropsWithoutRef } from "react";
import classes from "./ButtonLink.module.scss";

export default function ButtonLink({
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <>
      <a className={classes.button} {...props} />
    </>
  );
}
