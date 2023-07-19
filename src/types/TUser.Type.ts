import { MetaDataType } from './TMetaData-Type';

export type UserType = {
  ID: string;
  avatar: string;
  username: string;
  email: string;
  language: string;
  role: string;
  capabilities: string | null;
  validationCode: string | null;
  distributor: string;
  status: string;
  created: string;
  updated: string;
  deleted: string | null;
  metadata: MetaDataType[] | null;
};
