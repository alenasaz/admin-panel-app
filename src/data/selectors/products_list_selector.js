import { sortBy, slice } from "lodash";

import { getSortAscending, getSortColumn } from "./sort_selector";
import { getPagingSize, getCurrentPage } from ".";

export function getProductsList(appState) {
  return appState.productListReducer.productsList;
}

export function getUsersIsOpenEditForm(appState) {
  return appState.productListReducer.isOpenEditForm;
}

export function getResultProductsList(appState) {
  const { FilterDate, FilterDateTo, FilterSumFrom, FilterSumTo, FilterNumFio } =
    appState.filterReducer;
  // filter((user) => user.name.includes(filterName) && user.userType.includes(admin))

  // const column = appState.sortReducer.column
  const column = getSortColumn(appState);
  const ascending = getSortAscending(appState);
  let list = getProductsList(appState);

  list = list.filter(
    (info) =>
      info.sum >= FilterSumFrom &&
      (info.fullName.includes(FilterNumFio) || info.id.includes(FilterNumFio))
    /*(new Date(info.date).getDate() >= new Date(FilterDate)
          Date(info.date) <= Date(FilterDateTo))*/
  );

  const currentPage = getCurrentPage(appState);
  const pagingSize = getPagingSize(appState);
  const skip = (currentPage - 1) * pagingSize;
  const take = pagingSize;
  list = slice(list, skip, skip + take);

  let newList = sortBy(list, column);
  if (!ascending) {
    newList = newList.reverse();
  }

  return newList;
}
