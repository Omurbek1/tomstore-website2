"use client";

import Link from "next/link";
import { Fragment } from "react";
import { IconPackage } from "@tabler/icons-react";
// GLOBAL CUSTOM COMPONENTS
import { Button } from "@component/buttons";
import DashboardPageHeader from "@component/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { ProductForm } from "@sections/vendor-dashboard/products";
import { t } from "@utils/utils";

const HEADER_LINK = (
  <Link href="/vendor/products">
    <Button color="primary">{t("Back")}</Button>
  </Link>
);

export default function AddProduct() {
  const categories = [
    { label: t("Fashion"), value: "fashion" },
    { label: t("Gadget"), value: "gadget" }
  ];

  return (
    <Fragment>
      <DashboardPageHeader
        title={t("Add Product")}
        button={HEADER_LINK}
        Icon={<IconPackage size={24} />}
      />

      <ProductForm categories={categories} />
    </Fragment>
  );
}
