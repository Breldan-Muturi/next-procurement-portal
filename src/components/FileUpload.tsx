import React, { Dispatch, SetStateAction } from "react";

interface Props {
  registrationCertificate: File;
  setRegistrationCertificate: Dispatch<SetStateAction<File>>;
}

export default function FileUpload({
  registrationCertificate,
  setRegistrationCertificate,
}: Props) {
  return <div>FileUpload</div>;
}
