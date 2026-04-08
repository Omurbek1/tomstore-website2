import { Card1 } from "@component/Card1";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import Typography from "@component/Typography";
import { currency, t } from "@utils/utils";

export default function CheckoutSummary() {
  return (
    <Card1>
      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">{t("Subtotal:")}</Typography>

        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            {currency(2610, 0)}
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">{t("Shipping:")}</Typography>

        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">{t("Tax:")}</Typography>

        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            {currency(40, 0)}
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
        <Typography color="text.hint">{t("Discount:")}</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <Divider mb="1rem" />

      <Typography fontSize="25px" fontWeight="600" lineHeight="1" textAlign="right">
        {currency(2610)}
      </Typography>
    </Card1>
  );
}
