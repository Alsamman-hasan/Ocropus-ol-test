import { IState } from "UiKit/Footer/types";

export const inputscollection = (state: IState) => {
  const inputs = [
    { value: state.name || "", label: "Ваше имя*", params: "name" },
    { value: state?.email || "", label: "E-mail*", params: "email" },
    { value: state.phone || "", label: "Телефон", params: "phone" },
    {
      value: state.company || "",
      label: "Какую компанию вы представляете?",
      params: "company",
    },
    {
      value: state.project || "",
      label: "Раскажите о проекте",
      params: "project",
    },
  ];
  return inputs;
};
