export interface INewTaskInput {
  inputValue: string,
  type: string,
  name: string,
  id?: string,
  setInputValue?: (inputValue: string) => void,
  onKeydownFunc?: (key: string) => void,
}