import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import Typography, { Span } from "@component/Typography";
import { currency, t } from "@utils/utils";

export default function CheckoutSummary2() {
  return (
    <div>
      <Typography color="secondary.900" fontWeight="700" mb="1.5rem">
        {t("Your order")}
      </Typography>

      {cartList.map((item) => (
        <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem" key={item.name}>
          <Typography>
            <Span fontWeight="700" fontSize="14px">
              {item.quantity}
            </Span>{" "}
            x {item.name}
          </Typography>
          <Typography>{currency(item.price)}</Typography>
        </FlexBox>
      ))}

      <Divider bg="gray.300" mb="1.5rem" />

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">{t("Subtotal:")}</Typography>
        <Typography fontWeight="700">{currency(2610)}</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">{t("Shipping:")}</Typography>
        <Typography fontWeight="700">-</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">{t("Tax:")}</Typography>
        <Typography fontWeight="700">{currency(40)}</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem">
        <Typography color="text.hint">{t("Discount:")}</Typography>
        <Typography fontWeight="700">-</Typography>
      </FlexBox>

      <Divider bg="gray.300" mb="0.5rem" />

      <FlexBox fontWeight="700" justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography>{t("Total:")}</Typography>
        <Typography fontWeight="700">{currency(2610)}</Typography>
      </FlexBox>
    </div>
  );
}

const cartList = [
  { name: "iPhone 12", quantity: 1, price: 999 },
  { name: "iPhone 12 pro", quantity: 1, price: 1199 },
  { name: "iPhone 12 pro max", quantity: 1, price: 1299 }
];
