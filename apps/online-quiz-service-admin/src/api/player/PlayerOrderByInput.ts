import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
