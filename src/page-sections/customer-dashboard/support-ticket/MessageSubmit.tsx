"use client";

import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import { t } from "@utils/utils";

export default function MessageSubmit() {
  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <TextArea
        rows={8}
        fullWidth
        mb="1.5rem"
        borderRadius={8}
        placeholder={t("Write your message here...")}
      />

      <Button ml="auto" color="primary" variant="contained" onClick={handleFormSubmit}>
        {t("Post message")}
      </Button>
    </>
  );
}
