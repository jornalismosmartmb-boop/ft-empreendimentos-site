import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ da Solutec", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("GUSTAVO JESUS DA SILVA COSTA LTDA");
    expect(company.cnpj).toBe("57.491.662/0001-29");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("82.19-9-99");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Catu");
    expect(company.address.zip).toBe("48.110-000");
  });
});
