import { Category } from "src/app/models/category";
import { Lauches } from "src/app/models/lauches";

export function MergeForCategory(lauches: any, categorys: any) {
    const value = lauches.map((element: Lauches) => ({
        ...categorys.find((o: Category) => o.id === element.idCategoria),
        ...element
    }));
    return value;
}