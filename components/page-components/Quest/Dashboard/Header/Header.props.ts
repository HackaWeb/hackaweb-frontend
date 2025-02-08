import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DashboardHeaderProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLTableRowElement>,
        HTMLTableRowElement
    > {
    items: string[];
}
