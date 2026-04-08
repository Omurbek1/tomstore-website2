import { Fragment } from "react";

import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import { SemiSpan } from "@component/Typography";
import { ProductCard9 } from "@component/product-cards";
import Product from "@models/product.model";
import { t } from "@utils/utils";

// ==========================================================
interface Props {
  products: Product[];
}
// ==========================================================

export default function ProductListView({ products }: Props) {
  return (
    <Fragment>
      {products.map((item) => (
        <ProductCard9
          mb="1.25rem"
          id={item.id}
          key={item.id}
          slug={item.slug}
          price={item.price}
          title={item.title}
          off={item.discount}
          rating={item.rating}
          images={item.images ?? ["/placeholder.png"]}
          imgUrl={item.thumbnail}
          categories={
            Array.isArray(item.categories)
              ? item.categories.map((category) => String(category))
              : []
          }
        />
      ))}

      <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center" mt="32px">
        <SemiSpan>{t("Showing 1-9 of 1.3k Products")}</SemiSpan>
        <Pagination pageCount={10} />
      </FlexBox>
    </Fragment>
  );
}
