export class Body {
  limit: number;
  orderBy?: string = "";
  offset: number;
  nameStartsWith?: string = "";
  ts?: number = 0;
  apikey?: string;
  hash?: string;
}
