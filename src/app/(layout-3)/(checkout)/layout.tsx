"use client";

import { usePathname, useRouter } from "next/navigation";
import { Fragment, PropsWithChildren, useCallback, useMemo } from "react";
import Hidden from "@component/hidden";
import Stepper from "@component/Stepper";
import { t } from "@utils/utils";

const PATH_TO_STEP_MAP = {
  "/cart": 1,
  "/checkout": 2,
  "/payment": 3
};

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPathname = pathname ?? "";
  const stepperList = [
    { title: t("Cart"), disabled: false, path: "/cart" },
    { title: t("Details"), disabled: false, path: "/checkout" },
    { title: t("Payment"), disabled: false, path: "/payment" },
    { title: t("Review"), disabled: true, path: "/orders" }
  ];

  const selectedStep = useMemo(
    () => PATH_TO_STEP_MAP[currentPathname as keyof typeof PATH_TO_STEP_MAP] ?? 0,
    [currentPathname],
  );

  const handleStepChange = useCallback(
    (_step: unknown, index: number) => {
      const targetPath = stepperList[index]?.path;
      if (targetPath) {
        router.push(targetPath);
      }
    },
    [router, stepperList]
  );

  return (
    <Fragment>
      <Hidden down="md" mb="2rem">
        <Stepper
          stepperList={stepperList}
          selectedStep={selectedStep}
          onChange={handleStepChange}
        />
      </Hidden>

      {children}
    </Fragment>
  );
}
