import Link from "next/link";
import { Fragment } from "react";
import { IconPackage } from "@tabler/icons-react";
import axios from "@lib/axios";
// GLOBAL CUSTOM COMPONENTS
import { Button } from "@component/buttons";
import DashboardPageHeader from "@component/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { ProductForm } from "@sections/vendor-dashboard/products";
// CUSTOM DATA MODEL
import { SlugParams } from "interfaces";
import { t } from "@utils/utils";

const BACK_BUTTON = (
  <Link href="/vendor/products">
    <Button color="primary" bg="primary.light" px="2rem">
      {t("Back")}
    </Button>
  </Link>
);

export default async function ProductDetails({ params }: SlugParams) {
  const { slug } = await params;
  const { data } = await axios.get("/api/products/slug", { params: { slug } });
  const categories = [
    { label: t("Fashion"), value: "fashion" },
    { label: t("Gadget"), value: "gadget" }
  ];

  return (
    <Fragment>
      <DashboardPageHeader
        title={t("Edit Product")}
        Icon={<IconPackage size={24} />}
        button={BACK_BUTTON}
      />

      <ProductForm product={data} categories={categories} />
    </Fragment>
  );
}
