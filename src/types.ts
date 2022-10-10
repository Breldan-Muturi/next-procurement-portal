import * as icons from "@mui/icons-material";

export interface SideMenuProps {
  label: string;
  path: string;
  icon: keyof typeof icons;
}

export interface AuthFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  code: string;
}

export interface CompanyFiles {
  registrationCertificate: File;
  cr12: File;
  kraPinCertificate: File;
  taxComplianceCertificate: File;
  agpoCertificate?: File;
}

export interface Options {
  name: string;
  value: string;
}

export interface FileUpload {
  path: string;
  contentType: string;
  file: File;
}
