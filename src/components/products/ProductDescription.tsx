import Typography, { H3 } from "@component/Typography";
import { t } from "@utils/utils";

export default function ProductDescription() {
  return (
    <div>
      <H3 mb="1rem">{t("Specification:")}</H3>
      <Typography>
        {t("Brand:")} Beats <br />
        Model: S450 <br />
        Wireless Bluetooth Headset <br />
        FM Frequency Response: 87.5 – 108 MHz <br />
        Feature: FM Radio, Card Supported (Micro SD / TF) <br />
        Made in China <br />
      </Typography>
    </div>
  );
}
