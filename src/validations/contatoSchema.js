import * as yup from "yup";

export const contatoSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Informe seu nome"),

  email: yup
    .string()
    .email("E-mail inválido")
    .required("Informe seu e-mail"),

  servico: yup
    .string()
    .required("Selecione um serviço"),

  mensagem: yup
    .string()
    .min(10, "Mensagem muito curta")
    .required("Digite uma mensagem"),
});