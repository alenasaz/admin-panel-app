import { sortBy, slice } from 'lodash' 
 
import {getSortAscending, getSortColumn} from "./sort_selector"; 
 
export function getProductsList(appState) { 
    return appState.productListReducer.productsList; 
} 
 
export function getResultProductsList(appState) {
    const { FilterDate,FilterDateTo, FilterSumFrom,FilterSumTo, FilterNumFio  } = appState.filterReducer;
    // filter((user) => user.name.includes(filterName) && user.userType.includes(admin)) 
 
    // const column = appState.sortReducer.column 
    const column = getSortColumn(appState) 
     const ascending = getSortAscending(appState) 
    let list = getProductsList(appState) 
    
    list =  list.filter(
        (info) =>
          info.sum >= FilterSumFrom &&
          (info.fullName.includes(FilterNumFio) ||
            info.id.includes(FilterNumFio)) 
          /*(new Date(info.date).getDate() >= new Date(FilterDate)
          Date(info.date) <= Date(FilterDateTo))*/
      )

 
  
    let newList = sortBy(list, column) 
    if (!ascending) { 
        newList = newList.reverse(); 
    } 
 
    return newList 
}

