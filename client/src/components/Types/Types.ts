import { ChangeEvent } from "react";

export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export interface ShortState {
  description: string;
}

export interface PreviewState {
  imgPreview: File | undefined;
  header: string;
  description: string;
}

export interface ErrorObj {
  [key: string]: string;
}
