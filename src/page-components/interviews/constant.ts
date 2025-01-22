import { Column } from "@/types/table";
import { ActionButtons } from "./ActionButtons";

export const ALL_INTERVIEWS_COLUMNS: Column[] = [
  { key: "company", label: "Company" },
  { key: "position", label: "Position" },
  { key: "created_at", label: "Created" },
  { key: "credits_used", label: "Credits Used" },
  { key: "actionButtons", label: "" },
];

export const getTableItems = (intrviews: any[]): any[] =>
  intrviews.map((intrview) => ({
    ...intrview,
    actionButtons: {
      type: "component",
      component: ActionButtons,
    },
  }));

//   export const getTableItems = (
//     productsData: IProduct[],
//     role: TypesUsers
//   ): IProduct[] =>
//     productsData.map((product) => ({
//       ...product,
//       actionButtons: {
//         type: "component",
//         component: ActionsButtons,
//         props: {
//           id: product.id,
//           role, // Передаем роль в качестве пропа
//         },
//       },
//     }));
