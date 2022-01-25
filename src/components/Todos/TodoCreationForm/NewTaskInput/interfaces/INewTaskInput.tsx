import { Ref } from "react";
export interface INewTaskInput {
  inputRef: React.Ref<HTMLInputElement>,
  inputValue: string,
  type: string,
  name: string,
  id?: string,
  setInputValue?: (inputValue: string) => void,
  onKeydownFunc?: (key: string) => void,
}