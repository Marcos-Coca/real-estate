import { Layout as MainLayout } from "@main/components/Layout";

export const LAYOUTS = {
  main: MainLayout,
};

export type Layouts = keyof typeof LAYOUTS;
