export interface ButtonProps {
    onClick: () => void;
    label: string;
    color: string;
    disabled: boolean;
    outlined?:boolean;
}
