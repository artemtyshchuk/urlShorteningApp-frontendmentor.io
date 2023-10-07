const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

export const referenceShorteningRequest = (originalLink: string) =>
  BASE_URL + originalLink;
