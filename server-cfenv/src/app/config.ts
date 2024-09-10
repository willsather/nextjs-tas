import cfenv from "cfenv";

export function getVcapConfig() {
  const appEnv = cfenv.getAppEnv();
  return appEnv.getServiceCreds("database");
}

export default getVcapConfig();
